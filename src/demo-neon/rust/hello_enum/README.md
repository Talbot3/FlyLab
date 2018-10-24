## Rust Enum

> 使用枚举并将数据直接放进每一个枚举成员而不是将枚举作为结构体的一部分

## Question Rust Enum

- 在Rust中不存在空值这一概念，那个使用什么类型代替呢？ Option
- `let t: Option <i8> = Option::some(3)` 能否直接与 `let s: i8 =2` 相加呢？ 不能
- 结构体和枚举，例举几个相似点？ 1. 都能使用impl
- `if let` 的使用场景是什么？ 只匹配一个模式的值而忽略其他模式的情况。

## Rust match 控制流运算符

## 课后作业
- 阅读[rust option文档](https://doc.rust-lang.org/std/option/enum.Option.html)