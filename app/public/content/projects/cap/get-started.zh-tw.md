[TOC]

了解如何使用 CAP 構建微服務事件總線架構，它比直接集成消息隊列提供了哪些優勢，它提供了哪些開箱即用的功能。

## 安裝

```shell
PM> Install-Package DotNetCore.CAP
```

## 在 Asp.Net Core 中集成

以便於快速啟動，我們使用基於內存的事件存儲和消息隊列。

```shell
PM> Install-Package DotNetCore.CAP.InMemoryStorage
PM> Install-Package Savorboard.CAP.InMemoryMessageQueue
```

在 `Startup.cs` 中，添加以下配置：

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddCap(x =>
    {
        x.UseInMemoryStorage();
        x.UseInMemoryMessageQueue();
    });
}
```

## 發送消息

```csharp
public class PublishController : Controller
{
    [Route("~/send")]
    public IActionResult SendMessage([FromServices]ICapPublisher capBus)
    {
        capBus.Publish("test.show.time", DateTime.Now);

        return Ok();
    }
}
```

### 發送延遲消息

```csharp
public class PublishController : Controller
{
    [Route("~/send/delay")]
    public IActionResult SendDelayMessage([FromServices]ICapPublisher capBus)
    {
        capBus.PublishDelay(TimeSpan.FromSeconds(100),"test.show.time", DateTime.Now);

        return Ok();
    }
}
```

### 發送包含頭信息的消息

```csharp
var header = new Dictionary<string, string>()
{
    ["my.header.first"] = "first",
    ["my.header.second"] = "second"
};

capBus.Publish("test.show.time", DateTime.Now, header);
```

## 處理消息

```csharp
public class ConsumerController : Controller
{
    [NonAction]
    [CapSubscribe("test.show.time")]
    public void ReceiveMessage(DateTime time)
    {
        Console.WriteLine("message time is:" + time);
    }
}
```

### 處理包含頭信息的消息

```csharp
[CapSubscribe("test.show.time")]
public void ReceiveMessage(DateTime time, [FromCap]CapHeader header)
{
    Console.WriteLine("message time is:" + time);
    Console.WriteLine("message firset header :" + header["my.header.first"]);
    Console.WriteLine("message second header :" + header["my.header.second"]);
}
```

## 摘要

相對於直接集成消息隊列，異步消息傳遞最強大的優勢之一是可靠性，系統的一個部分中的故障不會傳播，也不會導致整個系統崩潰。 在 CAP 內部會將消息進行存儲，以保證消息的可靠性，並配合重試等策略以達到各個服務之間的數據最終一致性。

