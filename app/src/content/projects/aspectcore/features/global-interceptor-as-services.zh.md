在`ConfigureServices`中添加：

```
services.AddTransient<CustomInterceptorAttribute>(provider => new CustomInterceptorAttribute("custom"));
```



修改全局拦截器注册:

```csharp
services.ConfigureDynamicProxy(config =>
{
    // 加入已注册服务
    config.Interceptors.AddServiced<CustomInterceptorAttribute>();
});
```