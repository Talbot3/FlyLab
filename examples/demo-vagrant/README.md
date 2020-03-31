# Vagrant

- [Vagrant常用镜像源](https://app.vagrantup.com/boxes/search)

## 工具集

- vagrant + docker + virtualbox

## 常用命令

```bash
vagrant box add \
https://mirrors.tuna.tsinghua.edu.cn/ubuntu-cloud-images/bionic/current/bionic-server-cloudimg-amd64-vagrant.box \
--name ubuntu/bionic
# 查看镜像列表
vagrant box list
# 初始化 centos/7
vagrant init centos/7
# 更新
vagrant up

# 添加centeros 镜像
vagrant box add generic/centos8
```

## 镜像源

- [清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/)