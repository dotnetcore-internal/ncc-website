[Large number of often used built-in tasks](https://flubucore.dotnetcore.xyz/tasks/) like e.g. versioning, running tests, creating deployment packages, publishing NuGet packages, docker tasks, git tasts, sql tasks, npm tasks, executing PowerShell, managing IIS scripts and many more.

```csharp
context.CreateTarget("build")
   .AddTask(x => x.GitVersionTask())
   .AddTask(x => x.CompileSolutionTask("MySolution.sln").BuildConfiguration("Release");

context.CreateTarget("run.tests")
   .AddTask(x => x.XunitTaskByProjectName("MyProject").StopOnFail())
   .AddTask(x => x.NUnitTask(NunitCmdOptions.V3, "MyProject2").ExcludeCategory("Linux"))
   .AddCoreTask(x => x.CoverletTask("MyProject.dll"));
```



