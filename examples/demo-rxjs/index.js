const {range, 
    BehaviorSubject, 
    ReplaySubject,
    AsyncSubject
} = require('rxjs');
const {map, filter} = require('rxjs/operators');

// let sub = new BehaviorSubject(0);
// sub.subscribe({next: (v)=> console.log('observerA: ' + v)});

// sub.next(1);
// sub.next(2);

// range(1,200).pipe(filter(x => x %2 === 1), map(x => x+ x)).subscribe(x =>console.log(x));


// let replay = new ReplaySubject(100, 500);
// replay.subscribe({
//     next: (v) => console.log('observerA: ', v)
// });

// let i = 1;
// setInterval(()=>  replay.next(i++), 200)

// setTimeout(()=>{
//     replay.subscribe({
//         next: (v)=> console.log('observerB: ', v)
//     })
// }, 1000);

// AsyncSubject 只有OBservable 执行最后的一个值发送到其观察者，并公在执行完成时发送

sAsync = new AsyncSubject();
sAsync.subscribe({
    next: (v) => console.log('observerA: '+ v)
});

sAsync.next(5);
sAsync.complete();