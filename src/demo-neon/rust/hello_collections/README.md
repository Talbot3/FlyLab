# Collections

## 阅读指南

- [Vec]((https://doc.rust-lang.org/std/vec/struct.Vec.html))

## QA

- Q:向量只能存储相同类型的值。这可能不方便; 肯定有用例需要存储不同类型的项目列表, 如何实现？A:可以使用枚举。
- Q:在使用HashMap时，entry(&T)。问hashMap.entry(& "Hello_World".toString)存在什么问题?A: 生命周期短于hashMap
- Q:HashMap获取某个值的返回类型是什么,为什么呢？A: `Options<T>` , 需要处理NONE值