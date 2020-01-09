var contentDisposition = require('content-disposition')
var destroy = require('destroy')
var fs = require('fs')
var http = require('http')
var onFinished = require('on-finished')
 
var filePath = './index.js'
 
let server = http.createServer(function onRequest (req, res) {
  // set headers
  res.setHeader('Content-Type', 'application/txt')
  res.setHeader('Content-Disposition', contentDisposition(filePath))
  // send file
  var stream = fs.createReadStream(filePath)
  stream.pipe(res)
  onFinished(res, function () {
    destroy(stream)
  });
})
server.listen(3000);