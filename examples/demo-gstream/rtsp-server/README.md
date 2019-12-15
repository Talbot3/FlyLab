ffmpeg notes
===

> copy from [Akagi201](https://gist.github.com/Akagi201/0ead2f811e133130c19f)


## video subtitle
`ffmpeg -i *.mp4 -vf subtitles=*.srt output.mp4`

## element stream to ts
* `ffmpeg -i audio.aac -i ch2.h264 -acodec copy  -vcodec  copy -f mpegts out.ts`

## rtsp 2 rtmp
* `ffmpeg -rtsp_transport tcp -i rtsp://fuck.com/fuck/fuck -c copy -f flv rtmp://shit.com/shit/shit`

## 截图片
* `./ffmpeg -y -err_detect ignore_err -i "rtmp://uplive.b0.upaiyun.com/live/loading timeout=10" -f image2 -vframes 1 a.jpg`
* `./ffmpeg -y -err_detect ignore_err -i "rtmp://uplive.b0.upaiyun.com/live/loading live=1 timeout=10" -f image2 -vframes 1 a.jpg`

## 推流图片
* `./ffmpeg -loop 1 -i akhead.jpg -r 10 -f flv rtmp://uplive.v0.upaiyun.com/live/english`

## 查看 ffmpeg 全部帮助
* `ffmpeg --help full`

## 推纯音频
* `ffmpeg -re -i xxx.aac -vn -acodec copy -f flv -y rtmp://xxxx`

## 实时转低码率
* `ffmpeg -i rtmp://10.0.5.135/uplive.b0.upaiyun.com/live/123 -b 1000k -s 960:540 -f flv rtmp://10.0.5.132/uplive.v0.upaiyun.com/live/small`

## 循环推流
* `ffmpeg -re -stream_loop -1 -i time.flv -c copy -f flv o.flv`
* <http://video.stackexchange.com/questions/12905/repeat-loop-input-video-with-ffmpeg>
* <http://video.stackexchange.com/questions/18271/issues-looping-a-stream-with-ffmpeg?newsletter=1&nlcode=580354%7cd24e>

```
for((;;)); do \
    ./objs/ffmpeg/bin/ffmpeg -re -i ./doc/hightest_h1080p.mov \
    -vcodec copy -acodec copy \
    -f flv -y rtmp://127.0.0.1:1935/live/livestream; \
    sleep 1; \
done
```

## 纯 AAC 推流
* `ffmpeg -re -i time.aac -bsf:a aac_adtstoasc -c copy -f flv rtmp://uplive.b0.upaiyun.com/live/english`

## 转码为低码率
* `ffmpeg -i time.flv -c libx264 -profile:v high -preset:v slow -b:v 300k -s 640x480 -r 25 -acodec libfdk_aac -ac 2 -b:a 48k -ar 44100 -y time.300kbps.flv`

## 切割mp4
* `ffmpeg -ss 00:00:00 -i mpeg4conformance.mp4 -vcodec copy -acodec copy -t 00:00:10 o.mp4`

## 解析所有的帧
* `ffprobe -show_frames test.mp4`
* 只要视频 `ffprobe -show_frames -select_streams v:0 test.mp4`
* <https://trac.ffmpeg.org/wiki/FFprobeTips>
* 

## webcam
* <https://trac.ffmpeg.org/wiki/Capture/Webcam>

## 常用命令
* <http://itindex.net/detail/4071-ffmpeg>

## 下载m3u8视频
* `ffmpeg -i M3U8 URL -c copy mpegts.ts`

## 桌面直播
* `ffmpeg -f x11grab -follow_mouse centered -r 100 -s cif -i :0.0 -f flv $RTMP_PUSH_URL`

## 转h.264裸流文件
* `-acodec none`

## watermark
* <http://www.idude.net/index.php/how-to-watermark-a-video-using-ffmpeg/>
* <http://video.stackexchange.com/questions/12105/add-an-image-in-front-of-video-using-ffmpeg>
* <http://superuser.com/questions/678168/add-an-image-as-watermark-to-a-video-file-with-ffmpeg>
* `ffmpeg -i 1.mp4 -vf “movie=27.png [logo1]; movie=29.png [logo2]; [in][logo1] overlay=40:40:enable=between(t\,2\,3)[tmp]; [tmp][logo2] overlay=40:40:enable=between(t\,4\,5)[filtered]” o.mp4   `
* 这个分别在2，3秒之间叠加27.png，以及4,5秒之间叠加29.png
* `ffmpeg -i input.mp4 -i input.png -filter_complex 'overlay=0:0' output.mp4`
* <http://www.daniel-mitchell.com/blog/video-in-a-video-ffmpeg/>

## 使用FFMPEG发布RTSP流
* 上传: `ffmpeg -i a.mp4 -vcodec libx264 -f rtsp rtsp://127.0.0.1:5050/ok`
* 接收: `ffmpeg -rtsp_flags listen -f rtsp -i rtsp://127.0.0.1:5050/ok b.mp4`

## 压制
* <http://mariolong01.blogspot.jp/2013/06/ffmpeg.html>
* <http://vanix.blogspot.jp/2014/01/ffmpeg.html>

## 转码到webm
* <https://trac.ffmpeg.org/wiki/Encode/VP8>

## webcam capture
* <https://trac.ffmpeg.org/wiki/Capture/Webcam>
