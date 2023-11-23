OpenTelemetry 是工具、api 和 sdk 的集合。 使用它来检测、生成、收集和导出遥测数据(度量、日志和跟踪)，以帮助您分析软件的性能和行为。



## 集成

你可以在[这里](https://opentelemetry.io/docs/instrumentation/net/getting-started/)找到关于如何在控制台应用或ASP.NET Core 中使用OpenTelemetry。 在这里我们主要描述如何将CAP集成到OpenTelemetry中。

### 配置

安装CAP的OpenTelemetry包到项目中。

```
dotnet add package DotNetCore.Cap.OpenTelemetry
```

OpenTelemetry 的跟踪数据来自于[Diagnostics](https://cap.dotnetcore.xyz/user-guide/zh/monitoring/diagnostics/)发送的诊断数据，添加 CAP Instrumentation 到 OpenTelemetry的扩展配置中会进行自动收集。

```csharp
services.AddOpenTelemetryTracing((builder) => builder
    .AddAspNetCoreInstrumentation()
    .AddCapInstrumentation()    // <-- 添加这行
    .AddZipkinExporter()
);
```

以下是 CAP 的跟踪数据在 Zipkin 中的一个示意图：

![CAP with Zipkin](/content/projects/cap/assets/opentelemetry.png)