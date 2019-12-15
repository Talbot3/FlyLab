# YUV

## env

```bash
- ffmpeg
- gcc
- brew
- item
- zsh
- tmux
```

## convert png/jpeg to yuv

```
ffmpeg -i file_name -pix_fmt yuv420p yuv_file_name.yuv
```

## play yuv

```bash
ffplay -f rawvideo -video_size 510x510 output.yuv
```

## yuv convert png

```
ffmpeg -pixel_format yuv420p -video_size 510x510  -i output.yuv output.png
```

## 参考资料

- [视音频数据处理入门：H.264视频码流解析](https://blog.csdn.net/leixiaohua1020/article/details/50534369)
- [视音频数据处理入门：RGB、YUV像素数据处理
](https://blog.csdn.net/leixiaohua1020/article/details/50534150)
- [图解YU12、I420、YV12、NV12、NV21、YUV420P、YUV420SP、YUV422P、YUV444P的区别.md](https://github.com/byhook/ffmpeg4android/blob/master/readme/%E5%9B%BE%E8%A7%A3YU12%E3%80%81I420%E3%80%81YV12%E3%80%81NV12%E3%80%81NV21%E3%80%81YUV420P%E3%80%81YUV420SP%E3%80%81YUV422P%E3%80%81YUV444P%E7%9A%84%E5%8C%BA%E5%88%AB.md)
