const crypto = require('crypto');
const fs = require('fs');

const privateKey = fs.readFileSync('private.pem').toString();
const publicKey = fs.readFileSync('./public.pem').toString();

const sign = crypto.createSign('SHA256');

sign.update('outjs.com copy right');

var signature = sign.sign(privateKey, 'hex');
console.log('signature\n',signature);

fs.writeFileSync('signature.key', signature);