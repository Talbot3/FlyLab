const fastFile = require('fastfile');

async function writeFile() {
    const f = await fastFile.createOverride("pattern.bin");

    const buff = Buffer.from("0001020304050607", "hex");
    for (let i=0; i<1000; i++) {
        await f.write(buff, i*8);
    }

    await f.close();
}

async function readFile() {
    const f = await fastFile.readExisting("pattern.bin");

    const buff = await f.read(16, 8);

    await f.close();

    return buff;

}

writeFile().then( () => {
    readFile().then( (buff) => {
        console.log(buff.toString("hex"));
    });
});