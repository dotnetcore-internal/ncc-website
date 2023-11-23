带构造器参数的全局拦截器，在`CustomInterceptorAttribute`中添加带参数的构造器：

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

修改全局拦截器注册:

```csharp
services.ConfigureDynamicProxy(config =>
{
    config.Interceptors.AddTyped<CustomInterceptorAttribute>(args: new object[] { "custom" });
});
```