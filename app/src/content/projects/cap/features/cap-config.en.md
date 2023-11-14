By default, you can specify configuration when you register CAP services into the IoC container for ASP.NET Core project.

```
services.AddCap(config=> 
{
    // config.XXX 
});
```

`services` is `IServiceCollection` interface, which can be found in the `Microsoft.Extensions.DependencyInjection` package.

If you don't want to use Microsoft's IoC container, you can take a look at ASP.NET Core documentation [here](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-2.2#default-service-container-replacement) to learn how to replace the default container implementation.

For more information about CAP Configuration, please [read the documentation](https://cap.dotnetcore.xyz/user-guide/en/cap/configuration/).