let net;
async function app() {
    console.log('Loading mobilenet ..');
    net = await mobilenet.load();
    console.log("successfully loaded mobel");
    const imgEl = document.getElementById('img');
    const result = await net.classify(imgEl);
    console.log(result);
}
console.log("load index.js");
app();