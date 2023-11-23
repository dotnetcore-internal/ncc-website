在 AspectCore.Injector 中默認開啟在 AspectCore.DynamicProxy 的 Aop 集成，並可通過 IServiceContainer 的 Configure 方法進行 Aop 的配置。

```
services.Configure(config =>
{
    config.Interceptors.AddTyped<SampleInterceptor>();
});
```