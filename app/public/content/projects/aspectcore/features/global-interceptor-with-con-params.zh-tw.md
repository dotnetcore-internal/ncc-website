帶構造器參數的全局攔截器，在`CustomInterceptorAttribute`中添加帶參數的構造器：

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

修改全局攔截器注冊:

```csharp
services.ConfigureDynamicProxy(config =>
{
    config.Interceptors.AddTyped<CustomInterceptorAttribute>(args: new object[] { "custom" });
});
```