AspectCore supports global ignoring configurations and wildcards:

```csharp
services.ConfigureDynamicProxy(config =>
{
    //Services in the App1 namespace will not be proxied.
    config.NonAspectPredicates.AddNamespace("App1");

    //Services in namespaces ending with App1 will not be proxied.
    config.NonAspectPredicates.AddNamespace("*.App1");

    //The ICustomService interface will not be proxied.
    config.NonAspectPredicates.AddService("ICustomService");

    //Interfaces and classes ending with Service will not be proxied.
    config.NonAspectPredicates.AddService("*Service");

    //Methods named Query will not be proxied.
    config.NonAspectPredicates.AddMethod("Query");

    //Methods ending with Query will not be proxied.
    config.NonAspectPredicates.AddMethod("*Query");
});
```