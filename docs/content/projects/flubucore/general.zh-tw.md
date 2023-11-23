[TOC]

## 简介

「FlubuCore - Fluent Builder Core」，跨平台的構建與部署自動化系統，通過直觀的 Fluent 接口，使用 C# 定義構建和部署腳本。這使你的代碼獲得自動完成、IntelliSense、調試、FlubuCore 自定義分析器，以及在腳本中對整個 .NET 生態的原生性訪問。

![Demo](/articles/projects/flubucore/assets/flubu-core-demo.gif)

通過 roslyn 的強大賦能，FlubuCore 提供有 .NET/.NET Core 控制台應用程序用於編譯和執行腳本。以上示例均可從控制台運行：

- FlubuCore runner `flubu.exe Default`
- FlubuCore dotnet cli tool `dotnet flubu Default`
- FlubuCore local or global tool `flubu Default`

## 入門

FlubuCore 用起來非常簡單:-) 而且她的文檔也非常完整。

[FlubuCore 文檔](https://flubucore.dotnetcore.xyz/) 中的[入門](https://flubucore.dotnetcore.xyz/getting-started/)一章將幫助你立即設置你的第一個 FlubuCore 構建。

可在[構建腳本的原理](https://flubucore.dotnetcore.xyz/buildscript-fundamentals) 一章中查閱 FlubuCore 提供的完整功能列表。

一旦你定義了構建與部署腳本（build and deployment scripts），以下 Wiki 張傑將解釋如何運行它們：

- 針對 .NET Framework 項目，請使用 [FlubuCore.Runner](https://flubucore.dotnetcore.xyz/getting-started#Installation.net)
- 針對 .NET Core 項目，請使用 [FlubuCore CLI global tool](https://flubucore.dotnetcore.xyz/getting-started#Installation-.net-core)

## 範例

除了 Wiki 的詳細介紹外，FlubuCore 還提供了大量與真實情況相若的範例。這些例子可以在獨立倉庫 [Examples repository](https://github.com/dotnetcore/FlubuCore.Examples/) 中找到。

這些示例有助於你快速入門 FlubuCore：

這些示例有助於你快速入門 FlubuCore：

- [.NET Framework 構建示例](https://github.com/dotnetcore/FlubuCore.Examples/blob/master/MVC_NET4.61/BuildScripts/BuildScript.cs) - Example covers versioning, building the project, running tests, packaging application for deployment.
- [.NET Core 構建示例](https://github.com/dotnetcore/FlubuCore.Examples/blob/master/NetCore_csproj/BuildScript/BuildScript.cs) - Example covers versioning, building the project, running tests, packaging application for deployment.
- [部署腳本示例](https://github.com/dotnetcore/FlubuCore.Examples/blob/master/DeployScriptExample/BuildScript/DeployScript.cs) - Example shows how to write simple deployment script.
- [Open source library example](https://github.com/dotnetcore/FlubuCore.Examples/blob/master/NetCoreOpenSource/Build/BuildScript.cs) - Example covers versioning, building the project, running tests and publishing nuget package. It also covers how to run build script on Appveyor and Travis CI.



## 貢獻

請移步閱讀 [CONTRIBUTING.md](https://github.com/dotnetcore/FlubuCore/blob/master/CONTRIBUTING.md).

### 如何作出貢獻

- 為本項目做推廣。
- 如果你對本項目感興趣，請在右上角點擊 star，以便壯大我們的社區。
- 改進文檔
- 反饋、修正 Bug。
- 實現新功能。
- 討論如何進一步改進項目。
- 改善項目的現有實現、性能等。



## 更新日志與路線圖

詳細變更記錄與示例請參閱[變更日志](https://github.com/dotnetcore/FlubuCore/blob/master/CHANGELOG.md)。

FlubuCore 路線圖請翻閱項目[裏程碑](https://github.com/dotnetcore/FlubuCore/milestones)。