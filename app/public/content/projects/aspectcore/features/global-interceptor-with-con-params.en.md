
Global interceptors with constructor parameters, add a parameterized constructor to `CustomInterceptorAttribute`:

```csharp
public class CustomInterceptorAttribute : AbstractInterceptorAttribute 
{
    private readonly string _name;
    public CustomInterceptorAttribute(string name)
    {
        _name = name;
    }
    public async override Task Invoke(AspectContext context, AspectDelegate next)
    {
        try
        {
            Console.WriteLine("Before service call");
            await next(context);
        }
        catch (Exception)
        {
            Console.WriteLine("Service threw an exception!");
            throw;
        }
        finally
        {
            Console.WriteLine("After service call");
        }
    }
}
```

Modify global interceptor registration:

```csharp
services.ConfigureDynamicProxy(config =>
{
    config.Interceptors.AddTyped<CustomInterceptorAttribute>(args: new object[] { "custom" });
});
```