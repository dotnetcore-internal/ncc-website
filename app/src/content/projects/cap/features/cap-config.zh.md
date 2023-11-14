默认情况下，你在向IoC容器中注册CAP服务的时候指定配置。

```
services.AddCap(config=> {
    // config.XXX 
});
```

其中 `services` 代表的是 `IServiceCollection` 接口对象，它位于 `Microsoft.Extensions.DependencyInjection` 下面。

如果你不想使用微软的 IoC 容器，那么你可以查看 [ASP.NET Core 这里的文档](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-2.2#default-service-container-replacement) 来了解如何替换默认的容器实现。

更多关于 CAP 配置的信息，请[阅读文档](https://cap.dotnetcore.xyz/user-guide/zh/cap/configuration/)。