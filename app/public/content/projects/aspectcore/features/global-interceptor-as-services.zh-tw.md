在`ConfigureServices`中添加：

```
services.AddTransient<CustomInterceptorAttribute>(provider => new CustomInterceptorAttribute("custom"));
```



修改全局攔截器注冊:

```csharp
services.ConfigureDynamicProxy(config =>
{
    // 加入已注冊服務
    config.Interceptors.AddServiced<CustomInterceptorAttribute>();
});
```