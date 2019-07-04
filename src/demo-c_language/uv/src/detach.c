#include <uv.h>
#include <stdio.h>

uv_loop_t * loop;
uv_process_t child_req;
uv_process_options_t options;
void on_exit(uv_process_t *req, int64_t exit_status, int term_signal) {
  printf("done");
  uv_close((uv_handle_t *) req, NULL);
}
int main(void) {
  loop = uv_default_loop();

  char* args[3];
  args[0] = "sleep";
  args[1] = "10000";
  args[2] = NULL;

  options.exit_cb = on_exit;
  options.file = "sleep";
  options.args = args;
  options.flags = UV_PROCESS_DETACHED;

  int r;
  if ((r=uv_spawn(loop, &child_req, &options))) {
    printf("%s\n", uv_strerror(r));
    return 1;
  }

  printf("Launched sleep with PID %d\n", child_req.pid);
  uv_unref((uv_handle_t*)&child_req);
  return uv_run(loop, UV_RUN_DEFAULT);
  
}