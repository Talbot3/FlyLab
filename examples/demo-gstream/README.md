# GStreamer

> want you play funny

## 开发环境安装

> 以MacOS为例

```bash
brew install gstreamer gst-plugins-base gst-plugins-good gst-plugins-bad gst-libav;
# [ISSUE `Package 'libffi', required by 'gobject-2.0', not found`](https://github.com/otrv4/pidgin-otrng/issues/104)
export PKG_CONFIG_PATH="/usr/local/opt/libffi/lib/pkgconfig";
```

## Gstreamer 概念

```bash
引入了许多概念，相关文档可以参考 `docs/pdfs/Gstreamermanual.157392612.pdf`
```

## [gst_rtsp_server](https://stackoverflow.com/questions/13744560/using-gstreamer-to-serve-rtsp-stream-working-example-sought)

> 运行example

```bash
//运行测试应用程序

cd examples && ./test-launch "( videotestsrc ! x264enc ! rtph264pay name=pay0 pt=96 )"
```

## [rtsp 推流命令](https://github.com/iizukanao/node-rtsp-rtmp-server)

```bash
// rtsp udp 推流
ffmpeg -re -i input.mp4 -c:v libx264 -preset fast -c:a libfdk_aac -ab 128k -ar 44100 -f rtsp rtsp://localhost:80/live/STREAM_NAME

// rtsp tcp 推流
ffmpeg -re -i input.mp4 -c:v libx264 -preset fast -c:a libfdk_aac -ab 128k -ar 44100 -f rtsp -rtsp_transport tcp rtsp://localhost:80/live/STREAM_NAME

// 录制 rtsp
ffmpeg -rtsp_flags listen -f rtsp -i rtsp://192.168.17.197:8554/opusFileTest b.mp4

```

## 参考

- [gstream tutorial](https://gstreamer.freedesktop.org/documentation/tutorials/basic/dynamic-pipelines.html?gi-language=c)

- [Gstreamer 中文版](https://wenku.baidu.com/view/95f916c708a1284ac850432a.html)