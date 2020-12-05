var nodejieba = require("nodejieba");
const areaIndexCn = [
    "周界围墙",
    "地库东侧",
    "公共区域",
    "值班岗亭",
    "地下车库",
    "儿童活动区",
]
var result = areaIndexCn.map(str => nodejieba.cut(str));
console.log(result)