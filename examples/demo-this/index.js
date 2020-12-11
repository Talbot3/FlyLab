var obj = { fn() { console.log(this) } }

var fn = obj.fn

var obj2 = {
    fn: fn.bind(obj)
}

fn()
obj2.fn()

var obj = { fn : () => { console.log(this) } }

var fn = obj.fn

var obj2 = {
    fn: fn.bind(obj)
}

fn()
obj2.fn()

var obj = {
    fn() {
        console.log(this);
        (() => { console.log(this) })()
    }
}