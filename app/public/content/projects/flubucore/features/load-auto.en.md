[Assembly references and nuget packages are loaded automatically](https://flubucore.dotnetcore.xyz/buildscript-fundamentals#Referencing-other-assemblies-in-build-script) when script is used together with project file. When script is executed alone (for example when deploying with FlubuCore script on production environment) references can be added with attributes.



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

