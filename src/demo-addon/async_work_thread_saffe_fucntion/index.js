// Use the "bindings" package to locate the native bindings.
const binding = require('./build/Release/binding.node');

binding.startThread((thePrime) =>
  console.log("Received prime from secondary thread: " + thePrime));