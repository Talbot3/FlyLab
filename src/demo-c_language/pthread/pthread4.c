#include <stdio.h>
#include <pthread.h>
#include <ctype.h>
#include <stdlib.h>

void* count_words(void *f);

struct arg_set{
  char *filename;
  int total_words;
};

pthread_mutex_t counter_lock = PTHREAD_MUTEX_INITIALIZER;

int main(int argc, char * args[]) {
  const int NUM = argc -1;
  pthread_t thread[NUM];
  struct arg_set argSet[NUM];
  for (int i=0; i< NUM ; ++i) {
    argSet[i].filename = args[i+1];
    argSet[i].total_words=0;
    pthread_create(&thread[i], NULL, count_words, (void*)&argSet[i]);
    pthread_join(thread[i], NULL);
    printf("File %s in %d words\n", argSet[i].filename, argSet[i].total_words);
  }
  int sumWords = 0;
  for (int i=0; i<NUM; ++i) {
    sumWords += argSet[i].total_words;
  }

  printf("The total word count is %d\n", sumWords);
  return 0;
}

void* count_words(void *f) {
  struct arg_set *args = (struct arg_set*)f;
  FILE *fp;
  int c, prevc = '\0';
  if ((fp=fopen(args->filename, "r")) != NULL) {
    while((c=getc(fp))!= EOF) {
      if(!isalnum(c) && isalnum(prevc)) {
        pthread_mutex_lock(&counter_lock);
        args->total_words++;
        pthread_mutex_unlock(&counter_lock);
      }
      prevc = c;
    }
    fclose(fp);
  } else {
    perror(args->filename);
  }
  return NULL;
}