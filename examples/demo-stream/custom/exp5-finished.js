const { finished } = require('stream');
const fs = require('fs');
const rs = fs.createReadStream('./exp4-transform.js');

finished(rs, (err) => {
  if (err) {
    console.error('Stream failed.', err);
  } else {
    console.log('Stream is done reading.');
  }
});

rs.resume(); // drain the stream