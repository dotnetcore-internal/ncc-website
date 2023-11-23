AspectCore 拦截器支持属性注入，构造器注入和 ==服务定位器模式==。

使用服务定位器模式时，拦截器上下文`AspectContext`可以获取当前 Scoped 的 `ServiceProvider`：

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