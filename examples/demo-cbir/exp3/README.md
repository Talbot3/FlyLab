# 基于百度智能云的交通图像相似图像搜索实现

## 测试结果

```bash
由于测试集均为汽车类型，返回的结果集中存在以下问题
1. 无法区分汽车类别
2. 无法区分汽车颜色
3. 无法区分汽车车牌
```

## 调整

根据上述结果，调整单纯的相似图像搜索，辅之以汽车识别加之结构化数据打标签(车型、颜色、车牌)

## 交通相关数据集

- [The Comprehensive Cars (CompCars) dataset](http://mmlab.ie.cuhk.edu.hk/datasets/comp_cars/)
- [汽车数据集](http://ai.stanford.edu/~jkrause/cars/car_dataset.html)

## 引用

- [交通研究](https://medusa.fit.vutbr.cz/traffic/)