# 音视频教程- ffmpeg api 接口指南

- http://dranger.com/ffmpeg/tutorial01.html
- https://github.com/leandromoreira/ffmpeg-libav-tutorial
- https://leixiaohua1020.github.io/#ffmpeg-development-examples
- https://trac.ffmpeg.org/wiki
- https://trac.ffmpeg.org/wiki/Using%20libav*
- https://trac.ffmpeg.org/wiki/Including%20FFmpeg%20headers%20in%20a%20C%2B%2B%20application
- https://wiki.multimedia.cx/index.php?title=Category:FFmpeg_Tutorials
- https://github.com/FFmpeg/FFmpeg/tree/master/doc/examples
- https://github.com/leandromoreira/digital_video_introduction (编解码器工作原理)
- https://blog.csdn.net/simonforfuture/article/details/79075012 (ffmpeg 调用接口总结)
- http://blog.yundiantech.com/?log=blog&page=1
- [avcodec_send_packet 用于发送流，进入生产者消费者模式](https://ffmpeg.org/doxygen/trunk/group__lavc__encdec.html)
- [ffmpeg 解码API](https://www.cnblogs.com/TaigaCon/p/10041926.html)
- [《FFMpeg开发者手册》](../../doc/pdfs/FFMpeg开发者手册.pdf)
- [FFmpeg源代码简单分析：avio_open2()](https://blog.csdn.net/leixiaohua1020/article/details/41199947)
- [CentOS 7 ffmpeg 支持 nVidia](https://blog.csdn.net/xundh/article/details/100760114)

## 官方解码示例

- https://github.com/rvs/ffmpeg/blob/master/libavcodec/api-example.c

## FFmpeg Push Stream

- https://github.com/leixiaohua1020/simplest_ffmpeg_streamer/blob/master/simplest_ffmpeg_streamer/simplest_ffmpeg_streamer.cpp

## YUV

- [YUV](https://github.com/byhook/ffmpeg4android/blob/master/readme/%E5%9B%BE%E8%A7%A3YU12%E3%80%81I420%E3%80%81YV12%E3%80%81NV12%E3%80%81NV21%E3%80%81YUV420P%E3%80%81YUV420SP%E3%80%81YUV422P%E3%80%81YUV444P%E7%9A%84%E5%8C%BA%E5%88%AB.md)

## 流程

> “......反者道之动......”

![Decode流程](./liba.jpeg)

# Encode Example

### encode_video 说明

> src/encode_video.c  随机生成一个mp4

```bash
demo-liav random.mp4
```

## YUV Push RTMP Server 示例

> encode_video_rtsp.c

此示例通过将 雷霄华 YUV示例 + FFmpeg编码示例 结合 实现推流功能。


## RTSP Tutorial

- https://www.cnblogs.com/ansersion/p/6959690.html

## ubuntu vaapi

- https://blog.csdn.net/qiuchangyong/article/details/79494766

## audio transcode

> 实验后，发现音频采样率变调了，需要filter适配

### 转码为原生PCM音频格式

```
ffmpeg -i hah.m4a -f s16be -ar 8000 -acodec pcm_s16be output.pcm
ffplay -ar 16000 -channels 1  -f s16be -i output.pcm
```

### Refers

- https://ffmpeg.org/doxygen/3.4/transcode_aac_8c-example.html
- https://www.cnblogs.com/wanggang123/p/5589488.html
- [ffmpeg aac](https://trac.ffmpeg.org/wiki/Encode/AAC)


## ffmpeg install 
```
ffmpeg.install.sh
```