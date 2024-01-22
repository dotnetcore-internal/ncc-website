[TOC]

## 项目配置

确保你的 `.csproj` 文件包含以下引用：

```xml
<PackageReference Include="DotNetCore.GaussDB" Version="8.0.1" />
```

## 服务配置

将`DotNetCore.GaussDB` 添加到你的项目，然后：

```csharp
using GaussDB;

var connString = "host={host};port={port};username={username};password={password};database={database}";

var dataSourceBuilder = new GaussDBDataSourceBuilder(connString);
var dataSource = dataSourceBuilder.Build();

var conn = await dataSource.OpenConnectionAsync();

// Insert some data
await using (var cmd = new GaussDBCommand("INSERT INTO data (some_field) VALUES (@p)", conn))
{
    cmd.Parameters.AddWithValue("p", "Hello world");
    await cmd.ExecuteNonQueryAsync();
}

// Retrieve all rows
await using (var cmd = new GaussDBCommand("SELECT some_field FROM data", conn))
await using (var reader = await cmd.ExecuteReaderAsync())
{
    while (await reader.ReadAsync())
        Console.WriteLine(reader.GetString(0));
}
```