AspectCore 拦截器支持 ==属性注入==，构造器注入和服务定位器模式。

在拦截器中拥有`public get and set`权限的属性标记`[AspectCore.DependencyInjection.FromServiceContextAttribute]`特性，即可自动注入该属性，如：

```csharp
public class CustomInterceptorAttribute : AbstractInterceptorAttribute 
{
    //ps : 只有使用 config.Interceptors.AddTyped<CustomInterceptorAttribute>(); 时，属性注入才生效， 
    //     不能使用以下这种方式 services.AddSingleton<CustomInterceptorAttribute>(); + services.ConfigureDynamicProxy(config => { config.Interceptors.AddServiced<CustomInterceptorAttribute>(); });
    [FromServiceContext]
    public ILogger<CustomInterceptorAttribute> Logger { get; set; }


    public override Task Invoke(AspectContext context, AspectDelegate next)
    {
        Logger.LogInformation("call interceptor");
        return next(context);
    }
}
```