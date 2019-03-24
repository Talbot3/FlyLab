#include <stdio.h>
#define ARRAY_SIZE 5
int main(int argc, char **argv) {
  int array[ARRAY_SIZE] = {3,3,3,3,3};
  int *pi = NULL;
  int zero = 0x666666;
  for (pi = &array[0];pi < &array[ARRAY_SIZE];++pi) {
    *pi = 0;
  }
  for (int i=0; i< ARRAY_SIZE; ++i) {
    printf("%d", array[i]);
  }
  pi =(int *)(zero);
  printf("\n%p %d", pi, *pi);
  return 0;
}