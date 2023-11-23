AspectCore.DependencyInjection通過IServiceResolver來解析服務：

```csharp
//創建服務解析器
IServiceResolver serviceResolver = services.Build();

//解析單個服務
ISampleService sampleService = serviceResolver.Resolve<ISampleService>();

//解析單個服務，並且驗證是否為null，為null則拋出異常
ISampleService sampleServiceRequired = serviceResolver.ResolveRequired<ISampleService>();

//解析服務集合，如果未注冊，則為空集合
IEnumerable<ISampleService> sampleServices = serviceResolver.ResolveMany<ISampleService>();
```