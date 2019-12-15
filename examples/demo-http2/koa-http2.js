	const app = new (require('koa'))();
	const crypto = require('crypto');
	const fs = require('fs');
	const http2 = require('http2');


	app.use(async ctx => {
		await new Promise(resolve => setTimeout(resolve, 1000));

		ctx.body = 'balls';
		ctx.status = 200;
	});

	http2.createSecureServer(
		{
			allowHTTP1: true,
			cert: fs.readFileSync('localhost-cert.pem'),
			key: fs.readFileSync('localhost-privkey.pem'),
			secureOptions:
				crypto.constants.SSL_OP_NO_SSLv3 |
				crypto.constants.SSL_OP_NO_TLSv1
		},
		app.callback()
	).listen(
		31337
	);
