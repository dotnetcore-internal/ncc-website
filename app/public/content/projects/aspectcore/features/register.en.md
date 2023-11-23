In AspectCore.Injector, the container is named `IServiceContext`. The default implementation of the container is used to create a container, and three ways are provided to register services: type, instance, and factory:

```csharp
IServiceContext services = new ServiceContext();

// Register services by type
services.AddType<ILogger, Logger>();

// Register services by instance, with the service lifetime limited to singleton
services.AddInstance<ITaskService>(new TaskService());

// Register services by delegate factory
services.AddDelegate<ITaskService, TaskService>(resolver => new TaskService());
```