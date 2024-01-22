[TOC]

## 項目配置

確保你的 `.csproj` 文件包含以下引用：

```xml
<PackageReference Include="DotNetCore.EntityFrameworkCore.GaussDB" Version="8.0.0" />
```

## 服務配置

將`DotNetCore.EntityFrameworkCore.GaussDB` 添加到你的 ASP.NET Core 項目的 `Startup.cs` 文件中的服務配置中：

```csharp
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        // 替換為你的連接字符串。
        var connectionString = "host={host};port={port};database={database};username={username};password={password};";

        // 將 'YourDbContext' 替換為你自己的從 DbContext 派生的類名。
        services.AddDbContext<YourDbContext>(
            dbContextOptions => dbContextOptions
                .UseGaussDB(connectionString)
        );
    }
}
```

## 示例應用程序

查看我們的 [Basic Test](https://github.com/dotnetcore/EntityFrameworkCore.GaussDB/tree/main/test/GaussDB.BasicTest)，它是一個包含 ASP.NET Core MVC 應用程序的示例倉庫。

在問題部分（可以通過搜索 `Program.cs` 找到）還發布了許多完整且簡潔的控制台應用程序示例。

## 閱讀 EF Core 文檔

參考 Microsoft 的 [EF Core 文檔](https://docs.microsoft.com/en-us/ef/core/)，了解有關使用 EF Core 的詳細說明和示例。