[Kubernetes](https://kubernetes.io/)，也称为 K8s，是一个开源系统，用于自动部署、扩展和管理容器化应用程序。

## Dashboard 中的 Kubernetes

我们的 Dashboard 从 7.2.0 版本开始支持 Kubernetes 作为服务发现。你可以切换到Node节点页面，然后选择命名空间，CAP会列出该命名空间下的所有Services，点击 *切换* 按钮后Dashboard将检测该节点的CAP服务是否可用，如果可用则会代理到切换的节点进行数据查看。

以下是一个配置示例

```csharp
services.AddCap(x =>
{
    // ...
    x.UseDashboard();
    x.UseK8sDiscovery();
});
```

组件将会自动检测是否处于集群内部，如果处于集群内部在需要赋予Pod Kubernetes Api 的权限。

## 独立使用 Dashboard

你可以独立使用 Dashboard 而不需要配置CAP，此时相当于Dashboard可作为单独的Pod部署到Kubernetes集群中仅用作查看数据，待查看的服务不再需要配置 `cap.UseK8sDiscovery()` 配置项。

```csharp
services.AddCapDashboardStandalone();
```

同样，你需要为此Pod配置 ServiceAccount 的访问权限。