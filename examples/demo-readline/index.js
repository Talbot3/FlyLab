const { once } = require('events');
const { createReadStream } = require('fs');
const { createInterface } = require('readline');
const parseCandidate = (text) => {
    var candidateStr = 'candidate:';
    var pos = text.indexOf(candidateStr) + candidateStr.length;
    var [foundation, component, protocol, priority, address, port, , type] =
      text.substr(pos).split(' ');
    return {
      'component': component,
      'type': type,
      'foundation': foundation,
      'protocol': protocol,
      'address': address,
      'port': port,
      'priority': priority,
      'candidate': text,
    };
}
(async function processLineByLine() {
  try {
    const rl = createInterface({
      input: createReadStream('./server.candidate.ini'),
      crlfDelay: Infinity
    });
    console.log('Candidate File Loading');

    rl.on('line', (line) => {
      // Process the line.
      console.log(parseCandidate(line));
    });

    await once(rl, 'close');

    console.log('File processed.');
  } catch (err) {
    console.error(err);
  }
})();

