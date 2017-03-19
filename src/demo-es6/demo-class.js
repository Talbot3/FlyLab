/**
 * Created by crazy on 17-3-19.
 */
//定义类
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

console.log(new Point(1,2));

class Rectangle {
    constructor(length, width) {
        console.log(new.target === Rectangle);
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }
}

var obj = new Square(3); // 输出 false