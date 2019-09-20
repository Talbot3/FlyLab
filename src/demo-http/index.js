var http = require('http');
var mobile = require('is-mobile');

var server = http.createServer(function (req, res) {
  console.log(req.headers['user-agent']);
  console.log('is mobile ->', mobile({ua: req.headers['user-agent']}));
  res.end(mobile(req));
});

server.listen(8000);