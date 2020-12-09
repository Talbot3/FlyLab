const GIFEncoder = require('gifencoder');
const sharp = require('sharp');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');
const encoder = new GIFEncoder(320, 240);
// stream the results as they are available into myanimated.gif
encoder.createReadStream().pipe(fs.createWriteStream('myanimated.gif'));

encoder.start();
encoder.setRepeat(0);   // 0 for repeat, -1 for no-repeat
encoder.setDelay(500);  // frame delay in ms
encoder.setQuality(10); // image quality. 10 is default.

// use node-canvas
const canvas = createCanvas(320, 240);
const ctx = canvas.getContext('2d');

// // red rectangle
// ctx.fillStyle = '#ff0000';
// ctx.fillRect(0, 0, 320, 240);
// encoder.addFrame(ctx);

// // green rectangle
// ctx.fillStyle = '#00ff00';
// ctx.fillRect(0, 0, 320, 240);
// encoder.addFrame(ctx);

// // blue rectangle
// ctx.fillStyle = '#0000ff';
// ctx.fillRect(0, 0, 320, 240);
// encoder.addFrame(ctx);
const files = fs.readdirSync(path.join(__dirname, './data'));

files.forEach(async (file, index)=> {
    ctx.fillRect(0, 0, 320, 240);
    const imgBuf = await sharp(path.join(__dirname, './data', file).toString())
        .resize(320,240)
        .toBuffer();
    const image = await loadImage(imgBuf);
    ctx.drawImage(image, 0, 0);
    encoder.addFrame(ctx);
    if (index==files.length-1) {
        encoder.finish();
    }
})

