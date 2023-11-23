Intuitive an easy to learn. C#, fluent interface, and IntelliSense make even most complex script creation a breeze.

```csharp
[FromArg("nugetKey", "Nuget api key for publishing Flubu nuget packages.")]
public string NugetApiKey { get; set; }

protected override void ConfigureTargets(ITaskContext context)
{
    var pack = context.CreateTarget("Pack")
        .SetDescription("Prepare's nuget package.")
        .AddCoreTask(x => x.Pack()
            .NoBuild()
            .OutputDirectory(OutputDirectory)
            .WithArguments("--force"); //you can add your own custom arguments on each task

    var branch = context.BuildSystems().Travis().Branch;

    //// Examine travis.yaml to see how to pass api key from travis to FlubuCore build script.
    var nugetPush = context.CreateTarget("Nuget.publish")
        .SetDescription("Publishes nuget package.")
        .DependsOn(pack)
        .AddCoreTask(x => x.NugetPush($"{OutputDirectory}/NetCoreOpenSource.nupkg")
            .ServerUrl("https://www.nuget.org/api/v2/package")
             .ApiKey(NugetApiKey)
        )
        .When((c) => c.BuildSystems().RunningOn == BuildSystemType.TravisCI
                     && !string.IsNullOrEmpty(branch)
                     && branch.EndsWith("stable", StringComparison.OrdinalIgnoreCase));
}
```