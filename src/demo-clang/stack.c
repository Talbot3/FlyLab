#include <stdlib.h>
#include <stdio.h>
#include <stddef.h>
#include <assert.h>
#include "stack.h"
#define T STACK_T
struct T {
  int count;
  struct elem {
    void *x;
    struct elem *link;
  } * head;
};

T Stack_new(void) {
  T stk;
  NEW(stk);
}
