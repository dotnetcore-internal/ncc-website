安装 `AspectCore.Extensions.DependencyInjection` NuGet包

```
    Install-Package AspectCore.Extensions.DependencyInjection -pre
```



在修改 `ConfigureServices`：

```
public IServiceProvider ConfigureServices(IServiceCollection services)
{
    //添加你的服务...

    //将IServiceCollection的服务添加到ServiceContainer容器中
    var container = services.ToServiceContainer();
    return container.Build();
}
```



只需要两行代码即可在 ASP.NET Core 中使用 `AspectCore.Injector` 替换默认的 `DependencyInjection`。