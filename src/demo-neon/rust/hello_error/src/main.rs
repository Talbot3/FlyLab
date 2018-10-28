use std::fs::File;
fn main() {
    println!("Hello, world!");

    let v = vec![1,2,3,4];
    // 查阅错误堆栈错误信息示例
    // println!("{}", v[99]);

    // panic!("crash and burn");

    //
    // let f = File::open("hello.txt");
    // let f = match f {
    //     Ok(file) => file,
    //     Err(error) => {
    //         panic!("There was a problem opening the file: {:?}", error)
    //     },
    // };
}
