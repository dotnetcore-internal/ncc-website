[Easily run any external program or console command in your script.](https://flubucore.dotnetcore.xyz/buildscript-fundamentals#Run-any-program)



```csharp
 public class SimpleScript : DefaultBuildScript
 {
    protected override void ConfigureTargets(ITaskContext context)
    {
        context.CreateTarget("Run.Libz")
        .AddTask(x => x.RunProgramTask(@"packages\LibZ.Tool\1.2.0\tools\libz.exe")
            .WorkingFolder(@".\src")
            .WithArguments("add")
            .WithArguments("--libz", "Assemblies.libz"));
    }
 }
```

