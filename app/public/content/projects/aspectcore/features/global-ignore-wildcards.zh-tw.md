AspectCore 支持全局忽略配置，亦支持通配符：

```csharp
services.ConfigureDynamicProxy(config =>
{
    //App1命名空間下的Service不會被代理
    config.NonAspectPredicates.AddNamespace("App1");

    //最後一級為App1的命名空間下的Service不會被代理
    config.NonAspectPredicates.AddNamespace("*.App1");

    //ICustomService接口不會被代理
    config.NonAspectPredicates.AddService("ICustomService");

    //後綴為Service的接口和類不會被代理
    config.NonAspectPredicates.AddService("*Service");

    //命名為Query的方法不會被代理
    config.NonAspectPredicates.AddMethod("Query");

    //後綴為Query的方法不會被代理
    config.NonAspectPredicates.AddMethod("*Query");
});
```