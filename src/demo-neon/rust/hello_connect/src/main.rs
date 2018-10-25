extern crate hello_mod;
use hello_mod::outermost;
// 写法二
// use TrafficLight::{Red, Yello, Green};
// 写法一：使用* 语法，称为glob运算符
use TrafficLight::*;

fn main() {
    println!("Hello, world!");
    let data = hello_mod::math::exec(String::from("11+22*3+4"));
    println!("{}", data)
}

fn try_me() {
    hello_mod::outermost::middle_function();
    // 访问公有模块中的公有方法
    outermost::middle_secret_function();
    // 访问内部模块中的公有方法
    outermost::inside::inner_function();
    outermost::inside::secret_function();

    let red = Red;
    let yello = Yello;
    let green = Green;
}

enum TrafficLight {
    Red,
    Yello,
    Green
}
