作用于特定`Service`或`Method`的全局拦截器，下面的代码演示了作用于带有`Service`后缀的类的全局拦截器：

```csharp
services.ConfigureDynamicProxy(config =>
{
    config.Interceptors.AddTyped<CustomInterceptorAttribute>(method => method.Name.EndsWith("MethodName"));
});
```



使用通配符的特定全局拦截器：

```csharp
services.ConfigureDynamicProxy(config =>
{
    config.Interceptors.AddTyped<CustomInterceptorAttribute>(Predicates.ForService("*Service"));
});
```