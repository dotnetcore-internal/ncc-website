[TOC]

## Introduce

"FlubuCore - Fluent Builder Core" is a cross platform build and deployment automation system. You can define your build and deployment scripts in C# using an intuitive fluent interface. This gives you code completion, IntelliSense, debugging, FlubuCore custom analyzers, and native access to the whole .NET ecosystem inside of your scripts.

![Demo](/articles/projects/flubucore/assets/flubu-core-demo.gif)

FlubuCore offers a .net (core) console application that uses power of roslyn to compile and execute scripts. Above example can be run from console with:

- FlubuCore runner `flubu.exe Default`
- FlubuCore dotnet cli tool `dotnet flubu Default`
- FlubuCore local or global tool `flubu Default`

## Getting Started

Using FlubuCore is straightforward and very simple :-) It is also fully and throughly documented.

The [Getting Started](https://flubucore.dotnetcore.xyz/getting-started/) chapter in [Documentation](https://flubucore.dotnetcore.xyz/) will help you set up your first FlubuCore build in no time. You should also check [getting started blog.](https://www.huanlintalk.com/2020/04/getting-started-with-flubucore.html) It has some more details with some nice tips and tricks.

A comprehensive list of features that FlubuCore has to offer with descriptions can be found in the [Build Script Fundamentals](https://flubucore.dotnetcore.xyz/buildscript-fundamentals) chapter.

Once you have your build and deployment scripts defined, the following Wiki chapters will explain how to run them:

- For .NET Framework projects use [FlubuCore.Runner](https://flubucore.dotnetcore.xyz/getting-started#Installation.net)
- For .NET Core projects use [FlubuCore CLI global tool](https://flubucore.dotnetcore.xyz/getting-started#Installation-.net-core)

## Examples

Aside from the detailed Wiki FlubuCore comes with example projects that reflect real-life situations. The examples can be found in the separate [Examples repository](https://github.com/flubu-core/examples/).

These examples will help you to get quickly start with FlubuCore: * [.NET Framework build example](https://github.com/flubu-core/examples/blob/master/MVC_NET4.61/BuildScripts/BuildScript.cs) - Example covers versioning, building the project, running tests, packaging application for deployment.

- [.NET Core build example](https://github.com/flubu-core/examples/blob/master/NetCore_csproj/BuildScript/BuildScript.cs) - Example covers versioning, building the project, running tests, packaging application for deployment.
- [Deployment script example](https://github.com/flubu-core/examples/blob/master/DeployScriptExample/BuildScript/DeployScript.cs) - Example shows how to write simple deployment script.
- [Open source library example](https://github.com/dotnetcore/FlubuCore.Examples/blob/master/NetCoreOpenSource/Build/BuildScript.cs) - Example covers versioning, building the project, running tests and publishing nuget package. It also covers how to run build script on Appveyor and Travis CI.



## Contributing

Please see [CONTRIBUTING.md](https://github.com/dotnetcore/FlubuCore/blob/master/CONTRIBUTING.md).

## Ways to Contribute

- Spread the word about the project.
- If you like the project don't forget to give it a star so that the community get's bigger.
- Improve documentation.
- Report, fix a bug.
- Implement a new feature.
- Discuss potential ways to improve project.
- Improve existing implementation, performance, etc.



## Changelog and Roadmap

Changes with description and examples can be found in [Changelog.](https://github.com/flubu-core/flubu.core/blob/master/CHANGELOG.md)

You can see FlubuCore roadmap by exploring opened [Milestones.](https://github.com/flubu-core/flubu.core/milestones)