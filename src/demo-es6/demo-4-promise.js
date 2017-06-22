/**
 * Created by goerver on 16-10-6.
 */
let Promise = require('bluebird')
function caculator(a, b) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (!a && !b) {
                reject(new Error("Nothing"))
            }
            resolve(a + b)
        }, 300);
    })
}


function Add(a, b) {
    return new Promise(function(res,rej){
        caculator(a, b).then(function (data) {
            res(data)
        })
    })
}

Add(12, 12).then(function (data) {
    console.log(data)
})


