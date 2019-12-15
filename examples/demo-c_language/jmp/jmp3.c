#include <setjmp.h>
#include <stdio.h>
#include <stdlib.h>
int main(int argv, char **argc) {
  jmp_buf env;
  int i = 3;

  i = setjmp(env);

  printf("i = %d\n", i);

  if (i!=0) {
    exit(0);
  }

  longjmp(env, 2);

  printf("This Line Does Not Get Printed");
  return 0;
}