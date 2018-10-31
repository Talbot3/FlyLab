struct Point <T>{
    x: T,
    y: T,
}

impl<T> Point<T> {
    pub fn x(&self)-> &T {
        &self.x
    }
}

fn main() {
    let integer = Point {
        x: 22.2,
        y: 33.3,
    };
    println!("Hello, world! {:?} {:?}", integer.x(), integer.y);
}
