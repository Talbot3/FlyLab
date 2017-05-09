var co = require('co');

co(function* () {
	var now = Date.now();
	yield sleep200ms(200);
	console.log(Date.now() -now);
});

function sleep200ms(ms) {
	return function(cb){
		setTimeout(cb,ms);
	}
}