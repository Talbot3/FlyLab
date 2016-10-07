## npm link
# cd ~/work/node/test # 进入test模块目录
# npm link # 创建链接到$PREFIX/lib/node_modules
在多个项目中共享一个模块，存在的问题在于，没有同步到package中的版本中

## npm 镜像
registry = http://registry.cnpmjs.org

## 获取平台参数
process.platform

## 关于开源项目中，比较重要的几个业务组件
1. redis\mongoose\mysql\sequelize

2. express\hapi

3. connector

4. echarts

## 相关的自动化化处理model加载技术
参考 sequelize import方法实现。使用到了相关的path技术,以及joi,volidater相关的model对象处理技术

## 关于Nodejs线程模型
setTimeout/setInterval/process.nextTick/ I/O / libuv工作队列 / crypto(cpu密集型应用)