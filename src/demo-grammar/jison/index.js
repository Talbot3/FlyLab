let calcParser = require('./CalcGrammar.js');
console.time('track');
const testTimes = 1000000;
for(var i = 0; i < testTimes; i ++) {
  calcParser.parse('1 + 2 * 3 - 1 * 3 + ( 3 + 7 ) * 2000')
};
console.timeEnd('track');