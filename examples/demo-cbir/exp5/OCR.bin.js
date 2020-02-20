#!/usr/bin/env node
const fs = require('fs');
// 车牌识别
var AipOcrClient = require("baidu-aip-sdk").ocr;

// 设置APPID/AK/SK
var APP_ID = "18501647";
var API_KEY = "vPAzqIVAydgC7vtCOwf3kSg6";
var SECRET_KEY = "AGV26FYk3Xx4ffQO1eiTBgYKCTYhRS08";

var image = fs.readFileSync("../data/china-cars/OIP.jpg").toString("base64");

// https://cloud.baidu.com/doc/OCR/s/Ok3h7ydf4
var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);

// 如果有可选参数
var options = {};
options["multi_detect"] = "true";

// 带参数调用车牌识别
client.licensePlate(image, options).then(function(result) {
    console.log(JSON.stringify(result));
}).catch(function(err) {
    // 如果发生网络错误
    console.log(err);
});;