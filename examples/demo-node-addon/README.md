# Nodejs Addon

```bash
otool -hv binding.node
```

![](./ntool-exp.png)

## [Nodejs N-Api](https://nodejs.org/dist/latest-v12.x/docs/api/n-api.html)

Nodejs Napi 是原始的C接口，使用比较方便，支持异步，内存管理等等。
[官方维护的Demo `node-addon-examples`](https://github.com/nodejs/node-addon-examples.git)

## FAQ

### `Nodejs`的插件是什么？

> 在系统层面看是动态链接库；在开发都眼里是使用Nodejs Napi（封装了V8/libuv）相关接口实现的高性能或贴近系统层功能的模块；重要的是，它像水泥抹平了系统相关的接口，使用更方便(SO EASY);

### 如何编译

> node-gyp configure && node-gyp build 还有其他方式，不过此模块官方维护中

### 如何根据平台配置不同的编译参数？

```json
{
  "targets": [
    {
      "target_name": "DemoSDK",
      "sources": [
        "DemoSDK4Node.cpp"
      ],
      "include_dir":
      [
        "<!node -e \"require'nan')\")",
        "DemoSDK/src/"
      ],
      "libraries": [
        "../Libraries/mac/lib.a"
        "-F ../Libraries/mac -framework DemoLib"
      ],
      "define": []
    },
    "conditions": [
      ['OS=="mac"', {
        'configurations': {
          'Debug': {
            "xcode_settings": {
            // ...
            }
          },
          'Release': {
            // ... 
          }
        }
      }],
      ['OS=="win"', {
        'configurations': {
          'Debug': {
            "xcode_settings": {
            // ...
            }
          },
          'Release': {
            // ... 
          }
        }
      }]
    ]
  ]
}
```


### 简述一下n-api异常调用流程 ?

### NAPI_MODULE_INIT 与 NAPI_MODULE 的区别是什么 ？

### n-api 异步接口上下文的分配如何设计 ？

## 参考

- https://github.com/nodejs/node-gyp
- https://gyp.gsrc.io/docs/UserDocumentation.md#Custom-build-steps
- https://iweiyun.github.io/2019/01/04/node-cpp-addon/
- https://stackoverflow.com/questions/58960713/how-to-use-napi-threadsafe-function-for-nodejs-native-addon
- https://stackoverflow.com/questions/50815038/n-api-continuous-callbacks-for-c-media-stream/50828983