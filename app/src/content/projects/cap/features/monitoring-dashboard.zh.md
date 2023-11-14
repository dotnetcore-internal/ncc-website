CAP 原生提供了 Dashboard 供查看消息，利用 Dashboard 提供的功能可以很方便的查看和管理消息。

### 启用 Dashboard

首先，你需要安装Dashboard的 NuGet 包。

```
PM> Install-Package DotNetCore.CAP.Dashboard
```

然后，在配置中添加如下代码：

```csharp
services.AddCap(x =>
{
    //...

    // Register Dashboard
    x.UseDashboard();
});
```

默认情况下，你可以访问 `http://localhost:xxx/cap` 这个地址打开Dashboard。



更多信息请阅读[文档](https://cap.dotnetcore.xyz/user-guide/zh/monitoring/dashboard/)