[通过控制台程序为任务添加额外配置项（additional options），或对现有的配置项进行重写（override）](https://flubucore.dotnetcore.xyz/override-add-options/)

```
已复制context.CreateTarget("Example")`
   .AddCoreTask(x => x.Build("MySolution.sln").Configuration("Release");
flubu example --configuration=Debug
```

flubu 将执行 `dotnet build MySolution.sln --configuration Debug`