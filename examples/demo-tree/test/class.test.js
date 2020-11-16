class B {
    // 定义在this上，而不是protype上.
    // this 指向当前创建的类实例对象上，而不是类的原型对象
    print =() => {
        console.log('print b');
    }
}

class D extends B {
    print()  {
        console.log('print d');
        console.log('print d');
        super.print();
    }
}

const d = new D();
// 当访问一个对象实例的属性时，会先在实例上进行查找，如果没有，则顺着原型链往上查找，直到原型链的顶端。
d.print();


class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.sayName = this.sayName.bind(this);
    }

    sayName() { console.log(this.name); };

    sayAge = () => { console.log(this.age); }
}

let tom = new Animal('tom', 19);
let [sayName, sayAge] = [tom.sayName, tom.sayAge];
sayAge();   // 正常输出19
sayName();  // this为undefined