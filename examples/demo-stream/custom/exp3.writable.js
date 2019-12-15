const Writable = require('stream').Writable;

function writeOneMillionTimes(writer, data, encoding, callback) {
  let i = 10000;
  write();
  function write() {
    let ok = true;
    while(i -- > 0 && ok) {
      console.log(Date.now())
      ok = writer.write(data, encoding , i === 0 ? callback : null);
    }
    if (i < 0) {
      console.log('drain', i);
      writer.once('drain', write);
    }
  }
}

const writer = new Writable({
  write(chunk, encoding, callback) {
    setTimeout(()=> {
      callback && callback();
    })
  }
});

writeOneMillionTimes(writer, 'simple', 'utf8', ()=> {
  console.log('end');
})

