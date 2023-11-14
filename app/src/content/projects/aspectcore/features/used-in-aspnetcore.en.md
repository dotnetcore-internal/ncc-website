Install the `AspectCore.Extensions.DependencyInjection` NuGet package

```
    Install-Package AspectCore.Extensions.DependencyInjection -pre
```



Modify `ConfigureServices`:

```
public IServiceProvider ConfigureServices(IServiceCollection services)
{
    // Add your services...

    // Add services from IServiceCollection to the ServiceContainer container
    var container = services.ToServiceContainer();
    return container.Build();
}
```



With just two lines of code, you can use `AspectCore.Injector` instead of the default `DependencyInjection` in ASP.NET Core.