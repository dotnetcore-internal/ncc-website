安裝 `AspectCore.Extensions.DependencyInjection` NuGet包

```
    Install-Package AspectCore.Extensions.DependencyInjection -pre
```



在修改 `ConfigureServices`：

```
public IServiceProvider ConfigureServices(IServiceCollection services)
{
    //添加你的服務...

    //將IServiceCollection的服務添加到ServiceContainer容器中
    var container = services.ToServiceContainer();
    return container.Build();
}
```



只需要兩行代碼即可在 ASP.NET Core 中使用 `AspectCore.Injector` 替換默認的 `DependencyInjection`。