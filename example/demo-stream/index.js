process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`数据: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('结束');
});

process.stdout.write(process.title)


const { PassThrough, Writable} = require('stream');

const pass = new PassThrough();
const writable = new Writable();

pass.on('data', chunk => {
  console.log(chunk.toString())
})
pass.write('\nok');
pass.resume();


// Convert flv to mp4 
const fs = require('fs');
const child = require('child_process');
const input_file = fs.createReadStream('/Users/Arthur/ShenlanProj/ms-rtn/ms-proxy/test/assert/target720p.flv');
const output_file = fs.createWriteStream('./output.mp4');
// /Users/Arthur/ShenlanProj/ms-rtn/ms-proxy/test/assert
const args = ['-i', 'pipe:0', '-f', 'mp4', '-movflags', 'frag_keyframe', 'pipe:1'];
const trans_proc = child.spawn('ffmpeg', args, {});

input_file.pipe(trans_proc.stdin);
trans_proc.stdout.pipe(output_file);

trans_proc.stderr.on('data', (data)=> {
  console.log(data.toString());
})
