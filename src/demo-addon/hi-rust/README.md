# RUST

> 学习Rust最重要的一点是需要熟悉所有权的写法。
- cargo new project_name
- cargo build
- cargo run

# RUST + NODEJS = NEON

> 用于编写安全、快速的原生 Node.js 模块的 Rust 绑定。
为Nodejs创建更多的应用场景
@see https://guides.neon-bindings.com/

## 示例

Neon 让我们可以在 Rust 代码中使用 JavaScript 类型。要创建一个新的 Neon 工程，我们可以使用它自带的命令行工具。执行 npm install neon-cli --global 来安装它。

## FAQ

- what is heap/stack?

> from  https://www.geeksforgeeks.org/stack-vs-heap-memory-allocation/

Stack Allocation : The allocation happens on contiguous blocks of memory. We call it stack memory allocation because the allocation happens in function call stack. The size of memory to be allocated is known to compiler and whenever a function is called, its variables get memory allocated on the stack. And whenever the function call is over, the memory for the variables is deallocated. This all happens using some predefined routines in compiler. Programmer does not have to worry about memory allocation and deallocation of stack variables.

Heap Allocation : The memory is allocated during execution of instructions written by programmers. Note that the name heap has nothing to do with heap data structure. It is called heap because it is a pile of memory space available to programmers to allocated and de-allocate. If a programmer does not handle this memory well, memory leak can happen in the program.

## 阅读指南

- [Rust自定义错误](https://boats.gitlab.io/blog/post/2017-11-16-announcing-failure/)
- [24 days of Rust](http://siciarz.net/)
- [Rust Trait Error](https://doc.rust-lang.org/std/error/trait.Error.html)
- [Rust lint](https://github.com/rust-lang-nursery/rust-clippy)
- [Rust Error Chain](https://github.com/rust-lang-nursery/error-chain)
- [Rust Learning](https://github.com/ctjhoa/rust-learning)

## 参考

- [rust-lang](https://blog.rust-lang.org/2015/05/11/traits.html)
- [rust-ppt](http://miami-acm.github.io/rust-tutorial/#/the-rust-programming-language)
- [rust-pattern](https://github.com/rust-unofficial/patterns)

## 听说你在犹豫

[rust vs java](https://www.oschina.net/translate/comparing-rust-and-java) or `rust vs node` or `rust vs c/c++` or `rust vs golang` and so on.
people talk about too much.