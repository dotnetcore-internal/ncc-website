作用於特定`Service`或`Method`的全局攔截器，下面的代碼演示了作用於帶有`Service`後綴的類的全局攔截器：

```csharp
services.ConfigureDynamicProxy(config =>
{
    config.Interceptors.AddTyped<CustomInterceptorAttribute>(method => method.Name.EndsWith("MethodName"));
});
```



使用通配符的特定全局攔截器：

```csharp
services.ConfigureDynamicProxy(config =>
{
    config.Interceptors.AddTyped<CustomInterceptorAttribute>(Predicates.ForService("*Service"));
});
```