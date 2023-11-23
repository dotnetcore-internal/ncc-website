[TOC]

## Introduce

`DotNetCore.EntityFrameworkCore.KingbaseES` is an open source Entity Framework Core provider for KingbaseES. It supports you to interact with KingbaseES via EFCore, the most widely-used .NET O/RM from Microsoft, up to its latest version, and use familiar LINQ syntax to express queries.

## Scaffolding / Reverse Engineering

Use the [EF Core tools](https://docs.microsoft.com/en-us/ef/core/cli/dotnet) to execute scaffolding commands:

```
dotnet ef dbcontext scaffold "Server=localhost;User=root;Password=1234;Database=ef" "DotNetCore.EntityFrameworkCore.KingbaseES"
```

## Contribute

One of the easiest ways to contribute is to report issues and participate in discussions. You can also contribute by submitting pull requests with code changes and supporting tests.

We are always looking for additional core contributors. If you got a couple of hours a week and know your way around EF Core and KingbaseES, give us a nudge.

## License

[PostgreSQL license](https://github.com/dotnetcore/EntityFrameworkCore.KingbaseES/blob/main/LICENSE)
