const crypto = require('crypto');
const fs = require('fs');

const verify = crypto.createVerify('SHA256');

verify.write('outjs.com copy right');
verify.end();

const publicKey = fs.readFileSync('public.pem').toString();

const signature = fs.readFileSync('signature.key').toString();

let check = verify.verify(publicKey, signature, 'hex');
console.log('copy right: ', check);