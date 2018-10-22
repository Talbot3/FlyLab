struct User {
    username: String,
    email: String,
    active: bool,
    time_stamp: u32
}

fn main() {
    // 每个属性都需要初始化
    let mut user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        time_stamp: 32
    };
    println!("Hello, world!, {}", user1.email);

    let user2 = build_user("arthur".to_string(), "arthur@we.com".to_string(), true, 232323);
    println!("hello, my friend {}", user2.email);
}

fn build_user(username: String, email: String, active: bool, time_stamp: u32) -> User {
    User {
        username,
        email,
        active,
        time_stamp
    }
}
