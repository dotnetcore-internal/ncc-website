[TOC]

## 安裝


  ```shell
  PM>   Install-Package AspectCore.Extensions.DependencyInjection
  ```

## 定義攔截器

在一般情況下可以使用抽象的 `AbstractInterceptorAttribute` 自定義特性類，它實現`IInterceptor` 接口。AspectCore默認實現了基於`Attribute`的攔截器配置。我們的自定義攔截器看起來像下面這樣:

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

## 定義服務

定義`ICustomService`接口和它的實現類`CustomService`:

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

## 注入

在`HomeController`中注入`ICustomService`:

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

## 在容器中注冊

注冊`ICustomService`，接著，在`ConfigureServices`中配置創建代理類型的容器:

  ```csharp
  public void ConfigureServices(IServiceCollection services)
  {
      services.AddTransient<ICustomService, CustomService>();
      services.AddMvc();
      services.ConfigureDynamicProxy();
  }
  ```

## 替換服務提供者工廠

最後於 `Program` 的 `CreateHostBuilder` 處加上 `UseServiceProviderFactory(new DynamicProxyServiceProviderFactory())`:

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