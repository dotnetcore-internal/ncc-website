[內置大量常用任務](https://flubucore.dotnetcore.xyz/tasks/)，如運行測試、versioning、管理 ISS、創建部署包（deployment packages）、發布 NuGet 包、docker 任務、 sql tasks, git tasks, 執行 PowerShell 腳本等。



```csharp
context.CreateTarget("build")
   .AddTask(x => x.GitVersionTask())
   .AddTask(x => x.CompileSolutionTask("MySolution.sln").BuildConfiguration("Release");

context.CreateTarget("run.tests")
   .AddTask(x => x.XunitTaskByProjectName("MyProject").StopOnFail())
   .AddTask(x => x.NUnitTask(NunitCmdOptions.V3, "MyProject2").ExcludeCategory("Linux"))
   .AddCoreTask(x => x.CoverletTask("MyProject.dll"));
```

