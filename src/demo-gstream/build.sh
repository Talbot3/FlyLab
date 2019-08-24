# gcc playback-tutorial-1.c -o playback-tutorial-1 `pkg-config --cflags --libs gstreamer-1.0`
gst-launch-1.0 --gst-plugin-path=$HOME/gst-template/gst-plugin/src/.libs TESTPIPELINE