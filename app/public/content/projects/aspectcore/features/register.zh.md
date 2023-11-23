在 AspectCore.Injector 中容器命名为 `IServiceContext`，使用容器的默认实现来创建一个容器，并且提供了类型，实例，和工厂三种方式来注册服务：

```csharp
IServiceContext services = new ServiceContext();

//使用类型注册服务
services.AddType<ILogger, Logger>();

//使用实例注册服务，服务的生命周期限定为单例
services.AddInstance<ITaskService>(new TaskService());

//使用委托工厂注册服务
services.AddDelegate<ITaskService, TaskService>(resolver => new TaskService());
```