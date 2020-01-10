# C Python Bind

- [x] python 回调，仍然是阻塞式的
- [x] c 实现回调python 接口

> 基于python的异步扩展?

## cpython 段错误 核心已转储

> 参考自 https://blog.csdn.net/zt1091574181

```bash
gdb python
# 在gdb中
r main.py

# 当错误出现时，输入: 
where
```

## 参考

- [python extending](https://docs.python.org/3/extending/)
- [python c api](https://docs.python.org/3/c-api/)
- [python-c-extensions-tutorial](https://tutorialedge.net/python/python-c-extensions-tutorial/)
- [build-python-c-extension-module](https://realpython.com/build-python-c-extension-module/)
- [example-module-with-functions](https://www.hardikp.com/2017/12/30/python-cpp/#example-module-with-functions)
- [提取参数接口](https://docs.python.org/2/extending/extending.html#calling-python-functions-from-c)
- [发布扩展模块](https://docs.python.org/2/extending/building.html)

___

- [python gilstate——非Python创建的线程¶
](https://docs.python.org/zh-cn/3/c-api/init.html#gilstate)
- [从C ++ ＃1723中创建的线程调用python函数](https://github.com/pybind/pybind11/issues/1723)
- [Concurrency with embedded Python in a multi-threaded C++ application](https://www.codevate.com/blog/7-concurrency-with-embedded-python-in-a-multi-threaded-c-application)
- [mixing-c-python-ii-pybind11](https://www.slideshare.net/corehard_by/mixing-c-python-ii-pybind11)