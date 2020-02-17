#!/usr/bin/env node
console.log("Into grage. Use nodejs version", process.version, '.');

var fs = require('fs');
var AipImageSearchClient = require("baidu-aip-sdk").imageSearch;
const path = require('path');
const async = require('async')
const { readDirDeepSync } = require('read-dir-deep');

// 设置APPID/AK/SK
var APP_ID = "18496415";
var API_KEY = "dtKRTjYMkUIx0XjWDxO6zeDU";
var SECRET_KEY = "IcLcO8ckoeBlhZiasM862LGbfjIz4Wjn";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipImageSearchClient(APP_ID, API_KEY, SECRET_KEY);

let rootdir = path.join(__dirname, "./data/cars_train/");

// sync
let files = fs.readdirSync(rootdir);
files = files.slice(5345);
console.log(`
Read Images , Ready to grage.${files.length} ${rootdir}
`)

async.mapLimit(files, 1, async function(filename) {
    let filePath = `./data/cars_train/${filename}`;
    console.log("upload image, ", filePath);
    var image = fs.readFileSync(filePath).toString("base64");
    // 调用相似图检索—入库, 图片参数为本地图片
    let response = await client.similarAdd(image, {brief: filename, tags: [0]});
    console.log(response);
    return response
}, (err, results) => {
    if (err) throw err
    // results is now an array of the response bodies
    console.log(results)
})


// (async()=>{console.log("fdsaf")})()

// (async()=>{
    // for (let i = 0; i< files.length; i+=1) {
    //     let filename = files[i];
    //     let filePath = `./data/cars_train/${filename}`;
    //     console.log("upload image, ", filePath);
    //     var image = fs.readFileSync(filePath).toString("base64");
    //     // 调用相似图检索—入库, 图片参数为本地图片
    //     let status = await client.similarAdd(image);
    // }
// })()

