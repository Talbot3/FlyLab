## 设定恒定的质量 crf
ffmpeg -y -i target720p.mp4 -threads 4 -vcodec hevc_videotoolbox -acodec copy -pix_fmt yuv420p  -crf 0 -b:v 0 -r 60 hevc720p.mp4