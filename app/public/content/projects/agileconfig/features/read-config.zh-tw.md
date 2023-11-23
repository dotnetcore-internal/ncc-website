AgileConfig 支持 ASP.NET Core 標准的 `IConfiguration` 跟 `IOptions` 模式讀取配置。

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
    /// 使用IConfiguration讀取配置
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
    /// 使用Options模式讀取配置
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

在 `Startup` 內使用 `AddAgileConfig` 配置注入

```csharp
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddAgileConfig();
    }
}
```

在其他地方就可以通過 `IConfigClient` 來獲取這個實例：

```csharp
public class HomeController : Controller
{
    private readonly IConfigClient _configClient

    public HomeController(IConfigClient configClient)
    {
        _configClient = configClient;
    }

    public IActionResult Index()
    {
        return View();
    }

    /// <summary>
    /// 使用IConfigClient讀取配置
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