/**
 * Created by crazy on 17-5-9.
 */
const b = async function(abc) {
	console.time(abc);
	for (var i = 1; i < 10000; i++)
		await console.log(i);
	console.timeEnd(abc);
}

b('test2');