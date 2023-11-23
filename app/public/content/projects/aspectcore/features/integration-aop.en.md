By default, the AOP integration in AspectCore.DynamicProxy is enabled in AspectCore.Injector, and AOP can be configured through the Configure method of IServiceContainer.

```csharp
services.Configure(config =>
{
    config.Interceptors.AddTyped<SampleInterceptor>();
});
```