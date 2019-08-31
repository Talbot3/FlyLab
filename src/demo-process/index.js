process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});

process.on('uncaughtException', (err, origin) => {
  console.log('uncaughtException',
    process.stderr.fd,
    `Caught exception: ${err}\n` +
    `Exception origin: ${origin}`
  );
});


process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

process.on('warning', (warning) => {
  console.warn(warning.name);    // Print the warning name
  console.warn(warning.message); // Print the warning message
  console.warn(warning.stack);   // Print the stack trace
});


process.on('SIGINT', () => {
  console.log('Received SIGINT. Press Control-D to exit.');
});
console.log(`This processor architecture is ${process.arch}`);

console.log(`Starting directory: ${process.cwd()}`);

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});