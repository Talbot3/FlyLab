# Cache

## 术语

- 行
- 块
- Cache

## 程序测试

> `gcc`对行复制似乎进行了优化，与块复制的差别仅在于CPU的消耗

```C
clang -O main.c
time ./a.out
// 块复制
// ./a.out  0.00s user 0.00s system 56% cpu 0.004 total
// 行复制
// ./a.out  0.00s user 0.00s system 69% cpu 0.006 total
```