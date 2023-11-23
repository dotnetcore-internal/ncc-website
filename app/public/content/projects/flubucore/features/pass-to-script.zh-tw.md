[將命令行參數（command line arguments）、json 配置文件或環境變量（environment variables）的設置傳入腳本](https://flubucore.dotnetcore.xyz/buildscript-fundamentals#Script-arguments)。

```
 public class SimpleScript : DefaultBuildScript
 {
    [FromArg("c", "The configuration to use for building the project.")]
    public string Configuration { get; set; } = "Release"

    [FromArg("sn", "If true app is deployed on second node. Otherwise not.")]
    public bool deployOnSecondNode { get; set; }

    protected override void ConfigureTargets(ITaskContext context)
    {
         context.CreateTarget("build")
            .AddCoreTask(x => x.Build()
                .Configuration(Configuration)
                .ForMember(x =>  x.Framework("net462"), "f", "The target framework to build for.")); 
    }
}
```

```shell
  flubu build -c=Debug -f=netcoreapp2.0
```