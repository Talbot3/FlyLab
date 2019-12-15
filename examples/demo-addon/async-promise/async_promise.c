#include <node_api.h>
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>

typedef struct {
  int32_t num_val;
  napi_deferred deferred;
  napi_async_work work;
} promise_data_t;

/**
 * Perform type asynchronous work.
 */
void eg_execute(napi_env env, void *data) {
  printf("eg_execute\n");
  promise_data_t* c = (promise_data_t*) data;
  printf("Promise async using num_val = %d\n", c->num_val);
  sleep(1);
}

/**
 * Handle the completion of the asynchronous work.
 */
void eg_complete(napi_env env, napi_status status, void* data) {
  printf("eg_complete\n");

  napi_value argv[1];
  status = napi_create_string_utf8(env, "Promise resolved successfully!", NAPI_AUTO_LENGTH, argv);
  if (status != napi_ok) {
    napi_throw_error(env, NULL, "Unable to create resolved message.");
  }

  napi_value global;
  status = napi_get_global(env, &global);
  if (status != napi_ok) {
    napi_throw_error(env, NULL, "Unable to get global data.");
  }

  promise_data_t* c= (promise_data_t*)data;
  status = napi_resolve_deferred(env, c->deferred, argv[0]);
  if (status != napi_ok) {
    napi_throw_error(env, NULL, "Unable to create promise result.");
  }
  napi_delete_async_work(env, c->work);
  free(c);
}

 /**
  * @brief  The function called by javascript to get a promise returned
  */
napi_value eg_promise(napi_env env, napi_callback_info info) {
  printf("eg_promise\n");
  napi_status status;
  napi_value promise;

  size_t argc = 1;
  napi_value argv[1];
  status = napi_get_cb_info(env, info, &argc, argv, NULL, NULL);
  if (status != napi_ok) {
    napi_throw_error(env, NULL, "Unable to get js data");
  }

  promise_data_t* c = (promise_data_t*)malloc(sizeof(promise_data_t));
  napi_get_value_int32(env, argv[0], &c->num_val);

  // Create then promise.
  status = napi_create_promise(env, &c->deferred, &promise);
  if (status != napi_ok) {
    napi_throw_error(env, NULL, "Unable to create promise.");
  }

  napi_valuetype valtype;
  napi_typeof(env, argv[0], &valtype);
  // Check for the correct calling of the function.
  if (valtype != napi_number) {
    // Not a Number so reject the promise.
    napi_value str[1];
    napi_create_string_utf8(env, "Promise rejected: Argument not a number.", NAPI_AUTO_LENGTH, str);
    napi_reject_deferred(env, c->deferred, str[0]);
    free(c);
  } else {
    // Create then async function.
    napi_value resource_name;
    napi_create_string_utf8(env, "example:promise", -1, &resource_name);
    napi_create_async_work(env, NULL, resource_name, eg_execute, eg_complete, c, &c->work);
    napi_queue_async_work(env, c->work);
  }
  return promise;
}

napi_value Init(napi_env env, napi_value exports) {
  /**
   * Map the c function to then javascript fucntion.
   */
  printf("Init\n");
  napi_property_descriptor desc[] = {
    {
      .utf8name = "examplePromise",
      .method = eg_promise,
      .getter = NULL,
      .setter = NULL,
      .value = NULL,
      .attributes = napi_default,
      .data = NULL
    }
  };

  napi_status status = napi_define_properties(env, exports, 1, desc);
  if (status != napi_ok) {
    napi_throw_error(env, NULL, "Unable to populate exports");
  }
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init);