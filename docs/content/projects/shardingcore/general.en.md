## Introduce

The main purpose of `ShardingCore` is to enhance EfCore in terms of sharding, without invading the business code of EfCore. It does not solve problems at the database level, nor does it write complex SQL - if the SQL level is slow, then ShardingCore is also helpless.

## How Choose Version

- 【ShardingCore Last Version】.【EfCore Version】.x.x
- first version is shardingcore version
- second version is efcore version
- other version use last version
- EfCore 7 use ShardingCore 7.7.x.x
- EfCore 6 use ShardingCore 7.6.x.x
- EfCore 5 use ShardingCore 7.5.x.x
- EfCore 3 use ShardingCore 7.3.x.x
- EfCore 2 use ShardingCore 7.2.x.x

## Abp.VNext、WTM、FURION

- [ShardingFrameWork](https://github.com/xuejmnet/ShardingWithFramework) demos

## Dependency

### Before ShardingCore 6.7.0.0

| Release                                                | EF Core | .NET         | .NET (Core) |
| ------------------------------------------------------ | ------- | ------------ | ----------- |
| [6.x.x.x](https://www.nuget.org/packages/ShardingCore) | 6.0.0   | net 6.0      | 6.0+        |
| [5.x.x.x](https://www.nuget.org/packages/ShardingCore) | 5.0.10  | Standard 2.1 | 5.0+        |
| [3.x.x.x](https://www.nuget.org/packages/ShardingCore) | 3.1.18  | Standard 2.0 | 2.0+        |
| [2.x.x.x](https://www.nuget.org/packages/ShardingCore) | 2.2.6   | Standard 2.0 | 2.0+        |

### After ShardingCore 6.7.0.0

Use Condition Compile With NetFramework not

| Release                                                 | EF Core | .NET (Core)                   |
| ------------------------------------------------------- | ------- | ----------------------------- |
| [6.7.0.0+](https://www.nuget.org/packages/ShardingCore) | 6.x     | net6                          |
| [6.7.0.0+](https://www.nuget.org/packages/ShardingCore) | 5.x     | net5 or netstandard2.1        |
| [6.7.0.0+](https://www.nuget.org/packages/ShardingCore) | 3.x     | netcoreapp3 or netstandard2.0 |
| [6.7.0.0+](https://www.nuget.org/packages/ShardingCore) | 2.x     | netcoreapp2                   |
