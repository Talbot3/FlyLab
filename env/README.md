# 构建私域开源环境

## 容器化应用编排平台: k8s

## 分布式存储: cepth/[gluster](https://docs.gluster.org/en/latest/Administrator%20Guide/GlusterFS%20Introduction/)

## 镜像管理: goharbor/harbor

## npm 私域包管理: npm registry

## 用于ci/cd及代码审核:  gitlab/github

___

## 基础中间件

- nginx
- minio
- elastic-search/logstash/kibana
- redis
- mysql/mongodb
- ffmpeg/gstream

## 本地开发流程

- [使用Minikube的Kubernetes本地开发环境](https://www.abhishek-tiwari.com/local-development-environment-for-kubernetes-using-minikube/)

## 生产单机服务器环境

```

curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl && chmod +x ./kubectl && mv ./kubectl /usr/local/bin/kubectl

curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 \
  && chmod +x minikube

sudo mkdir -p /usr/local/bin/
sudo install minikube /usr/local/bin/
```