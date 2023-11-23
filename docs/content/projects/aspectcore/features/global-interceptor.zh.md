全局拦截器。使用`ConfigureDynamicProxy(Action<IAspectConfiguration>)`的重载方法，其中`IAspectConfiguration`提供`Interceptors`注册全局拦截器:

```csharp
services.ConfigureDynamicProxy(config =>
{
    config.Interceptors.AddTyped<CustomInterceptorAttribute>();
});
```

