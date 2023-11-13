[TOC]

## Project Configuration

Ensure that your `.csproj` file contains the following reference:

```xml
<PackageReference Include="DotNetCore.EntityFrameworkCore.KingbaseES" Version="6.0.22" />
```

## Services Configuration

Add `DotNetCore.EntityFrameworkCore.KingbaseES` to the services configuration in your the `Startup.cs` file of your ASP.NET Core project:

```csharp
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        // Replace with your connection string.
        var connectionString = "host={host};port={port};database={database};username={username};password={password};";

        // Replace 'YourDbContext' with the name of your own DbContext derived class.
        services.AddDbContext<YourDbContext>(
            dbContextOptions => dbContextOptions
                .UseKdbndp(connectionString)
        );
    }
}
```

## Sample Application

Check out our [Basic Test](https://github.com/dotnetcore/EntityFrameworkCore.KingbaseES/tree/main/test/KingbaseES.BasicTest) for an example repository that includes an ASP.NET Core MVC Application.

There are also many complete and concise console application samples posted in the issue section (some of them can be found by searching for `Program.cs`).

## Read the EF Core Documentation

Refer to Microsoft's [EF Core Documentation](https://docs.microsoft.com/en-us/ef/core/) for detailed instructions and examples on using EF Core.