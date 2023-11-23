本地项目引用  **HttpReports.Transport.Grpc**

```csharp
 services.AddHttpReports().AddGrpcTransport();
```

Dashboard 项目引用 **HttpReports.Collector.Grpc**

endpoint 添加 grpc 服务的映射 `endpoints.MapGrpcCollector();`

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



注意：Dashboard 需要配置 https，否则数据会上报失败。