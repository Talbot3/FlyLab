var raw = require ("raw-socket");
var socket = raw.createSocket ({protocol: raw.Protocol.TCP});

socket.on ("message", function (buffer, source) {
    console.log ("received " + buffer.length + " bytes from " + source);
});

// socket.send (buffer, 0, buffer.length, "1.1.1.1", function (error, bytes) {
//     if (error)
//         console.log (error.toString ());
// });