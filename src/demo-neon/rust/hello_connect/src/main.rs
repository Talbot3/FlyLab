extern crate hello_mod;
use hello_mod::math;
fn main() {
    println!("Hello, world!");
    let data = math::exec(String::from("11+22*3+4"));
}
