## 为什么选择 FlubuCore？

- 对整个 .NET 生态系统和脚本内的完整 IDE 支持进行本机访问。
- 使用 flubu，您可以在任何地方执行脚本，而无需将其放在项目中。这对于部署脚本或您想要编写与构建脚本或部署脚本无关的其他脚本非常重要。
- Flubu 允许在目标中有多个任务。
- 通过流畅的接口 `Context.AddTask()` 或 `Context.Tasks()` 轻松访问任务。
- 每个 Flubu 内置任务都从基类任务派生，这意味着每个内置任务都具有重试、OnError、Finally、When、Interactive 等机制。
- 将命令行参数、来自 json 配置文件的设置或环境变量传递到脚本中的属性。
- 允许您重用任务集。请参阅[示例](https://github.com/dotnetcore/FlubuCore.Examples/blob/master/DeployScriptExample/BuildScript/DeployScript.cs)
- flubu 支持目标、目标依赖项和任务的并行/异步执行。
- 对于执行外部程序或命令的每个任务，您可以使用 .WithArguments() 方法或甚至决定不使用流畅的接口（良好示例：https://github.com/azabluda/InfoCarrier.Core/blob/develop/BuildScript/BuildScript.cs)
- 使用属性定义替代目标
- Flubu Web API 允许您远程执行脚本（对部署很有用，但不限于此）
- 通过控制台覆盖现有选项或向任务添加其他选项。https://flubucore.dotnetcore.xyz/override-add-options/
- Flubu 具有非常好的交互模式 https://flubucore.dotnetcore.xyz/build-script-runner-interactive/
- Flubu 支持 .net 461+ 和 .net core 1.0


## 在执行 Flubu 内置任务时，我应该调用`Execute`方法吗？

如果您通过`AddTask`方法将任务添加到目标中，Flubu 在执行该目标时会调用`Execute`方法，因此在这种情况下，您不应该在任务上调用`Execute`。

```
      context.CreateTarget("Build")
             .AddCoreTask(x => x.build());
```

在上面的示例中，`BuildTask`被添加到目标中。当目标被执行时，Flubu 通过调用任务的`Execute`方法来执行添加到目标的所有任务。在这种情况下，它将执行`BuildTask`。

```
 context.CreateTarget("LoginEcr")
                 .Do(c =>
                 {
                        c.Tasks()
                         .RunProgram("aws") 
                         .WithArguments("ecr", "get-login", "--region", "eu-central-1", "--no-include-email"))
                         .Execute(context);
                 }
```

在下面的示例中，`Do`实际上将[DoTask](https://github.com/dotnetcore/FlubuCore/blob/master/src/FlubuCore/Tasks/DoTask.cs)添加到目标中。当目标被执行时，Flubu 将执行`DoTask`。在上面的示例中，DoTask 调用分配给动作委托（Do 方法的第一个参数）的匿名方法。Flubu 无法自行执行匿名方法中的任务，您必须手动调用`Execute()`方法。

##  我可以获取使用 Flubu 执行的程序、进程或命令的输出吗？

是的，您可以使用 `RunProgramTask` 中的 `CaptureOutput` 方法。


```
public class MyScript : DefaultBuildScript
{
    protected override void ConfigureTargets(ITaskContext context)
    {
        context.CreateTarget("Example")
            .Do(RunProgramOrCommandExample);
    }

    public void RunProgramOrCommandExample(ITaskContext context)
    {
        var task = context.Tasks().RunProgramTask("EnterPathToProgramOrCommand")
            .WithArguments("Add arguments if needed")
            .CaptureOutput();

        task.Execute(context);

        var output = task.GetOutput();
    }
}
```

##  我可以在`ConfigureTargets`方法中访问属性或 Flubu BuildProperties 吗？

在大多数情况下，只要它们不是在`Do`方法或任务中设置的，您就可以访问它们。


```
public BuildVersion BuildVersion { get; set; } = null;

public int SimpleSample {get; set; } = 0;

protected override void ConfigureTargets(ITaskContext context)
{
   var fetchBuildVersion context.CreateTarget("fetch.buildVersion").Do(FetchBuildVersion);

    context.CreateTarget("Build")
        .DependsOn(fetchBuildVersion)
        .AddCoreTask(x => x.Build()
            .Version(BuildVersion.BuildVersionWithQuality())); /// BuildVersion is null here.

    context.LogInfo($"sample value: '{SimpleSample}'"); /// logs 0 and not 5. Explained below why is it so.
}

private void FetchBuildVersion(ITaskContext context)
{
    BuildVersion = context.Tasks().FetchBuildVersionFromFileTask()
        .ProjectVersionFileName("project_version.txt")
        .Execute(context);

    SimpleSample = 5;
}
```

在上面的示例中，您可能认为在`ConfigureTargets`中访问属性`SimpleSample`时，它不会是 0，但实际上是 0，因为`ConfigureTargets`方法总是在使用 flubu 执行的所有目标之前执行。

> **`ConfigureTargets`也在所有目标依赖项和添加到目标的任务之前执行**


