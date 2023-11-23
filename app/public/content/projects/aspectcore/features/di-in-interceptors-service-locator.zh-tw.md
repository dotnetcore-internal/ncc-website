AspectCore 攔截器支持屬性注入，構造器注入和 ==服務定位器模式==。

使用服務定位器模式時，攔截器上下文`AspectContext`可以獲取當前 Scoped 的 `ServiceProvider`：

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