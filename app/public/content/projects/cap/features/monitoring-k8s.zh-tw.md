[Kubernetes](https://kubernetes.io/)，也稱為 K8s，是一個開源系統，用於自動部署、擴展和管理容器化應用程序。

## Dashboard 中的 Kubernetes

我們的 Dashboard 從 7.2.0 版本開始支持 Kubernetes 作為服務發現。你可以切換到Node節點頁面，然後選擇命名空間，CAP會列出該命名空間下的所有Services，點擊 *切換* 按鈕後Dashboard將檢測該節點的CAP服務是否可用，如果可用則會代理到切換的節點進行數據查看。

以下是一個配置示例

```csharp
services.AddCap(x =>
{
    // ...
    x.UseDashboard();
    x.UseK8sDiscovery();
});
```

組件將會自動檢測是否處於集群內部，如果處於集群內部在需要賦予Pod Kubernetes Api 的權限。

## 獨立使用 Dashboard

你可以獨立使用 Dashboard 而不需要配置CAP，此時相當於Dashboard可作為單獨的Pod部署到Kubernetes集群中僅用作查看數據，待查看的服務不再需要配置 `cap.UseK8sDiscovery()` 配置項。

```csharp
services.AddCapDashboardStandalone();
```

同樣，你需要為此Pod配置 ServiceAccount 的訪問權限。