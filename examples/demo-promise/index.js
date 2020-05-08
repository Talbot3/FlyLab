var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  console.log('new ok?')
  setTimeout(resolve, 100, 'foo');
}); 

let tasks = [p1, p2, p3];
console.log(p1);
// for(let i =0; i< 50; i+=1) {
//     let t =()=> new Promise(resolve=>{
//       console.log('wahaha');
//       resolve();
//     });
//     tasks.push(t);
// } 
// Promise.all(tasks).then(values => {
//   // [3, 1337, "foo"] 
//   console.log(values); 
// });