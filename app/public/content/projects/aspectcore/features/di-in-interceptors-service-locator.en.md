AspectCore supports property injection, constructor injection, and ==service locator patterns== in interceptors.

When using the service locator pattern, the interceptor context `AspectContext` can obtain the current Scoped `ServiceProvider`:

```csharp
public class CustomInterceptorAttribute : AbstractInterceptorAttribute 
{
    public override Task Invoke(AspectContext context, AspectDelegate next)
    {
        var logger = context.ServiceProvider.GetService<ILogger<CustomInterceptorAttribute>>();
        logger.LogInformation("call interceptor");
        return next(context);
    }
}
```

