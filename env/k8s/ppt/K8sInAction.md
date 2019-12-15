title: K8s in Action
class: animation-fade
layout: true

<!-- This slide will serve as the base layout for all your slides -->
.bottom-bar[
  {{title}}
]

---

class: impact
## Hi, K8s
.col-6[
  ## Kubernetes 能做啥
  - 快速部署应用
  - 快速扩展应用
  - 无缝对接新的应用功能
  - 优化硬件资源的使用
]
.col-6[
  ## Kubernetes 都解决了啥
  - 可靠的镜像构建/部署
  - 运行的一致性
  - 动态部署和管理
]
---

You can : 描述集群的架构，定义服务的最终状态,
kubernetes可以帮你将系统自动地达到和维持在这个状态。

Kubernetes是Google开源的容器集群管理系统。它构建容器（Ddocker\rkt）技术之上，为容器化的应用提供资源调度、部署运行、服务发现、扩容缩容等整一套功能，本质上可看作是基于容器技术的mini-PaaS平台

---
## [what k8s different with docker](https://thenewstack.io/container-networking-landscape-cni-coreos-cnm-docker/)

## k8s vs swarm in github

--
- <img src="http://ol1szz8y7.bkt.clouddn.com/18-1-4/89504981.jpg" width = "960" height = "200" alt="图片名称" align=center />
--
- <img src="http://ol1szz8y7.bkt.clouddn.com/18-1-4/97859005.jpg" width = "960" height = "200" alt="图片名称" align=center />
--
Kubernetes(容器集群管理系统)处于快速生长期
--

---
# VS NetWork Model
## Docker NetWork Model
<img src="https://storage.googleapis.com/cdn.thenewstack.io/media/2016/09/Chart_Container-Network-Model-Drivers.png
" width = "800" height = "400" alt="Docker NetWork Model" align=center />

---
## kubernetes NetWork Model
<img src="https://storage.googleapis.com/cdn.thenewstack.io/media/2016/09/Chart_Container-Network-Interface-Drivers.png
" width = "800" height = "400" alt="Docker NetWork Model" align=center />
## [参考](https://thenewstack.io/container-networking-landscape-cni-coreos-cnm-docker/)
---

## Summary About Cluster Network
Kubernetes对任何网络实施都施加了以下基本要求（禁止任何有意的网络分割策略）：

- 所有容器都可以与所有其他容器通信而无需NAT
- 所有节点都可以与所有容器进行通信（反之亦然），而无需NAT
- 一个容器认为自己的IP就是别人看到的IP

---

## Request
<img src="http://ol1szz8y7.bkt.clouddn.com/18-1-10/3613639.jpg
" width = "900" height = "500" alt="Docker NetWork Model" align=center />
---
# [分层架构](http://docs.kubernetes.org.cn/251.html#i)

<img src="http://ol1szz8y7.bkt.clouddn.com/18-1-10/11804267.jpg
" width = "960" height = "400" alt="图片名称" align=center />

---

## [Install Action](https://kubernetes.io/cn/)

[minikube 安装][5]
### 参考 
[k8s包管理器][1]
[docker 安装 k8s][2]
[Docker 安装与重用][6]

---

# [K8s OverView](https://jimmysong.io/posts/kubernetes-and-cloud-native-app-overview/#kubernetes%E4%B8%AD%E7%9A%84%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86%E4%B8%8E%E5%AE%B9%E5%99%A8%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F)
### 理解 Kubernetes 对象
在 Kubernetes 系统中，Kubernetes 对象 是持久化的条目.
#### 描述了如下信息：

- 什么容器化应用在运行（以及在哪个 Node 上）
- 可以被应用使用的资源
- 关于应用如何表现的策略，比如重启策略、升级策略，以及容错策略
>spec 必须提供，它描述了对象的 期望状态 —— 希望对象所具有的特征。status 描述了对象的 实际状态，它是由 Kubernetes 系统提供和更新

---

# Create A Deployment Action

---

# [Api Conventions](https://github.com/kubernetes/community/blob/master/contributors/devel/api-conventions.md#spec-and-status)
## Kubectl 命令
kubectl [Commond] [Type] [Name] [Flags]
Command: create\delete\edit\describe\get\apply
Type: $(kubectl get)

