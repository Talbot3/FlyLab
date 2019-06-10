#include <stdio.h>
#define __USE_GNU
#include <pthread.h>
#include <stdlib.h>
#define NUM_HANDLER_THREADS 3

// http://www.cs.kent.edu/~ruttan/sysprog/lectures/multi-thread/thread-pool-server.c

pthread_mutex_t request_mutex = PTHREAD_RECURSIVE_MUTEX_INITIALIZER_NP;

pthread_cond_t got_request = PTHREAD_COND_INITIALIZER;

int num_requests = 0;

struct request {
  int number;
  struct request *next;
};

struct request *request = NULL;
struct request *last_request = NULL;

void add_request(int request_num, pthread_mutex_t *p_mutex,
                 pthread_cond_t *p_cond_var) {
  int rc;
  struct request* a_request;

}