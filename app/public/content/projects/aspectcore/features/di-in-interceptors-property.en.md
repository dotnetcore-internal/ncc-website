AspectCore supports ==property injection==, constructor injection, and service locator patterns in interceptors.

In an interceptor, any property with `public get and set` access can be automatically injected by marking it with the `[AspectCore.DependencyInjection.FromServiceContextAttribute]` attribute, as shown in the example below:

```csharp
public class CustomInterceptorAttribute : AbstractInterceptorAttribute 
{
    //ps: Property injection only works when using config.Interceptors.AddTyped<CustomInterceptorAttribute>();, 
    //    and it does not work with services.AddSingleton<CustomInterceptorAttribute>(); + services.ConfigureDynamicProxy(config => { config.Interceptors.AddServiced<CustomInterceptorAttribute>(); });
    [FromServiceContext]
    public ILogger<CustomInterceptorAttribute> Logger { get; set; }


    public override Task Invoke(AspectContext context, AspectDelegate next)
    {
        Logger.LogInformation("call interceptor");
        return next(context);
    }
}
```