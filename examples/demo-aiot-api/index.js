const fetch = require('isomorphic-fetch');
const fs = require('fs');
const path = require('path');
const pug = require('pug');
const pRetry = require('p-retry');
const decode = (str) => {
    let buff = Buffer.from(str, 'base64');
    let text = buff.toString('ascii');
    return text;
}

// const base64Info = Buffer.from('shenlan:a123456').toString('base64');
// const baseUrl = 'http://124.160.103.210:9840/apiserver/v1';
// const requestPathToken = '/user/authentication-token';
// const requestPathChannel = '/device/channels';

// class CacheStorage {
//     format='ini';
//     name;
//     str;
//     timeStamp;
//     expireTime = 1800000;
//     constructor(expireTime, name = 'CacheStorage') {
//         this.name = name;
//         this.expireTime = expireTime;
//     }
//     get path() {
//         return this.name + '.' + this.format
//     }
//     get now() {
//         return (new Date()).getTime();
//     }
//     get isExitPaht() {
//         return fs.existsSync(this.path);
//     }
//     _flush() {
//         console.log(this.str, '==>>Flush2DB');
//        fs.writeFileSync(this.path, this.str + '=' + this.timestamp);
//     }
//     _read() {
//         if (!this.isExitPaht) {
//             return null;
//         }
//         let _str = fs.readFileSync(this.path).toString();
//         console.log('FromDB==>>', _str);
//         [this.str, this.timestamp] = _str.split('=');
//         return this.str;
//     }
//     set(value) {
//         this.timestamp = this.now;
//         this.str = value;
//         // 刷到磁盘
//         this._flush();
//     }
//     get() {
//         let value = this.str ?? this._read();
//         if (!value) {
//             return null;
//         }
//         // 判断是否过期
//         if (this.now - this.timestamp >= this.expireTime) {
//             console.warn(this.str + ' ==>Warning: value\'s expired from now.');
//             return null;
//         }
//         return value.toString();
//     }
// }

// let cache = new CacheStorage(1800000);

// const buildGetUrl = (baseUrl, token) => {
//     console.log(baseUrl, token);
//     var tokenObj = {
//         'token': token ?? cache.get()
//     };
//     const getUrl = (_path, params)=> {
//         let queryParams = new URLSearchParams({
//             ...tokenObj,
//             ...params
//         })
//         let path = _path;
//         if (!baseUrl.endsWith('/')) {
//             path = _path + '/';
//         }
//         return `${baseUrl}${path}?` + queryParams.toString();
//     };
//     return getUrl;
// };

// const getToken = async ()=> {
//     if (cache.get()) {
//         return cache.get();
//     }
//     const { message, data: token, ...otherInfo} = await fetch(baseUrl + requestPathToken, {
//         headers: { 'Authorization': 'Basic ' + base64Info }
//     }).then(res=>res.json());
//     if (otherInfo ?? otherInfo?.error_code) {
//         console.log(otherInfo);
//     }
//     cache.set(token);
//     return token
// }

// const getIot = async(path) => {
//     const token = await getToken();
//     const getUrl = buildGetUrl(baseUrl, token);
//     let requestUrl = getUrl(path, {
//         unit_type: '0'
//     });
//     console.log(requestUrl);
//     const response = await fetch(requestUrl).then(res=>res.json());
//     return response;
// }

// (async() => {
//     let channelResponse = await getIot(requestPathChannel);
//     console.log(channelResponse);

// })()

const tpPath = path.join(__dirname, 'template/tp.pug').toString();
const compiledFn = pug.compileFile(tpPath);
const htmlStr = compiledFn();
fs.writeFileSync('report.html', htmlStr);