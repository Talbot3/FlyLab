fn main() {
    // 转换华氏温度和摄氏温度之间的温度。摄氏20度=华氏20x18+32=华氏68度
    let dg : i32  = 68;
    let degree : i32= convert_degree(dg);
    println!("{}", degree);

    // 生成第n个Fibonacci数。
    println!("{}", fibonacci(30));
    println!("{}", say_song());
   
}

fn convert_degree(fahrenheit: i32) -> i32 {
    (fahrenheit-32)/18
}

fn fibonacci(n :i64) -> i64 {
    if n == 1 || n == 2 {
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n - 2);
    }
}

enum Name {
    a,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve
}

fn say_song() -> String {
    let mut head = String::from("
        On the twelfth day of Christmas,
        my true love sent to me
    ")
    let mut song;
    song = String::from("
        Twelve drummers drumming,
        Eleven pipers piping,
        Ten lords a-leaping,
        Nine ladies dancing,
        Eight maids a-milking,
        Seven swans a-swimming,
        Six geese a-laying,
        Five golden rings,
        Four calling birds,
        Three French hens,
        Two turtle doves,
        And a partridge in a pear tree!
    ");
    return song;
}