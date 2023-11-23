AspectCore 攔截器支持 ==屬性注入==，構造器注入和服務定位器模式。

在攔截器中擁有`public get and set`權限的屬性標記`[AspectCore.DependencyInjection.FromServiceContextAttribute]`特性，即可自動注入該屬性，如：

```csharp
public class CustomInterceptorAttribute : AbstractInterceptorAttribute 
{
    //ps : 只有使用 config.Interceptors.AddTyped<CustomInterceptorAttribute>(); 時，屬性注入才生效， 
    //     不能使用以下這種方式 services.AddSingleton<CustomInterceptorAttribute>(); + services.ConfigureDynamicProxy(config => { config.Interceptors.AddServiced<CustomInterceptorAttribute>(); });
    [FromServiceContext]
    public ILogger<CustomInterceptorAttribute> Logger { get; set; }


    public override Task Invoke(AspectContext context, AspectDelegate next)
    {
        Logger.LogInformation("call interceptor");
        return next(context);
    }
}
```