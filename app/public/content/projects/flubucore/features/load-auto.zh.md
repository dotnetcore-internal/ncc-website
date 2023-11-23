当脚本与项目文件一起使用时[会自动加载程序集引用和 NuGet 包](https://flubucore.dotnetcore.xyz/buildscript-fundamentals#Referencing-other-assemblies-in-build-script)。当脚本单独执行（譬如在生产环境中使用 FlubuCore 脚本进行部署）时，可在特性（attributes）中添加引用（references）。



```csharp
[NugetPackage("Newtonsoft.json", "11.0.2")]
[Assembly(".\Lib\EntityFramework.dll")]
public class BuildScript : DefaultBuildScript
{
   public void NuGetPackageReferencingExample(ITaskContext context)
    {
        JsonConvert.SerializeObject("Example");
    }
}
```

