SmartSql 借鑒了 MyBatis 的思想，使用 XML 來管理 SQL ，並且提供了若幹個篩選器標簽來消除代碼層面的各種 if/else 的判斷分支。

SmartSql 將管理你的 SQL ，並且通過篩選標簽來維護本來你在代碼層面的各種條件判斷，使你的代碼更加優美。

##  為什麼選擇 SmartSql ？

DotNet 體系下大都是 Linq 系的 ORM，Linq 很好，消除了開發人員對 SQL 的依賴。 但卻忽視了一點，SQL 本身並不複雜，而且在複雜查詢場景當中開發人員很難通過編寫Linq來生成良好性能的SQL，相信使用過EF的同學一定有這樣的體驗：「我想好了Sql怎麼寫，然後再來寫Linq,完了可能還要再查看一下Linq輸出的Sql是什麼樣的「。這是非常糟糕的體驗。要想對Sql做絕對的優化，那麼開發者必須對Sql有絕對的控制權。另外Sql本身很簡單，為何要增加一層翻譯器呢？

> SmartSql 從正式開源已曆經倆年多的時間，在生產環境經過若幹個微服務驗證。 同時也有一部分企業正在使用 SmartSql （如果您也在使用 SmartSql 歡迎提交issue）[Who is using SmartSql ](https://github.com/dotnetcore/SmartSql/issues/13)。 目前已加入 [NCC ](https://github.com/dotnetcore)。 未來([Roadmap-2019 ](https://github.com/dotnetcore/SmartSql/issues/47)) SmartSql 也會持續加入一些新的特性來幫助開發者提升效率。歡迎提交 Issue [https://github.com/dotnetcore/SmartSql/issues ](https://github.com/dotnetcore/SmartSql/issues)。

## 那麼為什麼不是 Dapper，或者 DbHelper ？

Dapper 確實很好，並且又很好的性能，但是會讓給你的代碼裏邊充斥著 SQL 和各種判斷分支，這些將會使代碼維護難以閱讀和維護。另外 Dapper 只提供了DataReader 到 Entity 的反序列化功能。而 SmartSql 提供了大量的特性來提升開發者的效率。

## 特性概觀

![Overview](/articles/projects/smartsql/assets/SmartSql-features.png)

## NuGet Packages

| Package                                                      | NuGet Stable                                                 | Downloads                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [SmartSql](https://www.nuget.org/packages/SmartSql/) | [![SmartSql](https://img.shields.io/nuget/v/SmartSql.svg)](https://www.nuget.org/packages/SmartSql/) | [![SmartSql](https://img.shields.io/nuget/dt/SmartSql.svg)](https://www.nuget.org/packages/SmartSql/) |
| [SmartSql.Schema](https://www.nuget.org/packages/SmartSql.Schema/) | [![SmartSql.Schema](https://img.shields.io/nuget/v/SmartSql.Schema.svg)](https://www.nuget.org/packages/SmartSql.Schema/) | [![SmartSql.Schema](https://img.shields.io/nuget/dt/SmartSql.Schema.svg)](https://www.nuget.org/packages/SmartSql.Schema/) |
| [SmartSql.TypeHandler](https://www.nuget.org/packages/SmartSql.TypeHandler/) | [![SmartSql.TypeHandler](https://img.shields.io/nuget/v/SmartSql.TypeHandler.svg)](https://www.nuget.org/packages/SmartSql.TypeHandler/) | [![SmartSql.TypeHandler](https://img.shields.io/nuget/dt/SmartSql.TypeHandler.svg)](https://www.nuget.org/packages/SmartSql.TypeHandler/) |
| [SmartSql.DyRepository](https://www.nuget.org/packages/SmartSql.DyRepository/) | [![SmartSql.DyRepository](https://img.shields.io/nuget/v/SmartSql.DyRepository.svg)](https://www.nuget.org/packages/SmartSql.DyRepository/) | [![SmartSql.DyRepository](https://img.shields.io/nuget/dt/SmartSql.DyRepository.svg)](https://www.nuget.org/packages/SmartSql.DyRepository/) |
| [SmartSql.DIExtension](https://www.nuget.org/packages/SmartSql.DIExtension/) | [![SmartSql.DIExtension](https://img.shields.io/nuget/v/SmartSql.DIExtension.svg)](https://www.nuget.org/packages/SmartSql.DIExtension/) | [![SmartSql.DIExtension](https://img.shields.io/nuget/dt/SmartSql.DIExtension.svg)](https://www.nuget.org/packages/SmartSql.DIExtension/) |
| [SmartSql.Cache.Redis](https://www.nuget.org/packages/SmartSql.Cache.Redis/) | [![SmartSql.Cache.Redis](https://img.shields.io/nuget/v/SmartSql.Cache.Redis.svg)](https://www.nuget.org/packages/SmartSql.Cache.Redis/) | [![SmartSql.Cache.Redis](https://img.shields.io/nuget/dt/SmartSql.Cache.Redis.svg)](https://www.nuget.org/packages/SmartSql.Cache.Redis/) |
| [SmartSql.ScriptTag](https://www.nuget.org/packages/SmartSql.ScriptTag/) | [![SmartSql.ScriptTag](https://img.shields.io/nuget/v/SmartSql.ScriptTag.svg)](https://www.nuget.org/packages/SmartSql.ScriptTag/) | [![SmartSql.ScriptTag](https://img.shields.io/nuget/dt/SmartSql.ScriptTag.svg)](https://www.nuget.org/packages/SmartSql.ScriptTag/) |
| [SmartSql.AOP](https://www.nuget.org/packages/SmartSql.AOP/) | [![SmartSql.AOP](https://img.shields.io/nuget/v/SmartSql.AOP.svg)](https://www.nuget.org/packages/SmartSql.AOP/) | [![SmartSql.AOP](https://img.shields.io/nuget/dt/SmartSql.AOP.svg)](https://www.nuget.org/packages/SmartSql.AOP/) |
| [SmartSql.Options](https://www.nuget.org/packages/SmartSql.Options/) | [![SmartSql.Options](https://img.shields.io/nuget/v/SmartSql.Options.svg)](https://www.nuget.org/packages/SmartSql.Options/) | [![SmartSql.Options](https://img.shields.io/nuget/dt/SmartSql.Options.svg)](https://www.nuget.org/packages/SmartSql.Options/) |
| [SmartSql.Bulk](https://www.nuget.org/packages/SmartSql.Bulk/) | [![SmartSql.Bulk](https://img.shields.io/nuget/v/SmartSql.Bulk.svg)](https://www.nuget.org/packages/SmartSql.Bulk/) | [![SmartSql.Bulk](https://img.shields.io/nuget/dt/SmartSql.Bulk.svg)](https://www.nuget.org/packages/SmartSql.Bulk/) |
| [SmartSql.Bulk.SqlServer](https://www.nuget.org/packages/SmartSql.Bulk.SqlServer/) | [![SmartSql.Bulk.SqlServer](https://img.shields.io/nuget/v/SmartSql.Bulk.SqlServer.svg)](https://www.nuget.org/packages/SmartSql.Bulk.SqlServer/) | [![SmartSql.Bulk.SqlServer](https://img.shields.io/nuget/dt/SmartSql.Bulk.SqlServer.svg)](https://www.nuget.org/packages/SmartSql.Bulk.SqlServer/) |
| [SmartSql.Bulk.PostgreSql](https://www.nuget.org/packages/SmartSql.Bulk.PostgreSql/) | [![SmartSql.Bulk.PostgreSql](https://img.shields.io/nuget/v/SmartSql.Bulk.PostgreSql.svg)](https://www.nuget.org/packages/SmartSql.Bulk.PostgreSql/) | [![SmartSql.Bulk.PostgreSql](https://img.shields.io/nuget/dt/SmartSql.Bulk.PostgreSql.svg)](https://www.nuget.org/packages/SmartSql.Bulk.PostgreSql/) |
| [SmartSql.Bulk.MySql](https://www.nuget.org/packages/SmartSql.Bulk.MySql/) | [![SmartSql.Bulk.MySql](https://img.shields.io/nuget/v/SmartSql.Bulk.MySql.svg)](https://www.nuget.org/packages/SmartSql.Bulk.MySql/) | [![SmartSql.Bulk.MySql](https://img.shields.io/nuget/dt/SmartSql.Bulk.MySql.svg)](https://www.nuget.org/packages/SmartSql.Bulk.MySql/) |
| [SmartSql.Bulk.MySqlConnector](https://www.nuget.org/packages/SmartSql.Bulk.MySqlConnector/) | [![SmartSql.Bulk.MySqlConnector](https://img.shields.io/nuget/v/SmartSql.Bulk.MySqlConnector.svg)](https://www.nuget.org/packages/SmartSql.Bulk.MySqlConnector/) | [![SmartSql.Bulk.MySqlConnector](https://img.shields.io/nuget/dt/SmartSql.Bulk.MySqlConnector.svg)](https://www.nuget.org/packages/SmartSql.Bulk.MySqlConnector/) |

## SmartCode 生成的目錄結構

![Directory Structure](/content/projects/smartsql/assets/directory-structure.png)



