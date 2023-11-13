以 ASP.NET Core MVC 項目為例：

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*",

  //agile_config
  "AgileConfig": {
    "appId": "app",
    "secret": "xxx",
    "nodes": "http://localhost:5000,http://localhost:5001"//多個節點使用逗號分隔,
    "name": "client_name",
    "tag": "tag1"
  }
}
```

在 `appsettings.json` 文件配置 AgileConfig 的配置信息：

```csharp
public static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
        .ConfigureAppConfiguration((context, config) =>
        {
            //default appsettings.json
            config.AddAgileConfig(arg => Console.WriteLine($"config changed , action:{arg.Action} key:{arg.Key}"));
        })
        .ConfigureWebHostDefaults(webBuilder =>
        {
            webBuilder.UseStartup<Startup>();
        });
```

或使用 `UseAgileConfig`：

```csharp
public static IHostBuilder CreateHostBuilder(string[] args) =>
       Host.CreateDefaultBuilder(args)
           .UseAgileConfig(e => Console.WriteLine($"configs {e.Action}"))
           .ConfigureWebHostDefaults(webBuilder =>
           {
               webBuilder.UseStartup<Startup>();
           });
```

根據環境變量讀取 `appsettings.{env}.json` 配置信息。

```csharp
public static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
        .ConfigureAppConfiguration((context, config) =>
        {
            var envName = context.HostingEnvironment.EnvironmentName;
            var configClient = new ConfigClient($"appsettings.{envName}.json");
            config.AddAgileConfig(configClient, arg => Console.WriteLine($"config changed , action:{arg.Action} key:{arg.Key}"));
        })
        .ConfigureWebHostDefaults(webBuilder =>
        {
            webBuilder.UseStartup<Startup>();
        });
```

注意：如果節點使用 nginx 反代的話，需要對 nginx 進行配置，使其支持 WebSocket 協議，不然客戶端跟節點的長連接沒法建立。