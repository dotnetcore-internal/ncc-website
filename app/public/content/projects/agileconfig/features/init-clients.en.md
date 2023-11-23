Using an ASP.NET Core MVC project as an example:

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
    "nodes": "http://localhost:5000,http://localhost:5001",//Multiple nodes are separated by commas,
    "name": "client_name",
    "tag": "tag1"
  }
}
```

Configure AgileConfig in the `appsettings.json` file:

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

Or use `UseAgileConfig`:

```csharp
public static IHostBuilder CreateHostBuilder(string[] args) =>
       Host.CreateDefaultBuilder(args)
           .UseAgileConfig(e => Console.WriteLine($"configs {e.Action}"))
           .ConfigureWebHostDefaults(webBuilder =>
           {
               webBuilder.UseStartup<Startup>();
           });
```

Read `appsettings.{env}.json` configuration information according to environment variables.

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

Note: If the node uses nginx for reverse proxy, nginx needs to be configured to support the WebSocket protocol, otherwise the client cannot establish a long connection with the node.