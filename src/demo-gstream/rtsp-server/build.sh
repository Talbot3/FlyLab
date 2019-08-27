gcc test-launch.c -o test `pkg-config --cflags --libs gstreamer-video-1.0 gtk+-3.0 gstreamer-1.0 gstreamer-rtsp-server-1.0`

gcc test-tra.c -o test-tra `pkg-config --cflags --libs gstreamer-rtsp-server-1.0 gstreamer-1.0`

gcc test-server.c -o test-srv `pkg-config --cflags --libs gstreamer-rtsp-server-1.0 gstreamer-1.0`
gcc test-server2.c -o test-srv2 `pkg-config --cflags --libs gstreamer-rtsp-server-1.0 gstreamer-1.0`
