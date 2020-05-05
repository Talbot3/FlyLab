# Speaker

## mp3 转换为 pcm

```bash
ffmpeg -i MakeingAllThingsNew.mp3 -codec:a  pcm_f32le -ar 48000 -ac 2 -f f32le output.pcm
```

## pcm

```bash
ffplay -f s16be -ar 8000 -ac 1 receive.pcm
```