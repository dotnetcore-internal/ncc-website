全局攔截器。使用`ConfigureDynamicProxy(Action<IAspectConfiguration>)`的重載方法，其中`IAspectConfiguration`提供`Interceptors`注冊全局攔截器:

```csharp
services.ConfigureDynamicProxy(config =>
{
    config.Interceptors.AddTyped<CustomInterceptorAttribute>();
});
```

