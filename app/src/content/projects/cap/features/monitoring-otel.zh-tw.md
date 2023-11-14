OpenTelemetry 是工具、api 和 sdk 的集合。 使用它來檢測、生成、收集和導出遙測數據(度量、日志和跟蹤)，以幫助您分析軟件的性能和行為。



## 集成

你可以在[這裏](https://opentelemetry.io/docs/instrumentation/net/getting-started/)找到關於如何在控制台應用或ASP.NET Core 中使用OpenTelemetry。 在這裏我們主要描述如何將CAP集成到OpenTelemetry中。

### 配置

安裝CAP的OpenTelemetry包到項目中。

```
dotnet add package DotNetCore.Cap.OpenTelemetry
```

OpenTelemetry 的跟蹤數據來自於[Diagnostics](https://cap.dotnetcore.xyz/user-guide/zh/monitoring/diagnostics/)發送的診斷數據，添加 CAP Instrumentation 到 OpenTelemetry的擴展配置中會進行自動收集。

```csharp
services.AddOpenTelemetryTracing((builder) => builder
    .AddAspNetCoreInstrumentation()
    .AddCapInstrumentation()    // <-- 添加這行
    .AddZipkinExporter()
);
```

以下是 CAP 的跟蹤數據在 Zipkin 中的一個示意圖：

![CAP with Zipkin](/articles/projects/cap/assets/opentelemetry.png)