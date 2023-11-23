[TOC]

## .NET core 篇


#### 安裝

- 添加新項目到解決方案，比如：BuildScript；
- 在項目中用 NuGet 添加對 **[FlubuCore](https://www.nuget.org/packages/FlubuCore)** 的引用。

##### 或從 FLUBUCORE 模板安裝

- 在控制台中將當前目錄切換到解決方案所在之處。
- 運行 `dotnet new -i FlubuCore.Template`
- 運行 `dotnet new FlubuCore`
- 這一步將從 FlubuCore 引用和 FlubuCore 腳本模板中添加 BuildScript.csproj



#### 用 .NET Core 編寫並運行第一個構建腳本

將 BuildScript.cs 文件添加到構建腳本項目之中，並添加以下代碼。

以下代碼將編譯目標（compile target）添加到 flubu 命令中，編譯目標將編譯解決方案。

```csharp
public class MyBuildScript : DefaultBuildScript
{
    protected override void ConfigureTargets(ITaskContext context)
    {
        var compile = context.CreateTarget("compile")
            .SetDescription("Compiles the solution.")
            .AddCoreTask(x => x.Build("FlubuExample.sln"));
    }
}
```



#### 用 dotnet CLI 工具運行構建腳本

- 將 [dotnet-flubu](https://www.nuget.org/packages/dotnet-flubu/) 作為 dotnet 工具添加到 csproj 文件或 xproj（project.json）文件中。如果你是從模板安裝的 FlubuCore，則不需要這個步驟。

csproj:

```xml
<ItemGroup>
    <DotNetCliToolReference Include="dotnet-flubu" Version="1.7.0" />
</ItemGroup>
```

project.json:

```json
"tools": {
        "dotnet-flubu": {
            "version": "1.7.0"
        }
    }
```

- 運行 `dotnet restore`。這條命令將還原（restore） dotnet-flubu 包，並將其添加到 dotnet 工具命令中。
- 運行 `dotnet flubu help`。除了默認命令外，你還能看到剛才我們添加進去的編譯命令。
- 運行 `dotnet flubu compile`，這條命令將編譯你的解決方案。



#### 在全局工具中運行構建腳本

- 必須先安裝 .net core sdk 2.1.300 或更高版本；
- 安裝 FlubuCore 全局工具：`dotnet tool install --global FlubuCore.Tool`；
- 在構建腳本所在的目錄下運行 `flubu compile`，本命令將編譯你的解決方案。

這是個非常基礎的構建腳本，目的是幫你快速入門。FlubuCore 已為你提供了許多棒極了的功能。你可以到 [Build script fundamentals](https://flubucore-zh.dotnetcore.xyz/buildscript-fundamentals/) 閱讀更多，或者移步 [.net core examples](https://github.com/flubu-core/examples/blob/master/NetCore_csproj/BuildScript/BuildScript.cs) 查看大多數主要功能的用法。同時建議你查看 [FlubuCore 交互模式](https://flubucore-zh.dotnetcore.xyz/build-script-runner-interactive/)和[覆蓋現有選項或通過控制台向任務添加其他選項](https://flubucore-zh.dotnetcore.xyz/override-add-options/)一節。

## .NET 篇


#### 要求

引用 FlubuCore 的構建腳本項目必須是 .NET Framework 4.6.2 或更高。如果這一點無法做到，那麼可以使用低於 [Flubu](https://www.nuget.org/packages/Flubu) 2.64 的版本，只要你安裝了 .NET Framework 4.0 環境。為了運行 FlubuCore Runner，你需要安裝 .NET 運行時 4.0 或更高的版本。



#### 安裝

- 添加新項目到解決方案，比如：BuildScript；
- 在項目中用 NuGet 添加對 **[FlubuCore.Runner](https://www.nuget.org/packages/FlubuCore.Runner/)** 的引用。這一步將會引用 FlubuCore.dll 並會將 BuildScript.cs 文件（構建腳本模板）添加到項目之中，為運行腳本添加 flubu.exe。



#### 用 .NET 編寫並運行第一個構建腳本

使用以下代碼修改 BuildScript.cs 文件，將解決方案的名字換成你的。

以下代碼將編譯目標（compile target）添加到 flubu 密令中，編譯目標將編譯解決方案。

```csharp
using FlubuCore.Context;
using FlubuCore.Scripting;

public class BuildScript : DefaultBuildScript
{
    protected override void ConfigureBuildProperties(IBuildPropertiesContext context)
    {
        context.Properties.Set(BuildProps.ProductId, "FlubuExample");
        context.Properties.Set(BuildProps.ProductName, "FlubuExample");
        context.Properties.Set(BuildProps.SolutionFileName, "FlubuExample.sln");
        context.Properties.Set(BuildProps.BuildConfiguration, "Release");
    }

    protected override void ConfigureTargets(ITaskContext session)
    {
        var compile = session.CreateTarget("compile")
         .SetDescription("Compiles the solution.")
         .AddTask(x => x.CompileSolutionTask());
    }
}
```



#### 運行構建腳本

- 打開控制台程序（cmd）並將當前目錄導航到構建腳本項目所在之處；
- 運行 flubu.exe help。除了默認命令外，你還能看到剛才我們添加進去的編譯命令。
- 運行 flubu.exe compile，該命令將編譯你的解決方案。

這是個非常基礎的構建腳本，目的是幫你快速入門。FlubuCore 已為你提供了許多棒極了的功能。你可以到 [Build script fundamentals](https://flubucore-zh.dotnetcore.xyz/buildscript-fundamentals/) 閱讀更多，或者移步 [.net examples](https://github.com/flubu-core/examples/blob/master/MVC_NET4.61/BuildScripts/BuildScript.cs) 查看大多數主要功能的用法。