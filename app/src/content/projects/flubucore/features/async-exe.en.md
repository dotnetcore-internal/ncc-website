[Asynchronous execution of tasks, target dependencies and custom code.](https://flubucore.dotnetcore.xyz/buildscript-fundamentals#Async-execution)

```
    context.CreateTarget("Run.Tests")
        .AddTaskAsync(x => x.NUnitTaskForNunitV3("TestProjectName1"))
        .AddTaskAsync(x => x.NUnitTaskForNunitV3("TestProjectName1"))
        .AddTaskAsync(x => x.NUnitTaskForNunitV3("TestProjectName3"));
```