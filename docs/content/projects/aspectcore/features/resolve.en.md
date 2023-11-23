AspectCore.DependencyInjection resolves services through IServiceResolver:

```csharp
// Create a service resolver
IServiceResolver serviceResolver = services.Build();

// Resolve a single service
ISampleService sampleService = serviceResolver.Resolve<ISampleService>();

// Resolve a single service and verify if it is null. If it is null, an exception is thrown.
ISampleService sampleServiceRequired = serviceResolver.ResolveRequired<ISampleService>();

// Resolve a collection of services. If no services are registered, it is an empty collection.
IEnumerable<ISampleService> sampleServices = serviceResolver.ResolveMany<ISampleService>();
```