#include <stdlib.h>
#include <stdio.h>
int main(void) {
  // 定义后，直接使用赋值。
  for(;;) {
    int* the_prime = malloc(sizeof(*the_prime));
    printf("hello world\n");
    free(the_prime);
  }
}