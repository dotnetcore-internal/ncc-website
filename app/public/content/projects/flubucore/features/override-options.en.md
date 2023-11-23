[Override existing options or add additional options to tasks through console](https://flubucore.dotnetcore.xyz/override-add-options/)

```
context.CreateTarget("Example")`
   .AddCoreTask(x => x.Build("MySolution.sln").Configuration("Release");
```

```shell
flubu example --configuration=Debug
```



flubu would execute `dotnet build MySolution.sln --configuration Debug`