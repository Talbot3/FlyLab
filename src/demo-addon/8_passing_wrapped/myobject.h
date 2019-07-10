#ifndef TEST
#define TEST 

#include <node_api.h>

class MyObject {
  public: 
    static napi_status Init(napi_env env);
    static void Destructor(napi_env env, void* nativeObject, void* finalize_hint);
    static napi_status NewInstance(napi_env env,
                                   napi_value arg,
                                   napi_value* instance);
    double Val() const { return val_; }
  private:
    MyObject();
    ~MyObject();

    static napi_ref constructor;
    static napi_value New(napi_env env, napi_callback_info info);
    double val_;
    napi_env env_;
    napi_ref wrapper_;
};
#endif