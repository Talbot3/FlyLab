# K8s In Action

- k8s version: v1.17.0
- minkube v1.7.3

## 运行本地k8s环境

> [支持国内环境](https://yq.aliyun.com/articles/221687)

```bash
make start
```

___

# K8S镜像加速

### gcr.io镜像加速

- gcr.azk8s.cn

### quay.io镜像加速

- quay.azk8s.cn


## 常见异常

```
Error creating: pods "dashboard-metrics-scraper-7b64584c5c-" is forbidden: error looking up service account kubernetes-dashboard/kubernetes-dashboard: serviceaccount "kubernetes-dashboard" not found
```

## 运行状态查看

```bash
 kubectl get pods -A
```

## 工具

- [K8s 客户端](https://kubernetic.com/)

## [把应用程序迁移到k8s需要修改什么？](https://blog.csdn.net/weixin_38748858/article/details/102758381)

## [docker.io、gcr.io、quay.io镜像加速](https://www.ilanni.com/?p=14534)