## 设定恒定的质量 crf
// 码率与前一个相同
ffmpeg -y -i target720p.mp4 -threads 4 -vcodec hevc_videotoolbox -acodec copy -pix_fmt yuv420p  -crf 30 -b:v 869kb -r 60 hevc720p.mp4