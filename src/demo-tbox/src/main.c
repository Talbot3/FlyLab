#include <stdio.h>

#include "tbox/tbox.h"
int main(int argc, char **argv)
{
    // init tbox
    if (!tb_init(tb_null, tb_null))
        return 0;

    // print info with tag
    tb_trace_i("hello tbox");

    // print info only for debug
    tb_trace_d("hello tbox");

    // print error info
    tb_trace_e("hello tbox");

    // init stream
    tb_stream_ref_t stream = tb_stream_init_from_url("http://www.xxxx.com/index.html");
    if (stream)
    {
        // save stream data to file
        tb_transfer_to_url(stream, "/home/file/index.html", 0, tb_null, tb_null);

        // exit stream
        tb_stream_exit(stream);
    }

    // ...
    getchar();
    // exit tbox
    tb_exit();
    return 0;
}