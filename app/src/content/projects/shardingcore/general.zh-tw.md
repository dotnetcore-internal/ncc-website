## 簡介

`ShardingCore`主旨是增加 EfCore，針對 EfCore 的分片方面進行增強，並且不對 EfCore 的業務代碼進行侵入。不解決數據庫層面的問題，編寫複雜 SQL —— 如果在 SQL 層面是慢的，那麼 ShardingCore 也是無能為力的。

## 如何選擇版本

- 【ShardingCore 最新版本】.【EfCore 版本】.x.x
- 版本號第一位是 ShardingCore 的版本號使用最大的即可
- 版本號第二位是 EfCore 版本號使用對應的版本號即可
- 最後兩位版本號使用最大即可
- EfCore 7 使用 ShardingCore 7.7.x.x，
- EfCore 6 使用 ShardingCore 7.6.x.x，
- EfCore 5 使用 ShardingCore 7.5.x.x，
- EfCore 3 使用 ShardingCore 7.3.x.x，
- EfCore 2 使用 ShardingCore 7.2.x.x

## Abp.VNext、WTM、FURION 框架集成

- [ShardingFrameWork](https://github.com/xuejmnet/ShardingWithFramework) demos

## 依賴

### ShardingCore 6.7.0.0之前版本

版本號:a.b.c.d其中,`a`表示 EfCore 版本號

| Release                                                | EF Core | .NET         | .NET (Core) |
| ------------------------------------------------------ | ------- | ------------ | ----------- |
| [6.x.x.x](https://www.nuget.org/packages/ShardingCore) | 6.0.0   | net 6.0      | 6.0+        |
| [5.x.x.x](https://www.nuget.org/packages/ShardingCore) | 5.0.10  | Standard 2.1 | 5.0+        |
| [3.x.x.x](https://www.nuget.org/packages/ShardingCore) | 3.1.18  | Standard 2.0 | 2.0+        |
| [2.x.x.x](https://www.nuget.org/packages/ShardingCore) | 2.2.6   | Standard 2.0 | 2.0+        |

### ShardingCore 6.7.0.0之後

版本號:a.b.c.d其中已無相關 EfCore 選擇，使用條件編譯綁定.net平台,6.7.0.0之後如果您是netcoreapp2那麼直接使用efcore2，如果是netcoreapp3那麼直接使用efcore3如果是net5就直接用efcore6依次類推

| Release                                                 | EF Core | .NET (Core)                   |
| ------------------------------------------------------- | ------- | ----------------------------- |
| [6.7.0.0+](https://www.nuget.org/packages/ShardingCore) | 6.x     | net6                          |
| [6.7.0.0+](https://www.nuget.org/packages/ShardingCore) | 5.x     | net5 or netstandard2.1        |
| [6.7.0.0+](https://www.nuget.org/packages/ShardingCore) | 3.x     | netcoreapp3 or netstandard2.0 |
| [6.7.0.0+](https://www.nuget.org/packages/ShardingCore) | 2.x     | netcoreapp2                   |


