const dayjs =  require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
require('dayjs/locale/zh-cn');
let t = dayjs().locale('zh-cn');

let timeChinese = t.from('1990-01-01') // 2 years ago

console.log(timeChinese)
