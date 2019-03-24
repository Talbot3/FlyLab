# C17 知识点摘要

>C语言要点摘要，编译标准为c17

```bash
clang -std=c17 -o targetName sourceFile.c
```

## Style ADT

## 结构体

## 模块化

## 依赖管理

## 常用预处理手法

## 其他话题

- IOCP
- 内存池
- 线程池
- 网络
- 异步IO
- 协程
- ffmpeg
- 单元测试
- 模糊测试
- [C语言的异常处理\堆栈捕获](http://www.cnblogs.com/hazir/p/c_setjmp_longjmp.html)
- [异常日志格式](http://dwarfstd.org/)

## C语言相关资料

- [tboox](https://tboox.org/cn/)
- glib
- xmake
- [libav](https://github.com/leandromoreira/ffmpeg-libav-tutorial)
- [object-files-and-symbols](http://nickdesaulniers.github.io/blog/2016/08/13/object-files-and-symbols/)

## 工程实践

- clang-format 代码风格工具
- clang-tidy 静态检测工具
- 标记过期函数 `__attribute__((deprecated)) void attribute();`
- [捕获异常信号-保存堆栈](https://gist.github.com/jvranish/4441299)
- [Crash日志-add2line](http://wiki.dreamrunner.org/public_html/Linux/addr2line-usage.html)

## 了无痕否？关于底层的思考

- [虎书推荐的 `GNU Bison`]()

# 参考

- 《C语言接口与实现——创建可重用软件的技术》