const coordtransform = require('coordtransform');
const json = {
    "longitude": "114.054353",
    "latitude": "22.733980"
}

console.log('wgs84 坐标 (longitude, latitude) => (', json.longitude, ',', json.latitude, ')');
let [lon, lat] = coordtransform.wgs84togcj02(json.longitude, json.latitude);
console.log('gcj02坐标 (longitude, latitude) => (', lon, ',', lat, ')');
let [targetLon, targetLat] = coordtransform.gcj02towgs84(lon, lat);
console.log('bd09坐标 (longitude, latitude) => (',  targetLon, ',',targetLat, ')');