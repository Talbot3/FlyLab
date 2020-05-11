const {default: PQueue} = require('p-queue');

const queue = new PQueue({concurrency: 1});

(async () => {
    await queue.add(() => Promise.resolve(22));
    await queue.add(() => Promise.resolve(23));

	console.log('Done: sindresorhus.com');
})();

// (async () => {
// 	console.log('Done: avajs.dev');
// })();

// (async () => {
// 	const task = await getUnicornTask();
// 	await queue.add(task);
// 	console.log('Done: Unicorn task');
// })();