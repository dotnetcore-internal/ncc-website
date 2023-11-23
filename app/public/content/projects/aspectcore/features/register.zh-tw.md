在 AspectCore.Injector 中容器命名為 `IServiceContext`，使用容器的默認實現來創建一個容器，並且提供了類型，實例，和工廠三種方式來注冊服務：

```csharp
IServiceContext services = new ServiceContext();

//使用類型注冊服務
services.AddType<ILogger, Logger>();

//使用實例注冊服務，服務的生命周期限定為單例
services.AddInstance<ITaskService>(new TaskService());

//使用委托工廠注冊服務
services.AddDelegate<ITaskService, TaskService>(resolver => new TaskService());
```