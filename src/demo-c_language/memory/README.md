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

## 值将不断的被覆盖证明过程

- 地址相邻

```bash
(lldb) frame var -L c
0x00007ffeefbff847: (char) c = 'Q'
(lldb) frame var -L i
0x00007ffeefbff848: (int) i = 355114
```

- 确认数据字节数

```
(lldb) expr sizeof(i)
(unsigned long) $8 = 4
(lldb) expr sizeof(c)
(unsigned long) $9 = 1
```

- 输入数据越界

示例: 输入 9,999,900,000

```
(lldb) po i
5507678

(lldb) po c
'`'
```

推论：系统中scanf("%d", &c)表示输入一个整数，故长度为4个字节，然后截出一个字节内容为`0x60`,高字节转移到了i地址段，i地址内容为`0x540A5E`
c: 0x 02  54 0A  5D 60
c: 0x 60

- 打印变量16进制值

```bash
(lldb) p/x i
(int) $8 = 0x00540a5e
(lldb) p/x c
(char) $9 = 0x60
```

> lldb 查看堆的调用情况，使用lldb命令`f`,显示函数的调用层次(仅main函数调用一层，调用f 命令没有意义)
切换堆的意义在于查看不同函数内的栈的变量值

## 参考

- [C陷阱与缺陷4.4]()
- [lldb](http://southpeak.github.io/2015/01/25/tool-lldb/)
- [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb)
- [lldb si/s/n](https://www.cnblogs.com/iamonion/p/7127328.html)
- [lldb x/8cb 0x7fc359a03040](http://www.samirchen.com/xcode-debug-memory-data/)