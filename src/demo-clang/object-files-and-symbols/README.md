# [对象文件和符号](http://nickdesaulniers.github.io/blog/2016/08/13/object-files-and-symbols/)

## 代表性异常: `Undefined symbols for architecture x86_64:`

- 复现命令: clang main.c
- 原因：`main.o引用了一些被调用的符号helper，但它本身并不包含任何关于它的信息`

## 出处: [object-files-and-symbols](http://nickdesaulniers.github.io/blog/2016/08/13/object-files-and-symbols/)

## 工具

- `nm` 将打印给定对象或可执行文件的名称列表或符号表