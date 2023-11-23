Global interceptors that act on a specific `Service` or `Method`. The following code demonstrates a global interceptor that acts on classes with the `Service` suffix:

```csharp
services.ConfigureDynamicProxy(config =>
{
    config.Interceptors.AddTyped<CustomInterceptorAttribute>(method => method.Name.EndsWith("MethodName"));
});
```



Specific global interceptors using wildcards:

```csharp
services.ConfigureDynamicProxy(config =>
{
    config.Interceptors.AddTyped<CustomInterceptorAttribute>(Predicates.ForService("*Service"));
});
```