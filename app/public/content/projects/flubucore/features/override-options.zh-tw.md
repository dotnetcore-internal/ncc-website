[通過控制台程序為任務添加額外配置項（additional options），或對現有的配置項進行重寫（override）](https://flubucore.dotnetcore.xyz/override-add-options/)

```
已複制context.CreateTarget("Example")`
   .AddCoreTask(x => x.Build("MySolution.sln").Configuration("Release");
flubu example --configuration=Debug
```

flubu 將執行 `dotnet build MySolution.sln --configuration Debug`