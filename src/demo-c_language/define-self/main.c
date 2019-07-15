#include <stdlib.h>
#include <stdio.h>
typedef struct book {
  char* name;
  int pages;
} ebook;


char* borrow() {
  char * hi = "test";
  return hi;
}

int main(void) {
  // Test1 定义后，直接使用赋值。
  // for(;;) {
  //   int* the_prime = malloc(sizeof(*the_prime));
  //   printf("hello world\n");
  //   free(the_prime);
  // }

  // Test2 超出作用域后，编译器是否会清除值，而引起异常。
  char *t;
  t= borrow();
  printf("is there any value: %s \n", t);

  ebook * ppt;
  printf("size is %c %d\n", *t, sizeof(t));
}