[TOC]

## Getting started .NET core



#### Installation .NET core

- Add new project to solution e.g. BuildScript
- Add **[FlubuCore](https://www.nuget.org/packages/FlubuCore)** reference to project with NuGet

##### OR INSTALL WITH FLUBUCORE TEMPLATE

- In console navigate where your solution is located.
- Run `dotnet new -i FlubuCore.Template`
- Run `dotnet new FlubuCore`
- This will add BuildScript.csproj with FlubuCore references and FlubuCore script template



#### Write and run your first build script in .NET core

Add BuildScript.cs file to buildscript projetct and add following code.

Following code adds compile target to flubu commands. Compile target compiles the solution.

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



#### Run build script in .NET core with dotnet CLI tool

- Add [dotnet-flubu](https://www.nuget.org/packages/dotnet-flubu/) as Dotnet tool to csproj or xproj(project.json). No need if u installed FlubuCore with template

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



- Run `dotnet restore`. This command will restore dotnet-flubu package and add it to dotnet tool commands.
- Run `dotnet flubu help`. There you will see besided default commands the compile command that we just added.
- Run `dotnet flubu compile` This command will compile your solution.



#### Run build script in .NET core with local or global tool

- .net core sdk 2.1.300 or greater must be installed.
- Install FlubuCore local or global tool: `dotnet tool install --global FlubuCore.Tool`
- Run `flubu compile` where build script is located. It will compile your solution.

This is very basic build script just for you to see how simple it is to get you started. FlubuCore has to offer a lot of nice features. Read more about them at [Build script fundamentals](https://flubucore.dotnetcore.xyz/buildscript-fundamentals/). You should also take a look at [.net core examples](https://github.com/flubu-core/examples/blob/master/NetCore_csproj/BuildScript/BuildScript.cs) they will give you hints how to write your build script and see most of the main flubu features in action.

## Getting started .NET


#### Requirements .NET

Build script project where FlubuCore is referenced must target .NET framework 4.62 or greater. If this is not possible you can use [Flubu](https://www.nuget.org/packages/Flubu) version 2.64 or less which only requires .NET Framework 4.0. To run build script with FlubuCore runner .net runtime 4.0 or greater is required.



#### Installation .NET

- Add new project to solution e.g. BuildScript
- Add **[FlubuCore.Runner](https://www.nuget.org/packages/FlubuCore.Runner/)** reference to project with nuGet. This will add reference To FlubuCore.dll, add BuildScript.cs (build script template) to project and it will also add flubu.exe for running the buildscript.



#### Write and run your first build script in .NET

Modify BuildScript.cs with the following code. Change solution name to yours.

Following code adds compile target to flubu commands. Compile target compiles the solution.

```csharp
using FlubuCore.Context;
using FlubuCore.Scripting;

public class BuildScript : DefaultBuildScript
{
    protected override void ConfigureTargets(ITaskContext session)
    {
        var compile = session.CreateTarget("compile")
         .SetDescription("Compiles the solution.")
         .AddTask(x => x.CompileSolutionTask());
    }
}
```



#### Run build script

- Open cmd and navigate to buildscript project directory.
- Run flubu.exe help. There you will see besides default commands the compile command that we just added.
- Run flubu.exe compile. It will compile your solution.

This is very basic build script just for you to see how simple it is to get you started. FlubuCore has to offer a lot of nice features. Read more about them at [Build script fundamentals](https://flubucore.dotnetcore.xyz/buildscript-fundamentals/). You should also take a look at [.net examples](https://github.com/flubu-core/examples/blob/master/MVC_NET4.61/BuildScripts/BuildScript.cs) they will give you hints how to write your build script and see most of the main flubu features in action.