#include <assert.h>
#include <stdlib.h>
#define NAPI_EXPERIMENTAL
#include <node_api.h>

#define PRIME_COUNT 100000
#define REPORT_EVERY 1000

typedef struct {
  napi_async_work work;
  napi_threadsafe_function tsfn;
} AddonData;

static void CallJs(napi_env env, napi_value js_cb, void *context, void *data) {
  (void)context;
  int the_prime = *(int *)data;

  if (env != NULL) {
    napi_value undefined, js_the_prime;

    assert(napi_create_int32(env, the_prime, &js_the_prime) == napi_ok);

    assert(napi_get_undefined(env, &undefined) == napi_ok);

    assert(napi_call_function(env, undefined, js_cb, 1, &js_the_prime, NULL) ==
           napi_ok);
    free(data);
  }
}

static void ExecuteWork(napi_env env, void *data) {
  AddonData *addon_data = (AddonData *)data;
  int idx_inner, idx_outer;
  int prime_count = 0;
  assert(napi_acquire_threadsafe_function(addon_data->tsfn) == napi_ok);

  for (idx_outer = 2; prime_count < PRIME_COUNT; idx_outer++) {
    for (idx_inner = 2; idx_inner < idx_outer; idx_inner++) {
      if (idx_outer % idx_inner == 0) {
        break;
      }
    }
    if (idx_inner < idx_outer) {
      continue;
    }
    if (!(++prime_count % REPORT_EVERY)) {
      int *the_prime = malloc(sizeof(*the_prime));
      *the_prime = idx_outer;

      assert(napi_call_threadsafe_function(addon_data->tsfn, the_prime,
                                           napi_tsfn_blocking) == napi_ok);
    }
  }

  assert(napi_release_threadsafe_function(addon_data->tsfn,
                                          napi_tsfn_release) == napi_ok);
}

static void WorkComplete(napi_env env, napi_status status, void *data) {
  AddonData *addon_data = (AddonData *)data;

  assert(napi_release_threadsafe_function(addon_data->tsfn,
                                          napi_tsfn_release) == napi_ok);

  assert(napi_delete_async_work(env, addon_data->work) == napi_ok);

  addon_data->work = NULL;
  addon_data->tsfn = NULL;
}

static napi_value StartThread(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value js_cb, work_name;
  AddonData *addon_data;

  assert(napi_get_cb_info(env, info, &argc, &js_cb, NULL,
                          (void **)(&addon_data)) == napi_ok);

  assert(addon_data->work == NULL && "Only one work item must exist at a time");

  assert(napi_create_string_utf8(env,
                                "N-API Thread-safe Call fkorm Async Work Item",
                                NAPI_AUTO_LENGTH, &work_name) == napi_ok);

  assert(napi_create_threadsafe_function(env, js_cb, NULL, work_name, 0, 1,
                                         NULL, NULL, NULL, CallJs,
                                         &(addon_data->tsfn)) == napi_ok);

  assert(napi_create_async_work(env, NULL, work_name, ExecuteWork, WorkComplete, addon_data, &(addon_data->work)) == napi_ok);

  return NULL;
}

static void addon_getting_unloaded(napi_env env, void* data, void* hint) {
  AddonData* addon_data = (AddonData*) data;
  assert(addon_data->work == NULL && "No work item in progress at module unload");
  free(addon_data);
}

/*napi_value*/ NAPI_MODULE_INIT(/*napi_env env, napi_value exports*/) {
  AddonData* addon_data = (AddonData*) malloc(sizeof(*addon_data));
  addon_data->work = NULL;

  napi_property_descriptor start_work = {
    "startThread",
    NULL,
    StartThread,
    NULL,
    NULL,
    NULL,
    napi_default,
    addon_data
  };

  assert(napi_define_properties(env, exports, 1, &start_work) == napi_ok);

  assert(napi_wrap(env, exports, addon_data, addon_getting_unloaded, NULL, NULL) == napi_ok);
  return exports;
}