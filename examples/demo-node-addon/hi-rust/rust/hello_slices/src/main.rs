fn first_word(s: &String) -> &str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }

    return &s[..];
}

fn first_word_slice(s: &str) -> &str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }

    return &s[..];
}

fn main() {
    let s = String::from("hello world");

    let word = first_word(&s);
    // 作为切片参数传入
    let word2 = first_word_slice(&s[..]);
    // 借用规则，如果我们对某事有不可变的引用，我们也不能采用可变的引用
    // s.clear(); // error!

    println!("the first word is: {} {}", word, word2);
}
