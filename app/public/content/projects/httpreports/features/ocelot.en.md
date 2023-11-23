```csharp
public void ConfigureServices(IServiceCollection services)
{
     services.AddHttpReports().AddHttpTransport();
     services.AddOcelot(appSettings, configuration);
}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
     app.UseHttpReports();
     app.UseOcelot().Wait();
}
```