#ifdef __cplusplus
extern "C"{
#endif
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdint.h>
#include <stdbool.h>

#include "libavcodec/avcodec.h"
#include "libavutil/frame.h"
#include "libavutil/imgutils.h"
#include "libavformat/avformat.h"
#include "libavutil/mathematics.h"
#include "libavutil/time.h"

#ifdef __cplusplus
}
#endif


#define AV_CODEC_FLAG_GLOBAL_HEADER (1 << 22)
#define CODEC_FLAG_GLOBAL_HEADER AV_CODEC_FLAG_GLOBAL_HEADER

uint8_t endcode[] = { 0, 0, 1, 0xb7 };

typedef struct {
  AVCodec *codec;
  AVCodecContext * codec_context;
  AVFormatContext * ofmt;
  AVFrame *picture;
  AVPacket *pkt;
  AVStream *ostream;
  char url[200];
  char channel_name[200];
  bool isInited;
} BiuRTSP;

static void encode(AVCodecContext *enc_ctx, AVFrame *frame, AVPacket *pkt, AVFormatContext *ofmt_ctx) {
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

    // printf("encoded frame %3 \"PRID64\" (size=%5d)\n", pkt->pts, pkt->size);
    ret = av_interleaved_write_frame(ofmt_ctx, pkt);

		if (ret < 0) {
			printf( "Error muxing packet\n");
			break;
		}
    av_packet_unref(pkt);
  }
}

void producer(BiuRTSP *biu_rtsp) {
  int y,x,i = 0, ret;
  for (;; ++i) {
    fflush(stdout);

    ret = av_frame_make_writable(biu_rtsp->picture);
    if (ret < 0) exit(1);

    // prepare a dummy image
    // Y
    for (y=0;y<biu_rtsp->codec_context->height;y++){
      for (x=0;x< biu_rtsp->codec_context->width ; x++) {
        biu_rtsp->picture->data[0][y* (biu_rtsp->picture->linesize[0]) + x] = x + y + i * 3;
      }
    }

    // Cb and Cr 
    for (y=0; y < (biu_rtsp->codec_context->height) /2; y++) {
      for (x=0; x< (biu_rtsp->codec_context->width) /2; x++) {
        biu_rtsp->picture->data[1][y* (biu_rtsp->picture->linesize[1]) + x] = 128 +y + i * 2;
        biu_rtsp->picture->data[2][y* (biu_rtsp->picture->linesize[2]) + x] = 64 + x + i * 5;
      }
    }

    biu_rtsp->picture->pts = i;
    biu_rtsp->picture->pts = av_rescale_q(biu_rtsp->picture->pts, biu_rtsp->codec_context->time_base, biu_rtsp->ostream->time_base);
    biu_rtsp->picture->pkt_dts = biu_rtsp->picture->pts; 
    biu_rtsp->picture->key_frame = 1;
    biu_rtsp->picture->pkt_duration = 1;
    biu_rtsp->picture->pkt_duration = av_rescale_q(biu_rtsp->picture->pkt_duration, biu_rtsp->codec_context->time_base, biu_rtsp->ostream->time_base);
    encode(biu_rtsp->codec_context, biu_rtsp->picture, biu_rtsp->pkt, biu_rtsp->ofmt);
  }
}

void biu_rtsp_init(BiuRTSP *biu_rtsp,int width, int height ,const char channel[]) {
  if ( biu_rtsp->isInited ) {
    printf("Inited ok, no need again.\n");
    return ;
  }
  int ret;
  biu_rtsp->picture = av_frame_alloc();
  biu_rtsp->pkt = av_packet_alloc();
  strcpy(biu_rtsp->channel_name, channel);
  sprintf(biu_rtsp->url, "rtmp://localhost:1935/live/%s", biu_rtsp->channel_name);

  biu_rtsp->codec = avcodec_find_encoder_by_name("h264_nvenc");
  // avcodec_find_encoder(AV_CODEC_ID_H264);
  if (!biu_rtsp->codec) {
    fprintf(stderr, "codec not found\n");
    exit(1);
  }

  biu_rtsp->codec_context = avcodec_alloc_context3(biu_rtsp->codec);
  biu_rtsp->codec_context->bit_rate = 400000;
  biu_rtsp->codec_context->time_base = (AVRational){1,25};
  biu_rtsp->codec_context->framerate = (AVRational){25, 1};
  biu_rtsp->codec_context->gop_size = 10;
  biu_rtsp->codec_context->max_b_frames = 1;
  biu_rtsp->codec_context->pix_fmt = AV_PIX_FMT_YUV420P;
  biu_rtsp->codec_context->width = width;
  biu_rtsp->codec_context->height= height;

  if (avcodec_open2(biu_rtsp->codec_context, biu_rtsp->codec, NULL) < 0) {
    fprintf(stderr, "could not open codec \n");
    exit(1);
  }

  biu_rtsp->picture->format = biu_rtsp->codec_context->pix_fmt;
  biu_rtsp->picture->width = biu_rtsp->codec_context->width;
  biu_rtsp->picture->height = biu_rtsp->codec_context->height;
  
  ret = av_frame_get_buffer(biu_rtsp->picture, 32);
  if(ret < 0) {
    fprintf(stderr, "could not alloc the frame data\n");
    exit(1);
  }

  avformat_alloc_output_context2(&(biu_rtsp->ofmt), NULL, "flv", biu_rtsp->url);

  if (!biu_rtsp->ofmt) {
    printf("Could not create output context\n");
  }

  biu_rtsp->ostream = avformat_new_stream(biu_rtsp->ofmt, biu_rtsp->codec);
  if (!biu_rtsp->ostream) {
    printf("Failed allocating output stream\n");
    ret = AVERROR_UNKNOWN;
    exit(0);
  }

  ret = avcodec_parameters_from_context(biu_rtsp->ostream->codecpar, biu_rtsp->codec_context);
  if (ret < 0) {
    printf("Failed to copy context from in put to output stream codeec context");
  }

  av_dump_format(biu_rtsp->ofmt, 0, biu_rtsp->url, 1);

  ret = avio_open2(&(biu_rtsp->ofmt->pb), biu_rtsp->url, AVIO_FLAG_WRITE, NULL, NULL);
  if (ret < 0) {
    printf("Could not open output URL '%s'", biu_rtsp->url);
    exit(0);
  }

  ret = avformat_write_header(biu_rtsp->ofmt, NULL);
  if(ret < 0) {
    printf("Error current when open output URL \n");
  }
  printf("url: %s \n", biu_rtsp->url);
  printf("Init Fine\n");
  biu_rtsp->isInited = true;
}

int main(int argc, char **argv) {
  BiuRTSP biu_rtsp;
  BiuRTSP biu_rtsp2;
  avcodec_register_all();
  avformat_network_init();

  // printf("HAHHAHAHAHAHHAHAH2");
  biu_rtsp_init(&biu_rtsp2, 300, 300,"livestream2");
  biu_rtsp_init(&biu_rtsp2, 300, 300,"livestream2");
  producer(&biu_rtsp2);

  // printf("HAHHAHAHAHAHHAHAH1");
  // init_biu_rtsp(&biu_rtsp, 200, 200, "rtmp://localhost:1935/publishlive/livestream1");
}