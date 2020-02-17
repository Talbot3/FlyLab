#!/usr/bin/env node

var AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;

// 设置APPID/AK/SK
var APP_ID = "18500185";
var API_KEY = "dVK8IFHHLiPFzULiiUXO7Mb4";
var SECRET_KEY = "m724QsIaAfhIMs8dAEQVlA6aTNzyqtod";
var fs = require('fs');

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);

var image = fs.readFileSync("../data/cars/00126.jpg").toString("base64");

// 调用车型识别
client.carDetect(image).then(function(result) {
  console.log(JSON.stringify(result));
}).catch(function(err) {
  // 如果发生网络错误
  console.log(err);
});