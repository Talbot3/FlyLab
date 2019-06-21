let calcParser = require('./CalcGrammar.js');
console.log(calcParser.parse('1 + 2 * 3 - 1 * 3 + ( 3 + 7 ) * 2000'))