當腳本與項目文件一起使用時[會自動加載程序集引用和 NuGet 包](https://flubucore.dotnetcore.xyz/buildscript-fundamentals#Referencing-other-assemblies-in-build-script)。當腳本單獨執行（譬如在生產環境中使用 FlubuCore 腳本進行部署）時，可在特性（attributes）中添加引用（references）。



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

