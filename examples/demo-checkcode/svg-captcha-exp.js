const http = require('http');
var svgCaptcha = require('svg-captcha');

const app = http.createServer((req, res)=> {

  console.debug(/\/svg\/\s*/.test(req.path));
  if (!/\/svg\/\s*/.test(req.url)) {
    res.end('not match');
  }
  var captcha = svgCaptcha.create();
  let header = { 
    'Content-Type': 'image/svg+xml',
    'Content-Length': Buffer.byteLength(captcha.data),
    'accept-ranges': 'bytes',
    // 'Content-Disposition': 'inline;filename="test.svg"'
  };
  console.log(JSON.stringify(header), captcha.text);
  res.writeHead(200, header);

	// req.session.captcha = captcha.text;
	
  // res.type('svg');

	res.end(captcha.data);
});

app.listen(3000);