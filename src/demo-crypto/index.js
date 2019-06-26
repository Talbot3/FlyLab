const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
const key = crypto.scryptSync(password, 'salt', 24);

const iv = Buffer.alloc(16, 0);

const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted =cipher.update('some clear text data', 'utf8', 'hex');

encrypted += cipher.final('hex');
console.log(encrypted);

const md5hash = crypto.createHash('md5');
md5hash.update('some data to hash');
console.log('md5 has is', md5hash.digest('hex'));
const md5hash1 = crypto.createHash('md5');

md5hash1.update('22');
console.log('md5 22', md5hash1.digest('hex'));