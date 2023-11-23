[TOC]

## Installation


  ```shell
  PM>   Install-Package AspectCore.Extensions.DependencyInjection
  ```

## Define Interceptor

In general, you can use the abstract `AbstractInterceptorAttribute` to customize an attribute class, which implements the `IInterceptor` interface. AspectCore implements the interceptor configuration based on `Attribute` by default. Our custom interceptor looks like this:

  ```csharp
  public class CustomInterceptorAttribute : AbstractInterceptorAttribute 
  {
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

## Define Services

Define the `ICustomService` interface and its implementation class `CustomService`:

  ```csharp
  public interface ICustomService
  {
      [CustomInterceptor]
      void Call();
  }
  
  public class CustomService : ICustomService
  {
      public void Call()
      {
          Console.WriteLine("service calling...");
      }
  }
  ```

## Injection

Inject `ICustomService` into `HomeController`:

  ```csharp
  public class HomeController : Controller
  {
      private readonly ICustomService _service;
      public HomeController(ICustomService service)
      {
          _service = service;
      }
  
      public IActionResult Index()
      {
          _service.Call();
          return View();
      }
  }
  ```

## Register into Container

Register `ICustomService`, and then configure the container to create a proxy class type in `ConfigureServices`:

  ```csharp
  public void ConfigureServices(IServiceCollection services)
  {
      services.AddTransient<ICustomService, CustomService>();
      services.AddMvc();
      services.ConfigureDynamicProxy();
  }
  ```

## Replace the Service Provider Factory

Finally, add `UseServiceProviderFactory(new DynamicProxyServiceProviderFactory())` in the `CreateHostBuilder` of `Program`:

  ```csharp
  public static IHostBuilder CreateHostBuilder(string[] args) =>
          Host.CreateDefaultBuilder(args)
              .ConfigureWebHostDefaults(webBuilder =>
              {
                  webBuilder.UseStartup<Startup>();
              })
              // 略
              .UseServiceProviderFactory(new DynamicProxyServiceProviderFactory());
  ```