## Kubectl 与 Docker 命令对照
kubectl get po ~ docker ps

---

# Has Questions ?
<img src="http://ol1szz8y7.bkt.clouddn.com/18-1-10/31524256.jpg
" width = "600" height = "600" alt="K8s-Node" align=center />

---

# Node
kubelet的作用是：负责管理和维护在这台主机上运行着的所有容器，维持pod的运行状态(status)和它的期望值(spec)一致。
<img src="http://ol1szz8y7.bkt.clouddn.com/18-1-4/37189285.jpg" width = "600" height = "400" alt="K8s-Node" align=center />

---

# Service
<img src="http://ol1szz8y7.bkt.clouddn.com/18-1-4/2899073.jpg" width = "600" height = "400" alt="K8s-Node" align=center />

---
Service为一组Pod（通过labels来选择）提供一个统一的入口，并为它们提供负载均衡和自动服务发现。比如，可以为前面的app创建一个service：

- ClusterIP：默认类型，自动分配一个仅cluster内部可以访问的虚拟IP
- NodePort：在ClusterIP基础上为Service在每台机器上绑定一个端口，这样就可以通过<NodeIP>:NodePort来访问该服务
- LoadBalancer：在NodePort的基础上，借助cloud provider创建一个外部的负载均衡器，并将请求转发到<NodeIP>:NodePort
- ExternalName：将服务通过DNS CNAME记录方式转发到指定的域名（通过spec.externlName设定）。需要kube-dns版本在1.7以上。
---

## Create Service Action

---

### Volume
> 容器中的磁盘文件是短暂的，这在运行在容器中的非平凡的应用程序中存在一些问题。首先，当容器崩溃时，kubelet会重新启动它，但是文件将会丢失 - 容器以干净的状态启动。其次，在一起运行容器时，Pod通常需要在这些容器之间共享文件。Kubernetes Volume抽象解决了这两个问题。
### ConfigMap
根据配置文件、目录或指定的literal-value创建configmap

---

Create Volume Action

---
# Has Questions ?
<img src="http://ol1szz8y7.bkt.clouddn.com/18-1-10/31524256.jpg
" width = "600" height = "600" alt="K8s-Node" align=center />

---
## [(Cron) Job](https://kubernetes.io/cn/docs/concepts/workloads/controllers/cron-jobs/)
```yaml
apiVersion: batch/v1beta1
```
[参考](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#what-is-a-cron-job)
---
## How to access
- hostNetwork
- hostPort
- NodePort
- LoadBalancer
- [Ingress](https://github.com/kubernetes/ingress-nginx)

---

## Create Ingress Action

---
# Has Questions ?
<img src="http://ol1szz8y7.bkt.clouddn.com/18-1-10/31524256.jpg
" width = "600" height = "600" alt="K8s-Node" align=center />

---
## 谢谢观看

[一段关于应用的对话:这是未来](https://circleci.com/blog/its-the-future/)
- 是的，我在说Kubernetes。这让你安排你所有的服务。
编排他们？
- 是的，所以你有这些服务，他们必须是可靠的，所以你需要多个副本。因此，Kubernetes确保您拥有足够的数据，并且它们分布在您车队中的多个主机上，因此始终可用。
我现在需要一个舰队？
- 对，可靠性。但是Kubernetes为你管理它。而且你知道Kubernetes的工作原因是Google建立了它，它运行在etcd上。


[1]: https://docs.helm.sh/helm/?spm=5176.doc58587.2.7.srFXxv#helm-repo-add

[2]: https://github.com/kubernetes/kubernetes/blob/de0643106c5c3e83e937a41917b0341e677e75ad/build/README.md

[3]: https://docs.docker.com/docker-for-mac/#uninstall-or-reset

[4]: https://github.com/kubernetes/minikube/releases

[5]: https://github.com/kubernetes/minikube
[6]: https://github.com/kubernetes/minikube/blob/master/docs/reusing_the_docker_daemon.md
[7]: https://github.com/kubernetes/minikube/blob/master/docs/persistent_volumes.md
[8]: https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/
[9]: https://kubernetes.io/docs/tutorials/kubernetes-basics/deploy-interactive/
[10]: https://github.com/feiskyer/kubernetes-handbook/blob/master/deploy/single.md
[11]: http://dockone.io/article/3004