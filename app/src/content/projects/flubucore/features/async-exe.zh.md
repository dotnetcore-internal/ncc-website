[异步执行任务、目标依赖与自定义代码](https://flubucore.dotnetcore.xyz/buildscript-fundamentals#Async-execution)。

```
    context.CreateTarget("Run.Tests")
        .AddTaskAsync(x => x.NUnitTaskForNunitV3("TestProjectName1"))
        .AddTaskAsync(x => x.NUnitTaskForNunitV3("TestProjectName1"))
        .AddTaskAsync(x => x.NUnitTaskForNunitV3("TestProjectName3"));
```