在 AspectCore.Injector 中默认开启在 AspectCore.DynamicProxy 的 Aop 集成，并可通过 IServiceContainer 的 Configure 方法进行 Aop 的配置。

```
services.Configure(config =>
{
    config.Interceptors.AddTyped<SampleInterceptor>();
});
```