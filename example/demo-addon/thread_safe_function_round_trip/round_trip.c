#include <assert.h>
#include <stdlib.h>
#include <stdlib.h>
#include <string.h>
#include <uv.h>
#define NAPI_EXPERIMENTAL
#include <node_api.h>

#define REPORT_EVERY 1000

typedef struct TrheadItem {
  int the_prime;
  struct ThreadItem* next;
  bool call_has_returned;
  bool return_value;
} ThreadItem;

typedef struct {
  uv_mutex_t check_status_mutex;
  uv_thread_t the_thread;
  napi_threadsafe_function tsfn;
  napi_ref thread_item_constructor;
  bool js_accepts;
} AddonData;

static void CallJs(napi_env env, napi_value js_cb, void* context, void* data) {
  printf("=====================Here is : CallJs\n");
  AddonData* addon_data = (AddonData*)context;

  napi_value constructor;

  if (addon_data->js_accepts && !(env == NULL || js_cb == NULL)) {
    napi_value undefined, js_thread_item;
    assert(napi_get_undefined(env, &undefined) == napi_ok);
    assert(napi_get_reference_value(env, addon_data->thread_item_constructor, &constructor) == napi_ok);
    assert(napi_new_instance(env, constructor, 0, NULL, &js_thread_item) == napi_ok);

    assert(napi_wrap(env, js_thread_item, data, NULL, NULL, NULL) == napi_ok);
    assert(napi_call_function(env, undefined, js_cb, 1, &js_thread_item, NULL) == napi_ok);
  }
}

static void ThreadFinished(napi_env env, void* data, void* context) {
  printf("=====================Here is : ThreadFinished=======================\n");
  (void) context;
  AddonData* addon_data = (AddonData*) data;
  assert(uv_thread_join(&(addon_data->the_thread)) == 0);
  addon_data->tsfn = NULL;

  uv_mutex_destroy(&(addon_data->check_status_mutex));
  assert(napi_delete_reference(env, addon_data->thread_item_constructor) == napi_ok);
  free(data);
  printf("=====================Here is : ThreadFinished=====================\n");
}

static void PrimeThread(void* data) {
  printf("=====================Here is : PrimeThread\n");
  AddonData* addon_data = (AddonData*) data;
  int idx_outer, idx_inner;
  int prime_count = 0;
  ThreadItem* first = NULL;
  ThreadItem* current = NULL;
  ThreadItem* previous = NULL;
  ThreadItem* returned = NULL;

  for (idx_outer = 2;; idx_outer++) {
    for (idx_inner = 2; idx_inner < idx_outer && idx_outer % idx_inner != 0; idx_inner++);

    if (idx_inner >= idx_outer && (++prime_count % REPORT_EVERY) == 0) {
      current = memset(malloc(sizeof(*current)), 0, sizeof(*current));
      current->the_prime = idx_outer;
      current->call_has_returned = false;
      current->return_value = false;
      current->next = first;
      first = current;
      assert(napi_call_threadsafe_function(addon_data->tsfn, first, napi_tsfn_blocking) == napi_ok);
    }

    for (current = first, previous = NULL, returned = NULL; current != NULL && returned == NULL; previous = current, current = current->next) {
      uv_mutex_lock(&(addon_data->check_status_mutex));
      if (current->call_has_returned) {
        if (previous != NULL) {
          previous->next = current->next;
        } else {
          first = current->next;
        }
        returned = current;
      }
      uv_mutex_unlock(&(addon_data->check_status_mutex));
    }

    if (returned != NULL) {
      bool return_value = returned->return_value;
      free(returned);
      if (!return_value) {
        break;
      }
    }
  }
  assert(napi_release_threadsafe_function(addon_data->tsfn, napi_tsfn_release) == napi_ok);
}

static napi_value StartThread(napi_env env, napi_callback_info info) {
  printf("=====================Here is : StartThread\n");
  size_t argc = 1;
  napi_value js_cb, work_name;
  AddonData* addon_data;

  assert(napi_get_cb_info(env, info, &argc, &js_cb, NULL, (void*)&addon_data) == napi_ok);

  assert(addon_data->tsfn == NULL && "Work already in progress");

  addon_data->js_accepts = true;

  assert(napi_create_string_utf8(env, "Thread-safe Function Round Trip Example", NAPI_AUTO_LENGTH,&work_name) == napi_ok);

  assert(napi_create_threadsafe_function(env, js_cb, NULL, work_name, 0, 1, addon_data, ThreadFinished, addon_data, CallJs, &addon_data->tsfn) == napi_ok);

  assert(uv_thread_create(&(addon_data->the_thread), PrimeThread, addon_data) == 0);
  return NULL;
}

static bool is_thread_item(napi_env env, napi_ref constructor_ref, napi_value value) {
  printf("=====================Here is : is_thread_item\n");
  bool validate;
  napi_value constructor;
  assert(napi_get_reference_value(env, constructor_ref, &constructor) == napi_ok);
  assert(napi_instanceof(env, value, constructor, &validate) == napi_ok);
  return validate;
}

