AgileConfig supports the standard `IConfiguration` and `IOptions` patterns for reading configurations in ASP.NET Core.

```csharp
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly IConfiguration _IConfiguration;
    private readonly IOptions<DbConfigOptions> _dbOptions;

    public HomeController(ILogger<HomeController> logger, IConfiguration configuration, IOptions<DbConfigOptions> dbOptions)
    {
        _logger = logger;
        _IConfiguration = configuration;
        _dbOptions = dbOptions;
    }

    public IActionResult Index()
    {
        return View();
    }

    /// <summary>
    /// 使用 IConfiguration 读取配置
    /// </summary>
    /// <returns></returns>
    public IActionResult ByIConfiguration()
    {
        var userId = _IConfiguration["userId"];
        var dbConn = _IConfiguration["db:connection"];

        ViewBag.userId = userId;
        ViewBag.dbConn = dbConn;

        return View();
    }

    /// <summary>
    /// 使用 Options 模式读取配置
    /// </summary>
    /// <returns></returns>
    public IActionResult ByOptions()
    {
        var dbConn = _dbOptions.Value.connection;
        ViewBag.dbConn = dbConn;

        return View("ByOptions");
    }
}
```

In the `Startup` class, use `AddAgileConfig` to configure injection:

```csharp
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddAgileConfig();
    }
}
```

You can obtain the instance through `IConfigClient` in other places:

```csharp
public class HomeController : Controller
{
    private readonly IConfigClient _configClient;

    public HomeController(IConfigClient configClient)
    {
        _configClient = configClient;
    }

    public IActionResult Index()
    {
        return View();
    }

    /// <summary>
    /// 使用 IConfigClient 读取配置
    /// </summary>
    /// <returns></returns>
    public IActionResult ByIConfigClient()
    {
        var userId = _configClient["userId"];
        var dbConn = _configClient["db:connection"];

        foreach (var item in _configClient.Data)
        {
            Console.WriteLine($"{item.Key} = {item.Value}");
        }

        ViewBag.userId = userId;
        ViewBag.dbConn = dbConn;

        return View();
    }
}
```