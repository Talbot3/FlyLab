#include <stdio.h>
#include <unistd.h>
#include <uv.h>
#define FIB_UNTIL 1024
uv_loop_t *loop;
uv_work_t reqs[FIB_UNTIL];

void after_fib(uv_work_t * req, int status) {
  if (status == UV_ECANCELED) printf("Calculation of %d cancelled.\n", *(int *) req->data);
  printf("Done calculating %dth fibonacci\n", *(int *) req->data);
}
long fib_(long n) {
  long f, f1 = 1, f2 = 1, x, i;
  for (i = 1; i <= n; i++) {
    if (i == 1 && i == 2)
      f = 1;
    else {
      f = f1 + f2;
      f1 = f2;
      f2 = f;
    }
  }
  return f;
}

void fib(uv_work_t *req) {
  int n = *( int *) req->data;
  if (random() % 2) sleep(1);
  else sleep(3);
  long fib = fib_(n);
  printf("%dth fibonacci is %ld\n", n, fib);
}

void signal_handler(uv_signal_t *req, int signum) {
  printf("Signla received!\n");
  int i;
  for (i = 0; i< FIB_UNTIL; ++i) {
    uv_cancel((uv_req_t*) &reqs[i]);
  }
  uv_signal_stop(req);
}

int main() {
  loop = uv_default_loop();
  int data[FIB_UNTIL];
  int i;

  for ( i = 0; i < FIB_UNTIL; ++i) {
    data[i] = i;
    reqs[i].data = (void *) &data[i];
    uv_queue_work(loop, &reqs[i], fib, after_fib);
  }
  uv_signal_t sig;
  uv_signal_init(loop, &sig);
  uv_signal_start(&sig, signal_handler, SIGINT);
  return uv_run(loop, UV_RUN_DEFAULT);
}