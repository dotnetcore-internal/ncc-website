# 快速入門

## 安裝

```shell
Install-Package CanalSharp
```

## 初始化日志

```csharp
var loggerFactory = LoggerFactory.Create(builder =>
{
    builder
        .AddFilter("Microsoft", LogLevel.Debug)
        .AddFilter("System", LogLevel.Information)
        .AddConsole();
});
var logger= loggerFactory.CreateLogger<SimpleCanalConnection>();
```

CanalSharp 使用 **Microsoft.Extensions.Logging.Abstractions** ，因為目前主流日志組件，如：nlog、serilog 等，全部支持此日志抽象接入，也就是說你可以通過安裝 nlog、serilog 對其的適配，來使用它們，無論是 Console App 或則是 Web App。

## 創建連接

```csharp
var conn=new SimpleCanalConnection(new SimpleCanalOptions("127.0.0.1",11111,1234),logger);
//連接到 Canal Server
await conn.ConnectAsync();
//訂閱
await conn.SubscribeAsync();
```

## 獲取數據

```csharp
var msg = await conn.GetAsync(1024);
```

Demo: [SimpleApp](https://github.com/dotnetcore/CanalSharp/blob/main/sample/CanalSharp.SimpleApp)