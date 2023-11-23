[TOC]

Learn how to build a microservices event bus architecture using CAP, which offers advantages over direct integration of message queues, and what out-of-the-box features it provides.

## Installation

```shell
PM> Install-Package DotNetCore.CAP
```

## Integrated in Asp.Net Core

For quick start, we use memory-based event storage and message transport.

```shell
PM> Install-Package DotNetCore.CAP.InMemoryStorage
PM> Install-Package Savorboard.CAP.InMemoryMessageQueue
```

In `Startup.cs` ，add the following configuration:

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

## Publish Message

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

### Publish delay message

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

### Publish with extra header

```csharp
var header = new Dictionary<string, string>()
{
    ["my.header.first"] = "first",
    ["my.header.second"] = "second"
};

capBus.Publish("test.show.time", DateTime.Now, header);
```

## Process Message

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

### Process with extra header

```csharp
[CapSubscribe("test.show.time")]
public void ReceiveMessage(DateTime time, [FromCap]CapHeader header)
{
    Console.WriteLine("message time is:" + time);
    Console.WriteLine("message firset header :" + header["my.header.first"]);
    Console.WriteLine("message second header :" + header["my.header.second"]);
}
```

## Summary

One of the most powerful advantages of asynchronous messaging over direct integrated message queues is reliability, where failures in one part of the system do not propagate or cause the entire system to crash. Messages are stored inside the CAP to ensure the reliability of the message, and strategies such as retry are used to achieve the final consistency of data between services.

