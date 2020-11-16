// npm install --save opencv4nodejs
// rtsp://10.16.33.220:9090/dss/monitor/param?cameraid=1000120%240&substream=1
const url = "rtsp://10.16.33.220:9090/dss/monitor/param?cameraid=1000120%240&substream=1";
const cv = require('opencv4nodejs');
const wCap = new cv.VideoCapture(url);
const fs = require('fs');
wCap.set(cv.CAP_PROP_FRAME_WIDTH, 300);
wCap.set(cv.CAP_PROP_FRAME_HEIGHT, 600);
function getImageBuilder() {
    let num = 0;
    const builder = ()=>{
        num+=1;
        return 'image-'+num+'.jpg';
    }
    return builder;
}
let imageNameBuilder = getImageBuilder();
setInterval(() => {
    const frame = wCap.read();
    const image = cv.imencode('.jpg', frame);
    let math
    fs.writeFileSync('./' + imageNameBuilder(), image);
}, 1000 )