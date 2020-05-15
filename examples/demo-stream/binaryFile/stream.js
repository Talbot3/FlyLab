const fastFile = require('fs');

const open = (remoteAudio)=> new Promise((resolve)=> {
    let writefile = fastFile.createWriteStream(remoteAudio);
    writefile.on('open', ()=>resolve(writefile));
});

async function writeFile() {
    console.time('createFile');

    const f = await open("stream.bin");
    console.timeEnd('createFile');
    // console.log(f);

    const buff = Buffer.from("0001020304050607", "hex");
    for (let i=0; i<1000; i++) {
      f.write(buff, i*8);
    }

    await f.close();
}

async function readFile() {
    const f = fastFile.createReadStream("stream.bin");

    const buff = await f.read(16, 8);

    await f.close();

    return buff;

}

writeFile().then( () => {
    // readFile().then( (buff) => {
    //     console.log(buff.toString());
    // });
});
