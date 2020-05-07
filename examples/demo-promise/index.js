var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
}); 

let tasks = [p1, p2, p3];
for(let i =0; i< 50; i+=1) {
    tasks.push(new Promise(resolve=>{
        console.log('wahaha');
        resolve();
    }));
} 
Promise.all(tasks).then(values => {
  // [3, 1337, "foo"] 
  console.log(values); 
});