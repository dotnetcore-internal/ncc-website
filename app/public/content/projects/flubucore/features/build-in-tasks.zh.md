[内置大量常用任务](https://flubucore.dotnetcore.xyz/tasks/)，如运行测试、versioning、管理 ISS、创建部署包（deployment packages）、发布 NuGet 包、docker 任务、 sql tasks, git tasks, 执行 PowerShell 脚本等。



```csharp
context.CreateTarget("build")
   .AddTask(x => x.GitVersionTask())
   .AddTask(x => x.CompileSolutionTask("MySolution.sln").BuildConfiguration("Release");

context.CreateTarget("run.tests")
   .AddTask(x => x.XunitTaskByProjectName("MyProject").StopOnFail())
   .AddTask(x => x.NUnitTask(NunitCmdOptions.V3, "MyProject2").ExcludeCategory("Linux"))
   .AddCoreTask(x => x.CoverletTask("MyProject.dll"));
```

