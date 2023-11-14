Add the following in `ConfigureServices`:

```
services.AddTransient<CustomInterceptorAttribute>(provider => new CustomInterceptorAttribute("custom"));
```



Modify global interceptor registration:

```csharp
services.ConfigureDynamicProxy(config =>
{
    // Add registered services
    config.Interceptors.AddServiced<CustomInterceptorAttribute>();
});
```