const { spawn } = require('child_process');
const ps = spawn('lsof', ['/System/Library/Frameworks/CoreImage.framework/Versions/A/Resources/ci_stdlib.metallib']);
const grep = spawn('grep', ['ssh'], {
  detached : false,
  stdio : [ 'pipe', 'pipe', 'pipe', 'pipe' ] 
});
let i = 0;
let str = "";
ps.stdout.on('data', (data) => {
  str += data.toString()
  console.log(i++,'===', str);
});

ps.stderr.on('data', (data) => {
  console.log(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  console.log('ps end');
  let t = str.split('\n')
  let result = t[0].split(/\s{1,}/);

  console.log(t, result, t[1].split(/\s{1,}/));
});