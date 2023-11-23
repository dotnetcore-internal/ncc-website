默認情況下，你在向IoC容器中注冊CAP服務的時候指定配置。

```
services.AddCap(config=> {
    // config.XXX 
});
```

其中 `services` 代表的是 `IServiceCollection` 接口對象，它位於 `Microsoft.Extensions.DependencyInjection` 下面。

如果你不想使用微軟的 IoC 容器，那麼你可以查看 [ASP.NET Core 這裏的文檔](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-2.2#default-service-container-replacement) 來了解如何替換默認的容器實現。

更多關於 CAP 配置的信息，請[閱讀文檔](https://cap.dotnetcore.xyz/user-guide/zh/cap/configuration/)。