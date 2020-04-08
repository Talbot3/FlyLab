const pRetry = require('p-retry');
const fetch = require('node-fetch');
const pTimeout = require('p-timeout');
const delay = require('delay');

const run = async () => {
    console.log("trying")

    // const response = await fetch('http://img3.imgtn.bdimg.com/it/u=3180701858,3370832153&fm=26&gp=0.jpg');
    const response = await fetch('https://wahha.com/unicorn', {
      timeout: 0
    });

    // Abort retrying if the resource doesn't exist
    if (response.status !== 200) {
        throw new pRetry.AbortError(response.statusText);
    }
    return response.blob();
};
 
(async () => {
    console.log(await pRetry(run, {
      retries: 5,
      onFailedAttempt: async error => {
        console.log("Waiting for 1 second before retrying");
        await delay(()=>{},1000);
      }
    }));
})();
 
const run2 = async emoji => {
    console.log(emoji);
};

(async () => {
    // Without arguments
    await pRetry(run2, {retries: 5});
 
    // With arguments
    await pRetry(() => run2('🦄'), {retries: 5});
})();

const delayedPromise = () => delay(200);

pTimeout(delayedPromise(), 50, () => {
    console.log('err')
	return pTimeout(delayedPromise(), 300);
});