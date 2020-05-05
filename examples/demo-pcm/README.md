# Speaker

## mp3 转换为 pcm

```bash
ffmpeg -i MakeingAllThingsNew.mp3 -codec:a  pcm_f32le -ar 48000 -ac 2 -f f32le output.pcm
```

## pcm

```bash
ffplay -f s16be -ar 8000 -ac 1 receive.pcm
```

## 播放pcm 示例

```bash
const speaker = new Speaker({
  channels: 1,          // 1 channels
  bitDepth: 16,         // 16-bit samples
  sampleRate: 8000      // 8000 Hz sample rate
});
let readStream = fs.createReadStream('./receive.pcm');
```

```bash
const speaker = new Speaker({
  channels: 2,          // 2 channels
  bitDepth: 16,         // 16-bit samples
  sampleRate: 44100      // 44100 Hz sample rate
});
let readStream = fs.createReadStream('./receive.pcm');
```