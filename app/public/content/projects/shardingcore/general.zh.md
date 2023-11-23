## 简介

`ShardingCore`主旨是增加 EfCore，针对 EfCore 的分片方面进行增强，并且不对 EfCore 的业务代码进行侵入。不解决数据库层面的问题，编写复杂 SQL —— 如果在 SQL 层面是慢的，那么 ShardingCore 也是无能为力的。


## 如何选择版本

- 【ShardingCore 最新版本】.【EfCore 版本】.x.x
- 版本号第一位是 ShardingCore 的版本号使用最大的即可
- 版本号第二位是 EfCore 版本号使用对应的版本号即可
- 最后两位版本号使用最大即可
- EfCore 7 使用 ShardingCore 7.7.x.x，
- EfCore 6 使用 ShardingCore 7.6.x.x，
- EfCore 5 使用 ShardingCore 7.5.x.x，
- EfCore 3 使用 ShardingCore 7.3.x.x，
- EfCore 2 使用 ShardingCore 7.2.x.x

## Abp.VNext、WTM、FURION 框架集成

- [ShardingFrameWork](https://github.com/xuejmnet/ShardingWithFramework) demos

## 依赖

### ShardingCore 6.7.0.0之前版本

版本号:a.b.c.d其中,`a`表示 EfCore 版本号

| Release                                                | EF Core | .NET         | .NET (Core) |
| ------------------------------------------------------ | ------- | ------------ | ----------- |
| [6.x.x.x](https://www.nuget.org/packages/ShardingCore) | 6.0.0   | net 6.0      | 6.0+        |
| [5.x.x.x](https://www.nuget.org/packages/ShardingCore) | 5.0.10  | Standard 2.1 | 5.0+        |
| [3.x.x.x](https://www.nuget.org/packages/ShardingCore) | 3.1.18  | Standard 2.0 | 2.0+        |
| [2.x.x.x](https://www.nuget.org/packages/ShardingCore) | 2.2.6   | Standard 2.0 | 2.0+        |

### ShardingCore 6.7.0.0之后

版本号:a.b.c.d其中已无相关 EfCore 选择，使用条件编译绑定.net平台,6.7.0.0之后如果您是netcoreapp2那么直接使用efcore2，如果是netcoreapp3那么直接使用efcore3如果是net5就直接用efcore6依次类推

| Release                                                 | EF Core | .NET (Core)                   |
| ------------------------------------------------------- | ------- | ----------------------------- |
| [6.7.0.0+](https://www.nuget.org/packages/ShardingCore) | 6.x     | net6                          |
| [6.7.0.0+](https://www.nuget.org/packages/ShardingCore) | 5.x     | net5 or netstandard2.1        |
| [6.7.0.0+](https://www.nuget.org/packages/ShardingCore) | 3.x     | netcoreapp3 or netstandard2.0 |
| [6.7.0.0+](https://www.nuget.org/packages/ShardingCore) | 2.x     | netcoreapp2                   |

