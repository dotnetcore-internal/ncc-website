[異步執行任務、目標依賴與自定義代碼](https://flubucore.dotnetcore.xyz/buildscript-fundamentals#Async-execution)。

```
    context.CreateTarget("Run.Tests")
        .AddTaskAsync(x => x.NUnitTaskForNunitV3("TestProjectName1"))
        .AddTaskAsync(x => x.NUnitTaskForNunitV3("TestProjectName1"))
        .AddTaskAsync(x => x.NUnitTaskForNunitV3("TestProjectName3"));
```