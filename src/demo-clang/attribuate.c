#include <stdlib.h>
#include <stdio.h>

__attribute__((deprecated)) void attribute();
void attribute()
{
  printf("GNU attribute \n");
}

int main()
{
  attribute();
  return 0;
}