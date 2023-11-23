Global interceptors. Use the overloaded method of `ConfigureDynamicProxy(Action<IAspectConfiguration>)`, where `IAspectConfiguration` provides `Interceptors` to register global interceptors:

```csharp
services.ConfigureDynamicProxy(config =>
{
    config.Interceptors.AddTyped<CustomInterceptorAttribute>();
});
```
