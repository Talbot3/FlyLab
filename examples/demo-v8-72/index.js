class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  likesBaths = false;
  meow() {
    console.log('Meow!');
  }
}

let cat = new Cat('hahah');
console.log(cat.name)

const lf = new Intl.ListFormat('en');
console.log(lf.format(['Frank']));
// → 'Frank'
console.log(lf.format(['Frank', 'Christine']));
// → 'Frank and Christine'
console.log(lf.format(['Frank', 'Christine', 'Flora']));
// → 'Frank, Christine, and Flora'
console.log(lf.format(['Frank', 'Christine', 'Flora', 'Harrison']));
// → 'Frank, Christine, Flora, and Harrison'

console.log(JSON.stringify('\uD800'));


class IncreasingCounter {
  #count = 0;
  
  get value() {
    console.log('Getting the current value!');
    return this.#count;
  }
  increment() {
    this.#count++;
  }
}

let test = new IncreasingCounter();
console.log(test.value);