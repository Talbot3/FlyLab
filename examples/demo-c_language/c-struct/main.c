#include <stdio.h>
#include <stdlib.h>

typedef struct _Page {
  char* title;
  char* description;
  struct _Page* next;
} Page;

int main(int argc, char** argv) {
  Page* page = (Page*) malloc(sizeof(Page));
  
  free(page);
  return 0;
}