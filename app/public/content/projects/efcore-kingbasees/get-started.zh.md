[TOC]

## 项目配置

确保你的 `.csproj` 文件包含以下引用：

```xml
<PackageReference Include="DotNetCore.EntityFrameworkCore.KingbaseES" Version="6.0.22" />
```

## 服务配置

将`DotNetCore.EntityFrameworkCore.KingbaseES` 添加到你的 ASP.NET Core 项目的 `Startup.cs` 文件中的服务配置中：

```csharp
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        // 替换为你的连接字符串。
        var connectionString = "host={host};port={port};database={database};username={username};password={password};";

        // 将 'YourDbContext' 替换为你自己的从 DbContext 派生的类名。
        services.AddDbContext<YourDbContext>(
            dbContextOptions => dbContextOptions
                .UseKdbndp(connectionString)
        );
    }
}
```

## 示例应用程序

查看我们的 [Basic Test](https://github.com/dotnetcore/EntityFrameworkCore.KingbaseES/tree/main/test/KingbaseES.BasicTest)，它是一个包含 ASP.NET Core MVC 应用程序的示例仓库。

在问题部分（可以通过搜索 `Program.cs` 找到）还发布了许多完整且简洁的控制台应用程序示例。

## 阅读 EF Core 文档

参考 Microsoft 的 [EF Core 文档](https://docs.microsoft.com/en-us/ef/core/)，了解有关使用 EF Core 的详细说明和示例。