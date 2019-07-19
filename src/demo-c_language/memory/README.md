# LLDB

此程序很好的演示了值的覆盖情况

```c
main() {
  int i;
  char c;
  for (i = 0;i<5;++i) {
    scanf("%d ", &c);
    printf("%d ", i);
  }
  printf("\n");
}
```

`i`的值将不断的被覆盖，通过lldb调试命令`frame variable`，调出栈的情况

```lldb
frame variable
(int) i = 16438
(char) c = '\0'
```

lldb 查看堆的调用情况，使用lldb命令`f`,显示函数的调用层次(仅main函数调用一层，调用f 命令没有意义)
切换堆的意义在于查看不同函数内的栈的变量值


## 参考

- [C陷阱与缺陷4.4]()
- [lldb](http://southpeak.github.io/2015/01/25/tool-lldb/)
- [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb)