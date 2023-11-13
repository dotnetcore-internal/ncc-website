[TOC]

## 簡介

`DotNetCore.EntityFrameworkCore.KingbaseES`是 KingbaseES 的開源 Entity Framework Core 提供程序。它支持您通過 EFCore（微軟最廣泛使用的 .NET O/RM）與 KingbaseES 進行交互，支持最新版本，並使用熟悉的 LINQ 語法來表達查詢。

## 搭建與逆向工程

使用 [EF Core 工具](https://docs.microsoft.com/en-us/ef/core/cli/dotnet)執行搭建命令：

```
dotnet ef dbcontext scaffold "Server=localhost;User=root;Password=1234;Database=ef" "DotNetCore.EntityFrameworkCore.KingbaseES"
```

## 貢獻

貢獻的最簡單方法之一是報告問題並參與討論。您還可以通過提交包含代碼更改和支持測試的拉取請求來做出貢獻。

我們一直在尋找額外的核心貢獻者。如果您每周有幾個小時的時間，並且了解 EF Core 和 KingbaseES，請給我們一個提示。

## 許可證

[PostgreSQL 許可證](https://github.com/dotnetcore/EntityFrameworkCore.KingbaseES/blob/main/LICENSE)