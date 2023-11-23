AspectCore.DependencyInjection通过IServiceResolver来解析服务：

```csharp
//创建服务解析器
IServiceResolver serviceResolver = services.Build();

//解析单个服务
ISampleService sampleService = serviceResolver.Resolve<ISampleService>();

//解析单个服务，并且验证是否为null，为null则抛出异常
ISampleService sampleServiceRequired = serviceResolver.ResolveRequired<ISampleService>();

//解析服务集合，如果未注册，则为空集合
IEnumerable<ISampleService> sampleServices = serviceResolver.ResolveMany<ISampleService>();
```