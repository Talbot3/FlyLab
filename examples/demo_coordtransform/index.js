const coordtransform = require('coordtransform');
const fs = require('fs');
const path = require('path');
const geoArr = require('./geo.json');

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

let result = geoArr.map((item)=> convertBD09(item));
fs.writeFileSync(path.join(__dirname, '12-09-351440071281324.txt').toString(), JSON.stringify(result));

