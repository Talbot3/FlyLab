// hash collections
use std::collections::HashMap;
fn main() {
    let mut v2 = vec![1, 2, 3];
    // 更新矢量
    v2.push(4);
    v2.push(5);
    v2.push(6);
    v2.push(7);
    v2.push(8);
    v2.push(9);

    let index = 3;
    match v2.get(index) {
        Some(_) => println!("v2 index {}, value {} .", index, v2.get(index).unwrap()),
        None => (),
    }

    for i in &mut v2 {
        // *i 表是智能指针，官方文档第17章
        *i += 20;
        println!("{}", i);
    }
    let x = 2.0; 
    let y: i32 = 3;

    let v3 = vec![
        SpreadSheetCell::Int(y),
        SpreadSheetCell::Float(x),
        SpreadSheetCell::Text(String::from("23234"))
    ];

    // 
    let s1 = String::from("tic");
    let s2 = String::from("tac");
    let s3 = String::from("toe");
    // 拼接 1
    // s2, s3 has been moved here and can no longer be used
    let s = s1 + "-" + &s2 + "-" + &s3;
    // 拼接 2
    let mut s22 = format!("{}-{}",s3, s);
    println!("hello {}", s);
    // 拼接 3
    s22.push(' ');
    s22.push_str("\t oh my shit .\n it down");
    s22.push_str(&s);
    println!("hello {}", s22);


    // 引用是变化的
    let mut hash_map = HashMap::new();
    hash_map.insert(String::from("I am one"), 10);
    hash_map.insert(String::from("I am two"), 2);
    hash_map.insert(String::from("I am three"), 2);
    hash_map.insert(String::from("I am four"), 4);

    // 简化创建hash map
    let vec = vec![String::from("Blue"), String::from("Yello")];
    let value = vec![3, 9];
    let team_green = String::from("Green");
    let tream_blue = "Blue".to_string();
    let mut teamBoard : HashMap<_, _> = vec.iter().zip(value.iter()).collect();
    for (key, value) in &teamBoard {
        println!("{}, {}", key, value);
    }
    // tream_green's live_cycle > teamBoard's live_cycle
    teamBoard.entry(&team_green).or_insert(&33);
    teamBoard.entry(&tream_blue).or_insert(&50);

    // 简单直接的显示内部值
    println!("{:?}", teamBoard);

    // 返回Option
    let score = teamBoard.get(&team_green);
    println!("{:?}", score.unwrap());
}
enum SpreadSheetCell {
    Int(i32),
    Float(f64),
    Text(String)
}
