AspectCore 拦截器支持属性注入，==构造器注入== 和服务定位器模式。

构造器注入需要使拦截器作为`Service`，除全局拦截器外，仍可使用`ServiceInterceptor`使拦截器从DI中激活：

```csharp
public class CustomInterceptorAttribute : AbstractInterceptorAttribute 
{
    private readonly ILogger<CustomInterceptor> ctorlogger;

    // ps : 当全局配置 config.Interceptors.AddTyped<CustomInterceptorAttribute>(); 时，构造器注入无法自动注入，需要手动处理
    //      只有使用 services.AddSingleton<CustomInterceptorAttribute>(); + services.ConfigureDynamicProxy(config => { config.Interceptors.AddServiced<CustomInterceptorAttribute>(); }); 才会自动注入
    public CustomInterceptor(ILogger<CustomInterceptor> ctorlogger)
    {
        this.ctorlogger = ctorlogger;
    }
}
```