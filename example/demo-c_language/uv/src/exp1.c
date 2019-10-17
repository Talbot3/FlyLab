#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <uv.h>

uv_loop_t *loop;
uv_pipe_t req;
void alloc_buffer(uv_handle_t *handle, size_t suggested_size, uv_buf_t *buf) {
  *buf = uv_buf_init((char*)malloc (suggested_size), suggested_size);
}

void read_stdin(uv_stream_t *stream, ssize_t nread, const uv_buf_t *buf) {
  if (nread < 0) {
    if (nread == UV_EOF) {
      uv_close((uv_handle_t *) &req, NULL);
    }
  } else if (nread>0) {
    printf("read stdin");
  }
}

int main() {
    loop = malloc(sizeof(uv_loop_t));
    int err = uv_pipe_init(loop, &req, 0);

    uv_pipe_open(&req, 3);
    uv_read_start((uv_stream_t*)&req, alloc_buffer, read_stdin);
    printf("Now quitting.\n");
    uv_run(loop, UV_RUN_DEFAULT);

    uv_loop_close(loop);
    free(loop);
    return 0;
}
