// const { resolve } = require("path");

const { resolve } = require("path");

// var condition = false, // potential means "maybe never"
//     max = 1000000;

// async function potAsyncLoop(i) {
//     if (i < max) {
//         if (condition) {
//             someAsyncFunc(function (err, result) {
//                 console.log(i);
//                 potAsyncLoop(i + 1, callback);
//             });
//         } else {
//             // this will crash after some rounds with
//             // "stack exceed", because control is never given back
//             // to the browser 
//             // -> no GC and browser "dead" ... "VERY BAD"
//             // potAsyncLoop(i + 1, resume);
//             let t = await new Promise((resolve, reject)=> {
//                 setTimeout(async function () {
//                     // let result = await potAsyncLoop(i + 1, resume);
//                     resolve(22);
//                 }, 0);
//             });
            
//         }
//     } else {
//         resume();
//     }
// }
// let callCount = 0;
// (async()=>{
//    let t = await potAsyncLoop(0);
// })()
(async()=>{
    let t2 = async()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(3000);
            }, 3000);
        })
    }
    let t = await new Promise((resolve, reject) => {
        setTimeout(async () => {
            let result = await t2();
            resolve(result);
        }, 0);
    });
    console.log(t);
})()
