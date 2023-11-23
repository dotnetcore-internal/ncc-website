AspectCore supports property injection, ==constructor injection==, and service locator patterns in interceptors.

Constructor injection requires the interceptor to be a `Service`. In addition to global interceptors, `ServiceInterceptor` can still be used to activate the interceptor from DI:

```csharp
public class CustomInterceptorAttribute : AbstractInterceptorAttribute 
{
    private readonly ILogger<CustomInterceptor> ctorlogger;

    // ps: When the global configuration config.Interceptors.AddTyped<CustomInterceptorAttribute>(); is used, constructor injection cannot be automatically injected and needs to be handled manually.
    // Only when services.AddSingleton<CustomInterceptorAttribute>(); + services.ConfigureDynamicProxy(config => { config.Interceptors.AddServiced<CustomInterceptorAttribute>(); }); is used, will it be automatically injected
    public CustomInterceptor(ILogger<CustomInterceptor> ctorlogger)
    {
        this.ctorlogger = ctorlogger;
    }
}
```