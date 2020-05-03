# Speaker

## mp3 转换为 pcm

```
ffmpeg -i MakeingAllThingsNew.mp3 -codec:a  pcm_f32le -ar 48000 -ac 2 -f f32le output.pcm
```