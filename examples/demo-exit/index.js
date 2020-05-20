const exitHook = require('exit-hook');
var sleep = require('sleep');

 
// You can add multiple hooks, even across files
exitHook(() => {
    sleep.msleep(3000);
    console.log('Exiting 2');
});
 
throw new Error('🦄');
 
//=> 'Exiting'
//=> 'Exiting 2'