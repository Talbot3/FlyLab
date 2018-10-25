extern crate hello_mod;
fn main() {
    println!("Hello, world!");
    let data = hello_mod::math::exec(String::from("11+22*3+4"));
    println!("{}", data)
}

fn try_me() {
    hello_mod::outermost::middle_function();
    // outermost::middle_secret_function();
    // outermost::inside::inner_function();
    // outermost::inside::secret_function();
}
