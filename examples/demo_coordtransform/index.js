const coordtransform = require('coordtransform');
const fs = require('fs');
const path = require('path');
const geoArr = require('./geo.json');

function convertGCJ02(json) {
    let [lon, lat] = coordtransform.wgs84togcj02(json.longitude, json.latitude);
    return {
        ...json,
        longitude: lon,
        latitude: lat
    };
}

function convertBD09(json) {
    console.log('wgs84 坐标 (longitude, latitude) => (', json.longitude, ',', json.latitude, ')');
    let [lon, lat] = coordtransform.wgs84togcj02(json.longitude, json.latitude);
    console.log('gcj02坐标 (longitude, latitude) => (', lon, ',', lat, ')');
    let [targetLon, targetLat] = coordtransform.gcj02towgs84(lon, lat);
    console.log('bd09坐标 (longitude, latitude) => (', targetLon, ',', targetLat, ')');
    return {
        ...json,
        longitude: targetLon,
        latitude: targetLat
    };
}

let arrWGS84 = geoArr.map((item) => [item.longitude, item.latitude]);
fs.writeFileSync(path.join(__dirname, './data/12-09-351440071281324-WGS84.json').toString(), JSON.stringify(arrWGS84));

let resultGCJ02 = geoArr.map(item => convertGCJ02(item));
let arrGCJ02 = resultGCJ02.map((item) => [item.longitude, item.latitude]);
fs.writeFileSync(path.join(__dirname, './data/12-09-351440071281324-GCJ02.json').toString(), JSON.stringify(arrGCJ02));
let pathGCJ02 = resultGCJ02.map((item, index) => ({ x: item.longitude, y: item.latitude, tm: index, sp: 10, ag: 10 }));
fs.writeFileSync(path.join(__dirname, './data/12-09-351440071281324-PATH-GCJ02.json').toString(), JSON.stringify(pathGCJ02));

let resultBD09 = geoArr.map((item) => convertBD09(item));
fs.writeFileSync(path.join(__dirname, './data/12-09-351440071281324-BD09.txt').toString(), JSON.stringify(resultBD09));


let resultArr = resultBD09.map((item) => [item.longitude, item.latitude]);
fs.writeFileSync(path.join(__dirname, './data/12-09-351440071281324-BD09.json').toString(), JSON.stringify(resultArr));
