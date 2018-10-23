// 将任意类型的数据放入枚举成员中, 包括结构体
enum IpAddr {
    V4(u8, u8, u8, u8),
    V6(String)
}

enum Message {
    Quit,
    // 包含一个匿名结构体
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

impl Message {
    // 此处描述的不甚明了，需要查阅其他经典的实现方式
     fn call(&self){
         // 不知作何处理
     }
}

fn main() {
    let home = IpAddr::V4(127, 0, 0,1);
    let lookback = IpAddr::V6(String::from("::1"));
    let m = Message::Write(String::from("hello"));
    let msg = m.call();
}
