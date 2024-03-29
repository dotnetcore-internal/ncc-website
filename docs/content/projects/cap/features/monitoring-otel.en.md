OpenTelemetry is a collection of tools, APIs, and SDKs. Use it to instrument, generate, collect, and export telemetry data (metrics, logs, and traces) to help you analyze your software’s performance and behavior.

## Integration

You can find it [here](https://opentelemetry.io/docs/instrumentation/net/getting-started/) about how to use OpenTelemetry in console applications or ASP.NET Core, at here we mainly describe how to tracing CAP data to OpenTelemetry.

### Configuration

Install the CAP OpenTelemetry package into the project.

```
dotnet add package DotNetCore.Cap.OpenTelemetry
```

The OpenTelemetry data comes from [diagnostics](https://cap.dotnetcore.xyz/user-guide/en/monitoring/diagnostics/), add the instrumentation of CAP to the configuration of OpenTelemetry.

```csharp
services.AddOpenTelemetryTracing((builder) => builder
    .AddAspNetCoreInstrumentation()
    .AddCapInstrumentation()    // <-- Add this line
    .AddZipkinExporter()
);
```

Here is a diagram of CAP's tracking data in Zipkin:

![CAP with Zipkin](/content/projects/cap/assets/opentelemetry.png)