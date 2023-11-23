# Quick Start

## Installation

```shell
Install-Package CanalSharp
```

## Initialization log

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

CanalSharp uses **Microsoft.Extensions.Logging.Abstractions** because currently mainstream logging components, such as: nlog, serilog, etc., all support this logging abstraction interface, which means you can use them by installing the adapters of nlog, serilog, etc., whether it is Console App or Web App.

## Create a connection

```csharp
var conn=new SimpleCanalConnection(new SimpleCanalOptions("127.0.0.1",11111,1234),logger);
//Connect to Canal Server
await conn.ConnectAsync();
//subscribe
await conn.SubscribeAsync();
```

## Getting data

```csharp
var msg = await conn.GetAsync(1024);
```

Demo: [SimpleApp](https://github.com/dotnetcore/CanalSharp/blob/main/sample/CanalSharp.SimpleApp)