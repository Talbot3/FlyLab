# RUST Mod
> 在这部分官方文档中，没有补充完整mod依赖相关信息，请查看文尾阅读指南
## 创建模块

```bash
cargo new mod_name --lib
cargo build mod_name --lib
```

## 模块的增长

### 模块代码增加长的第一阶段

  如果这些模块有很多函数，而这些函数又很长，将难以在文件中寻找我们需要的代码。因为这些函数被嵌套进一个或多个 mod 块中，同时函数中的代码也会开始变长。这就有充分的理由将 client、network 和 server 每一个模块从 src/lib.rs 抽出并放入它们自己的文件中。

### 模块代码增加长的第二阶段
> 如果模块中还需要再分模块的话，单个模块继续增长。
  - 新建一个叫做 network 的 目录，这是父模块的名字
  - 将 src/network.rs 移动到新建的 network 目录中并重命名为 src/network/mod.rs
  - 将子模块文件 src/server.rs 移动到 network 目录中

## 阅读指南
- https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html

## Rust Question
- Q: Rust 模块的默认入口文件名?  A: src/lib.rs, 这也是其他子模块需要在lib.rs中声明的原因
- Q: Rust 模块系统的规则描术一下？ A
  - 如果一个叫做 foo 的模块没有子模块，应该将 foo 的声明放入叫做 foo.rs 的文件中。
  - 如果一个叫做 foo 的模块有子模块，应该将 foo 的声明放入叫做 foo/mod.rs 的文件中。
- Q: Rust 模块文件名与模块名必须相同么？ A: 是的
- Q: Cargo 依赖引入有哪几种方式？A: git\crates\path 三种方式
- Q: rust 模块可见性字段是? A: pub
- Q: 如果创建了一个名为math.rs的模块文件，那么math.rs文件中还需要声明math模块么？ A: 不需要。
- Q: 根据Rust私有性规则， 公有模块能被子模块访问么? A：可以