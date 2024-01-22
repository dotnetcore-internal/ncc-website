[TOC]

## Project Configuration

Ensure that your `.csproj` file contains the following reference:

```xml
<PackageReference Include="DotNetCore.GaussDB" Version="8.0.1" />
```

## Services Configuration

Add `DotNetCore.GaussDB` to the project, and then:

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