static napi_value RegisterReturnValue(napi_env env, napi_callback_info info) {
  printf("=====================Here is : RegisterReturnValue\n");
  size_t argc = 2;
  napi_value argv[2];
  AddonData* addon_data;
  bool return_value;
  ThreadItem* item;
  assert(napi_get_cb_info(env, info, &argc, argv, NULL, (void*)&addon_data) == napi_ok);

  if (!addon_data->js_accepts) {
    return NULL;
  }

  assert(argc == 2 && "Exactly two arguments were received");

  assert(is_thread_item(env, addon_data->thread_item_constructor, argv[0]));
  assert(napi_unwrap(env, argv[0], (void**)&item) == napi_ok);
  assert(napi_get_value_bool(env, argv[1], &return_value) == napi_ok);

  if (addon_data->js_accepts) {
    addon_data->js_accepts = return_value;
  }

  uv_mutex_lock(&(addon_data->check_status_mutex));
  item->call_has_returned = true;
  item->return_value = return_value;
  uv_mutex_unlock(&(addon_data->check_status_mutex));

  return NULL;
}


static napi_value ThreadItemConstructor(napi_env env, napi_callback_info info) {
  printf("=====================Here is : ThreadItemConstructor Function\n");
  return NULL;
}

static napi_value GetPrime(napi_env env, napi_callback_info info) {
  printf("=====================Here is : GetPrime\n");
  napi_value jsthis, prime_property;
  AddonData* ad;
  assert(napi_ok == napi_get_cb_info(env, info, 0, 0, &jsthis, (void*)&ad));
  assert(is_thread_item(env, ad->thread_item_constructor, jsthis));
  ThreadItem* item;
  assert(napi_ok == napi_unwrap(env, jsthis, (void**)&item));
  assert(napi_ok == napi_create_int32(env, item->the_prime, &prime_property));
  return prime_property;
}

static void addon_is_unloading(napi_env env, void* data, void* hint) {
  printf("=====================Here is : addon_is_unloading ==============================================\n");
  AddonData* addon_data = (AddonData*)data;
  uv_mutex_destroy(&(addon_data->check_status_mutex));
  assert(napi_delete_reference(env, addon_data->thread_item_constructor) == napi_ok);
  free(data);
}

#define DECLARE_NAPI_METHOD(name, func) \
  {name, 0, func, 0, 0, 0, napi_default, 0}

napi_value Init(napi_env env, napi_value exports) {
   printf("=====================Here is : Init\n");

  AddonData* addon_data = memset(malloc(sizeof(*addon_data)), 0, sizeof(*addon_data));

  assert(napi_wrap(env,exports, addon_data, addon_is_unloading, NULL, NULL) == napi_ok);

  assert(uv_mutex_init(&(addon_data->check_status_mutex)) == 0);

  napi_value thread_item_class;
  napi_property_descriptor thread_item_properties[] = {
    {"prime", 0, 0, GetPrime, 0, 0, napi_enumerable, addon_data}
  };

  assert(napi_define_class(env, "ThreadItem", NAPI_AUTO_LENGTH, ThreadItemConstructor, addon_data, 1, thread_item_properties, &thread_item_class) == napi_ok);
  assert(napi_create_reference(env, thread_item_class,1, &(addon_data->thread_item_constructor))== napi_ok);

  napi_property_descriptor export_properties[] = {
    {"startThread", NULL, StartThread, NULL, NULL, NULL, napi_default, addon_data},
    {"registerReturnValue", NULL, RegisterReturnValue,NULL, NULL, NULL, napi_default, addon_data}
  };
  assert(napi_define_properties(env, exports, sizeof(export_properties) / sizeof(export_properties[0]), export_properties) == napi_ok);
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)

// NAPI_MODULE_INIT() {
//   printf("=====================Here is : NAPI_MODULE_INIT\n");

//   AddonData* addon_data = memset(malloc(sizeof(*addon_data)), 0, sizeof(*addon_data));

//   assert(napi_wrap(env,exports, addon_data, addon_is_unloading, NULL, NULL) == napi_ok);

//   assert(uv_mutex_init(&(addon_data->check_status_mutex)) == 0);

//   napi_value thread_item_class;
//   napi_property_descriptor thread_item_properties[] = {
//     {"prime", 0, 0, GetPrime, 0, 0, napi_enumerable, addon_data}
//   };

//   assert(napi_define_class(env, "ThreadItem", NAPI_AUTO_LENGTH, ThreadItemConstructor, addon_data, 1, thread_item_properties, &thread_item_class) == napi_ok);
//   assert(napi_create_reference(env, thread_item_class,1, &(addon_data->thread_item_constructor))== napi_ok);

//   napi_property_descriptor export_properties[] = {
//     {"startThread", NULL, StartThread, NULL, NULL, NULL, napi_default, addon_data},
//     {"registerReturnValue", NULL, RegisterReturnValue,NULL, NULL, NULL, napi_default, addon_data}
//   };
//   assert(napi_define_properties(env, exports, sizeof(export_properties) / sizeof(export_properties[0]), export_properties) == napi_ok);
//   return exports;
// }