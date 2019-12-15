#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "libavcodec/avcodec.h"
#include "libavutil/frame.h"
#include "libavutil/imgutils.h"


#include "libavformat/avformat.h"
#include "libavutil/mathematics.h"
#include "libavutil/time.h"

#define AV_CODEC_FLAG_GLOBAL_HEADER (1 << 22)
#define CODEC_FLAG_GLOBAL_HEADER AV_CODEC_FLAG_GLOBAL_HEADER
#define __STDC_CONSTANT_MACROS


static void encode(AVCodecContext *enc_ctx, AVFrame *frame, AVPacket *pkt, FILE *outfile, AVFormatContext *ofmt_ctx) {
  int ret;

  ret = avcodec_send_frame(enc_ctx, frame);
  if (ret < 0) {
    fprintf(stderr, "error sending a frmae for encoding \n");
    exit(1);
  }

  while( ret >= 0) {
    ret = avcodec_receive_packet(enc_ctx, pkt);
    if (ret == AVERROR(EAGAIN) || ret == AVERROR_EOF) {
      return ;
    } else  if (ret < 0) {
      fprintf(stderr, "error during encoding \n");
      exit(1);
    }

    printf("encoded frame %3 \"PRID64\" (size=%5d)\n", pkt->pts, pkt->size);
    // fwrite(pkt->data, 1, pkt->size, outfile);
    ret = av_interleaved_write_frame(ofmt_ctx, pkt);

		if (ret < 0) {
			printf( "Error muxing packet\n");
			break;
		}
    av_packet_unref(pkt);
  }
}

int main(int argc, char **argv) {
  const char * filename;
  const AVCodec  *codec;
  AVCodecContext *c = NULL;
  
  int i , ret, x, y;
  FILE *f;
  AVFrame *picture;
  AVPacket *pkt;
  uint8_t endcode[] = {
    0, 0, 1, 0xb7
  };

  if (argc <=1) {
    fprintf(stderr, "Usage: %s <output file>\n", argv[0]);
    exit(0);
  }
  filename = argv[1];


  // rtmp define
  AVOutputFormat *ofmt2 = NULL;
  AVFormatContext *ofmt_ctx2 = NULL;
  AVStream *in_stream;
  AVStream *out_stream;

  const char *out_filename2;
  int ret2, i2;
  int videoindex2= -1;
  int frame_index2=0;
  int64_t start_time2= 0;
  out_filename2 = "rtmp://localhost:1935/publishlive/livestream";
  AVStream *in_stream2;
  AVStream *out_stream2;
  // rtmp define end

  avcodec_register_all();
	avformat_network_init();

  // find the mpeg1video encoder
  codec = avcodec_find_encoder(AV_CODEC_ID_H264);
  if (!codec) {
    fprintf(stderr, "codec not found\n");
    exit(1);
  }

  c = avcodec_alloc_context3(codec);
  picture = av_frame_alloc();

  pkt = av_packet_alloc();
  if(!pkt) {
    exit(1);
  }

  c->bit_rate = 400000;
  c->time_base = (AVRational){1,25};
  c->framerate = (AVRational){25, 1};
  c->gop_size = 10;
  c->max_b_frames = 1;
  c->pix_fmt = AV_PIX_FMT_YUV420P;
  c->width = 510;
  c->height= 510;
  // open it
  if (avcodec_open2(c, codec, NULL) < 0) {
    fprintf(stderr, "could not open codec\n");
    exit(1);
  }

  f = fopen(filename, "wb");
  if(!f) {
    fprintf(stderr, "could not open %s\n", filename);
    exit(1);
  }

  picture->format = c->pix_fmt;
  picture->width = c->width;
  picture->height = c->height;

  ret = av_frame_get_buffer(picture, 32);
  if(ret < 0) {
    fprintf(stderr, "could not alloc the frame data\n");
    exit(1);
  }

  // rtmp run
  // avformat_new_stream()
  avformat_alloc_output_context2(&ofmt_ctx2, NULL, "flv", out_filename2);// RTMP

  if (!ofmt_ctx2) {
    printf("Could not create output context\n");
    ret2 =AVERROR_UNKNOWN;
    exit(0);
  }

  out_stream2 = avformat_new_stream(ofmt_ctx2, codec);
  if (!out_stream2) {
    printf("Failed allocating output stream\n");
    ret2 =AVERROR_UNKNOWN;
    exit(0);
  }

  ret2 = avcodec_parameters_from_context(out_stream2->codecpar, c);
  if (ret2 < 0) {
    printf("Failed to copy context form in put to output stream codec context");
    exit(0);
  }

  // out_stream2->codecpar->codec_tag = 0;
  // if (ofmt_ctx2->oformat->flags & AVFMT_GLOBALHEADER)
  //   out_stream2->codec->flags |= CODEC_FLAG_GLOBAL_HEADER;

  // AVIO 
  // AVIOContext *client = NULL;
  AVIOContext *server = NULL;

  // Dump Format -------------------
  av_dump_format(ofmt_ctx2, 0, out_filename2, 1);
  // Open output URL
  // if (!(ofmt2->flags & AVFMT_NOFILE)) {
    ret2 =avio_open2(&ofmt_ctx2->pb, out_filename2, AVIO_FLAG_READ_WRITE, NULL, NULL);
    if (ret2 < 0) {
      printf("Could not open output URL '%s'", out_filename2);
      exit(0);
    }
  // }
  ret2 = avformat_write_header(ofmt_ctx2, NULL);
  if (ret2 < 0) {
    printf("Error occurred when open output URL \n");
  }
  // rtmp run end

  // encode 1 second of video
  for (i = 0; i< 2500; ++i) {
    fflush(stdout);

    ret = av_frame_make_writable(picture);
    if (ret < 0) exit(1);

    // prepare a dummy image
    // Y
    for (y=0;y<c->height;y++){
      for (x=0;x< c->width ; x++) {
        picture->data[0][y*picture->linesize[0] + x] = x + y + i * 3;
      }
    }

    // Cb and Cr 
    for (y=0;y < c->height/2; y++) {
      for (x=0;x< c->width/2; x++) {
        picture->data[1][y*picture->linesize[1] + x] = 128 +y + i * 2;
        picture->data[2][y*picture->linesize[2] + x] = 64 + x + i * 5;
      }
    }

    picture->pts = i;
    encode(c, picture, pkt, f, ofmt_ctx2);
  }

  encode(c, NULL, pkt, f, ofmt_ctx2);

  fwrite(endcode, 1, sizeof(endcode), f);
  fclose(f);

  avcodec_free_context(&c);
  av_frame_free(&picture);
  av_packet_free(&pkt);

  return 0;
}