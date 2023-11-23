Local project reference **HttpReports.Transport.Grpc**

```csharp
services.AddHttpReports().AddGrpcTransport();
```

Dashboard project reference **HttpReports.Collector.Grpc**

endpoint adds mapping of grpc service `endpoints.MapGrpcCollector();`

```csharp
services.AddHttpReportsDashboard().AddGrpcCollector().AddMySqlStorage(); 
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{  
    app.UseHttpReportsDashboard();  

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapGrpcCollector();
        endpoints.MapControllers(); 
    });
}
```

Note: Dashboard requires https configuration, otherwise the data reporting will fail.