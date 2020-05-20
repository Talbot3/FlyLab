const {createInterface} = require('readline');

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("what do you think of Node.js?", (answer)=> {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.close();
})