
#include <gst/gst.h>

#include <gst/rtsp-server/rtsp-server.h>

const char *port = "10001";

static void handle_client(GstRTSPClient *client, GstRTSPContext *ctx,
                          GstRTSPServer *server, gpointer user_data) {
  GstRTSPClientClass *klass;
  GstRTSPMountPoints *mounts;
  GstRTSPMediaFactory *factory;
  GstRTSPUrl *uri;
  gchar *path;
  gchar *launch =
      "( videotestsrc is-live=1 ! x264enc ! rtph264pay name=pay0 pt=96 )";

  uri = ctx->uri;

  if (!uri)
    return;

  klass = GST_RTSP_CLIENT_GET_CLASS(client);
  path = klass->make_path_from_uri(client, uri);

  mounts = gst_rtsp_server_get_mount_points(server);
  factory = gst_rtsp_mount_points_match(mounts, path, NULL);
  if (!factory) {
    factory = gst_rtsp_media_factory_new();
    gst_rtsp_media_factory_set_launch(factory, launch);
    gst_rtsp_media_factory_set_shared(factory, TRUE);

    // g_signal_connect (factory, "media-constructed", (GCallback)
    //                                              media_constructed, NULL);

    gst_rtsp_mount_points_add_factory(mounts, path, factory);
    g_print("new factory: %s\n", launch);
  } else {
    g_object_unref(factory);
  }
  g_object_unref(mounts);
  g_free(path);
  // g_free (launch);
}

static void client_connected(GstRTSPServer *server, GstRTSPClient *client,
                             gpointer user_data) {
  g_signal_connect_object(client, "options-request", (GCallback)handle_client,
                          server, G_CONNECT_AFTER);
}

static gboolean timeout(GstRTSPServer *server) {
  GstRTSPSessionPool *pool;

  pool = gst_rtsp_server_get_session_pool(server);
  gst_rtsp_session_pool_cleanup(pool);
  g_object_unref(pool);

  return TRUE;
}

int main(int argc, char *argv[]) {
  GMainLoop *loop;
  GstRTSPServer *server;
  GError *error = NULL;

  gst_init(&argc, &argv);

  loop = g_main_loop_new(NULL, FALSE);

  /* create a server instance */
  server = gst_rtsp_server_new();
  gst_rtsp_server_set_service(server, port);

  /* attach the server to the default maincontext */
  gst_rtsp_server_attach(server, NULL);

  g_signal_connect(server, "client-connected", (GCallback)client_connected,
                   NULL);

  g_timeout_add_seconds(2, (GSourceFunc)timeout, server);

  g_object_unref(server);

  /* start serving */
  g_print("rtsp://127.0.0.1:%s/\n", port);
  g_main_loop_run(loop);

  return 0;
}