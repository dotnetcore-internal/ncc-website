AspectCore 攔截器支持屬性注入，==構造器注入== 和服務定位器模式。

構造器注入需要使攔截器作為`Service`，除全局攔截器外，仍可使用`ServiceInterceptor`使攔截器從DI中激活：

```csharp
public class CustomInterceptorAttribute : AbstractInterceptorAttribute 
{
    private readonly ILogger<CustomInterceptor> ctorlogger;

    // ps : 當全局配置 config.Interceptors.AddTyped<CustomInterceptorAttribute>(); 時，構造器注入無法自動注入，需要手動處理
    //      只有使用 services.AddSingleton<CustomInterceptorAttribute>(); + services.ConfigureDynamicProxy(config => { config.Interceptors.AddServiced<CustomInterceptorAttribute>(); }); 才會自動注入
    public CustomInterceptor(ILogger<CustomInterceptor> ctorlogger)
    {
        this.ctorlogger = ctorlogger;
    }
}
```