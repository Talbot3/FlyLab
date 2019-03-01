#include <stdlib.h>
#include <stdio.h>
#include "stack.h"

#define STACK_SIZE 1000
#define PUBLIC /* empty */
#define PRIVATE static
PRIVATE int content[STACK_SIZE];
PRIVATE int top = 0;

PRIVATE void terminate(const char *message) {
  printf("%s\n", message);
}

PUBLIC void make_empty(void){
  top = 0;
}

PUBLIC bool is_empty(void){
  return top == 0;
}

PUBLIC bool is_full(void) {
  return top == STACK_SIZE;
}

PUBLIC void push(int i) {
  if (is_full()) {
    terminate("Error in push: stack is full");
  }
  content[top++] = i;
}

int pop(void) {
  if(is_empty()) {
    terminate("Error in pop: stack is empty");
  }
  return content[top--];
}

