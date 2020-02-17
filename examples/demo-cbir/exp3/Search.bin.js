#!/usr/bin/env node
console.log("Search simlar image. Use nodejs version", process.version, '.');

var fs = require('fs');
var AipImageSearchClient = require("baidu-aip-sdk").imageSearch;
const path = require('path');
const async = require('async')

// 设置APPID/AK/SK
var APP_ID = "18496415";
var API_KEY = "dtKRTjYMkUIx0XjWDxO6zeDU";
var SECRET_KEY = "IcLcO8ckoeBlhZiasM862LGbfjIz4Wjn";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipImageSearchClient(APP_ID, API_KEY, SECRET_KEY);

var image = fs.readFileSync("./data/cars_test/00001.jpg").toString("base64");

// 调用相似图检索—检索, 图片参数为本地图片
client.similarSearch(image).then(function(result) {
    console.log(JSON.stringify(result));
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});
