/**
 * Created by goerver on 16-10-5.
 */
var obj = {
    myproop:'my value'
}

var obj2 = {
    myprop:"my value"
}

//Instance in a Static Property
function Universe() {
    if(typeof Universe.instance === "object"){
        Universe.instance.start_time += 1;
        console.log(Universe.instance.start_time);
        return Universe.instance;
    }

    this.start_time = 0;
    this.bang = "Big";

    Universe.instance = this;

}

var uni = new Universe();
var uni2 = new Universe();

console.log(uni ===  uni2);

function  UniverseClosure() {
    // the cached instance
    var instance = this;
    this.start_time = 0;
    this.bang = "Big";
    
    Universe = function () {
        return instance;
    }
}

var uni = new UniverseClosure();
var uni2 = new UniverseClosure();

console.log(uni ===  uni2);
console.log(uni.bang);
console.log(uni2.bang);