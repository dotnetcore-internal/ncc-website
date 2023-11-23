[TOC]

## 简介

“FlubuCore - Fluent Builder Core”，跨平台的构建与部署自动化系统，通过直观的 Fluent 接口，使用 C# 定义构建和部署脚本。这使你的代码获得自动完成、IntelliSense、调试、FlubuCore 自定义分析器，以及在脚本中对整个 .NET 生态的原生性访问。

![Demo](/content/projects/flubucore/assets/flubu-core-demo.gif)

通过 roslyn 的强大赋能，FlubuCore 提供有 .NET/.NET Core 控制台应用程序用于编译和执行脚本。以上示例均可从控制台运行：

- FlubuCore runner `flubu.exe Default`
- FlubuCore dotnet cli tool `dotnet flubu Default`
- FlubuCore local or global tool `flubu Default`

## 入门

FlubuCore 用起来非常简单:-) 而且她的文档也非常完整。

[FlubuCore 文档](https://flubucore.dotnetcore.xyz/) 中的[入门](https://flubucore.dotnetcore.xyz/getting-started/)一章将帮助你立即设置你的第一个 FlubuCore 构建。

可在[构建脚本的原理](https://flubucore.dotnetcore.xyz/buildscript-fundamentals) 一章中查阅 FlubuCore 提供的完整功能列表。

一旦你定义了构建与部署脚本（build and deployment scripts），以下 Wiki 张杰将解释如何运行它们：

- 针对 .NET Framework 项目，请使用 [FlubuCore.Runner](https://flubucore.dotnetcore.xyz/getting-started#Installation.net)
- 针对 .NET Core 项目，请使用 [FlubuCore CLI global tool](https://flubucore.dotnetcore.xyz/getting-started#Installation-.net-core)

## 范例

除了 Wiki 的详细介绍外，FlubuCore 还提供了大量与真实情况相若的范例。这些例子可以在独立仓库 [Examples repository](https://github.com/dotnetcore/FlubuCore.Examples/) 中找到。

这些示例有助于你快速入门 FlubuCore：

这些示例有助于你快速入门 FlubuCore：

- [.NET Framework 构建示例](https://github.com/dotnetcore/FlubuCore.Examples/blob/master/MVC_NET4.61/BuildScripts/BuildScript.cs) - Example covers versioning, building the project, running tests, packaging application for deployment.
- [.NET Core 构建示例](https://github.com/dotnetcore/FlubuCore.Examples/blob/master/NetCore_csproj/BuildScript/BuildScript.cs) - Example covers versioning, building the project, running tests, packaging application for deployment.
- [部署脚本示例](https://github.com/dotnetcore/FlubuCore.Examples/blob/master/DeployScriptExample/BuildScript/DeployScript.cs) - Example shows how to write simple deployment script.
- [Open source library example](https://github.com/dotnetcore/FlubuCore.Examples/blob/master/NetCoreOpenSource/Build/BuildScript.cs) - Example covers versioning, building the project, running tests and publishing nuget package. It also covers how to run build script on Appveyor and Travis CI.



## 贡献

请移步阅读 [CONTRIBUTING.md](https://github.com/dotnetcore/FlubuCore/blob/master/CONTRIBUTING.md).

### 如何作出贡献

- 为本项目做推广。
- 如果你对本项目感兴趣，请在右上角点击 star，以便壮大我们的社区。
- 改进文档
- 反馈、修正 Bug。
- 实现新功能。
- 讨论如何进一步改进项目。
- 改善项目的现有实现、性能等。



## 更新日志与路线图

详细变更记录与示例请参阅[变更日志](https://github.com/dotnetcore/FlubuCore/blob/master/CHANGELOG.md)。

FlubuCore 路线图请翻阅项目[里程碑](https://github.com/dotnetcore/FlubuCore/milestones)。