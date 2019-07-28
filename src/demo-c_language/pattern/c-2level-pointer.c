#include<stdlib.h>
#include<stdio.h>

void m_malloc(char **s) {
  printf("s-%p\n", &s);
  *s = (char*)malloc(1000);
}

int main(void) {
  char *p = NULL;
  printf("p-%p\n", &p);
  m_malloc(&p);
  if(p) {
    free(p);
    printf("free fine\n");
  }
  return 0;
}