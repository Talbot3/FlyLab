/**
 * Created by crazy on 17-6-22.
 */
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
}
f1();