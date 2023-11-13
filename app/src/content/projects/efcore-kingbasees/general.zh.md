[TOC]

## 简介

`DotNetCore.EntityFrameworkCore.KingbaseES`是 KingbaseES 的开源 Entity Framework Core 提供程序。它支持您通过 EFCore（微软最广泛使用的 .NET O/RM）与 KingbaseES 进行交互，支持最新版本，并使用熟悉的 LINQ 语法来表达查询。

## 搭建与逆向工程

使用 [EF Core 工具](https://docs.microsoft.com/en-us/ef/core/cli/dotnet)执行搭建命令：

```
dotnet ef dbcontext scaffold "Server=localhost;User=root;Password=1234;Database=ef" "DotNetCore.EntityFrameworkCore.KingbaseES"
```

## 贡献

贡献的最简单方法之一是报告问题并参与讨论。您还可以通过提交包含代码更改和支持测试的拉取请求来做出贡献。

我们一直在寻找额外的核心贡献者。如果您每周有几个小时的时间，并且了解 EF Core 和 KingbaseES，请给我们一个提示。

## 许可证

[PostgreSQL 许可证](https://github.com/dotnetcore/EntityFrameworkCore.KingbaseES/blob/main/LICENSE)