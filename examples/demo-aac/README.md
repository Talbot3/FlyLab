
## AAC ADTS
- ADIF(Audio Data Interchange Format) 音频数据交换格式，常用在磁盘文件
- ADTS（Audio Data Transport Stream) AAC音频传输流格式。ADTS 可以在任意帧解码，每帧都有头信息。
- https://blog.csdn.net/tx3344/article/details/7414543
- https://www.cnblogs.com/zhangxuan/p/8809245.html

### aac 变速

```
ffmpeg -i input.wav -c:a aac -filter:a "atempo=0.5"  -q:a 2 output.aac
```
- https://blog.csdn.net/m0_37402140/article/details/78923914

### aac mono
> 单声道

- https://trac.ffmpeg.org/wiki/AudioChannelManipulation

### 音频分析工具 audacity
- https://www.fosshub.com/Audacity.html