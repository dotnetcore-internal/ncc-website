CAP 原生提供了 Dashboard 供查看消息，利用 Dashboard 提供的功能可以很方便的查看和管理消息。

### 啟用 Dashboard

首先，你需要安裝Dashboard的 NuGet 包。

```
PM> Install-Package DotNetCore.CAP.Dashboard
```

然後，在配置中添加如下代碼：

```csharp
services.AddCap(x =>
{
    //...

    // Register Dashboard
    x.UseDashboard();
});
```

默認情況下，你可以訪問 `http://localhost:xxx/cap` 這個地址打開Dashboard。



更多信息請閱讀[文檔](https://cap.dotnetcore.xyz/user-guide/zh/monitoring/dashboard/)