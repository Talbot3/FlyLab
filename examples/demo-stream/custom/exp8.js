const fs = require('fs');
const util = require('util');
const path = require('path');
const stream = require('stream');
const finished = util.promisify(stream.finished);

const rs = fs.createReadStream(path.join(__dirname, "./exp1-pipeline.js"));
async function run() {
  await finished(rs);
  console.log('stream read finished');
}

run().catch(console.error);
rs.resume();