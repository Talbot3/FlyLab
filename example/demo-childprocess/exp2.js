const { spawn } = require('child_process');
const grep = spawn('grep', ['ssh']);

grep.on('close', (code, signal) => {
  console.log(`子进程收到信号 ${signal} 而终止`);
});

// 发送 SIGHUP 到进程。
// grep.kill('SIGHUP');