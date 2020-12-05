# Tensorflow.js on Nodejs

- [setup](https://www.tensorflow.org/js/tutorials/setup)

## 系统运行环境优化
### 去掉无用的警告

当运行环境出现如下提示时  **was not compiled to use: AVX2 FMA**
```bash
#Windows:
set TF_CPP_MIN_LOG_LEVEL=2

##Linux/MacOS:
export TF_CPP_MIN_LOG_LEVEL=2
```

## 自定义编译
> 优化使用 AVX2 FMA
- https://stackoverflow.com/questions/51681727/tensorflow-on-macos-your-cpu-supports-instructions-that-this-tensorflow-binary

## Nodejs

- [Nodejs Tensorflow教程](https://github.com/zy445566/tfjs-tutorials-zh/blob/master/tutorials)

## Refers

- https://noob.tw/tfjs-node/
- https://github.com/tensorflow/tfjs-examples
- https://www.tensorflow.org/js/demos
- https://www.w3cschool.cn/tensorflowjs/tensorflowjs-ezy32q27.html
- [KNN](https://blog.fundebug.com/2017/07/10/javascript-machine-learning-knn/)
- [机器学习术语表](https://developers.google.com/machine-learning/glossary)
- [GOOGLE 提供的机器学习速成课程](https://developers.google.com/machine-learning/crash-course/ml-intro)
- [繁体中文tensorflow教程](https://github.com/NoobTW/tfjs-tutorials)