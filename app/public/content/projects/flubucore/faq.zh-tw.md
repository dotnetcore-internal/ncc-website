## 為什麼選擇 FlubuCore？

- 對整個 .NET 生態系統和腳本內的完整 IDE 支持進行本機訪問。
- 使用 flubu，您可以在任何地方執行腳本，而無需將其放在項目中。這對於部署腳本或您想要編寫與構建腳本或部署腳本無關的其他腳本非常重要。
- Flubu 允許在目標中有多個任務。
- 通過流暢的接口 `Context.AddTask()` 或 `Context.Tasks()` 輕松訪問任務。
- 每個 Flubu 內置任務都從基類任務派生，這意味著每個內置任務都具有重試、OnError、Finally、When、Interactive 等機制。
- 將命令行參數、來自 json 配置文件的設置或環境變量傳遞到腳本中的屬性。
- 允許您重用任務集。請參閱[示例](https://github.com/dotnetcore/FlubuCore.Examples/blob/master/DeployScriptExample/BuildScript/DeployScript.cs)
- flubu 支持目標、目標依賴項和任務的並行/異步執行。
- 對於執行外部程序或命令的每個任務，您可以使用 .WithArguments() 方法或甚至決定不使用流暢的接口（良好示例：https://github.com/azabluda/InfoCarrier.Core/blob/develop/BuildScript/BuildScript.cs)
- 使用屬性定義替代目標
- Flubu Web API 允許您遠程執行腳本（對部署很有用，但不限於此）
- 通過控制台覆蓋現有選項或向任務添加其他選項。https://flubucore.dotnetcore.xyz/override-add-options/
- Flubu 具有非常好的交互模式 https://flubucore.dotnetcore.xyz/build-script-runner-interactive/
- Flubu 支持 .net 461+ 和 .net core 1.0

## 在執行 Flubu 內置任務時，我應該調用`Execute`方法嗎？

如果您通過`AddTask`方法將任務添加到目標中，Flubu 在執行該目標時會調用`Execute`方法，因此在這種情況下，您不應該在任務上調用`Execute`。

```
      context.CreateTarget("Build")
             .AddCoreTask(x => x.build());
```

在上面的示例中，`BuildTask`被添加到目標中。當目標被執行時，Flubu 通過調用任務的`Execute`方法來執行添加到目標的所有任務。在這種情況下，它將執行`BuildTask`。

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

在下面的示例中，`Do`實際上將[DoTask](https://github.com/dotnetcore/FlubuCore/blob/master/src/FlubuCore/Tasks/DoTask.cs)添加到目標中。當目標被執行時，Flubu 將執行`DoTask`。在上面的示例中，DoTask 調用分配給動作委托（Do 方法的第一個參數）的匿名方法。Flubu 無法自行執行匿名方法中的任務，您必須手動調用`Execute()`方法。

##  我可以獲取使用 Flubu 執行的程序、進程或命令的輸出嗎？

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

##  我可以在`ConfigureTargets`方法中訪問屬性或 Flubu BuildProperties 嗎？

在大多數情況下，只要它們不是在`Do`方法或任務中設置的，您就可以訪問它們。


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

在上面的示例中，您可能認為在`ConfigureTargets`中訪問屬性`SimpleSample`時，它不會是 0，但實際上是 0，因為`ConfigureTargets`方法總是在使用 flubu 執行的所有目標之前執行。

> **`ConfigureTargets`也在所有目標依賴項和添加到目標的任務之前執行**



