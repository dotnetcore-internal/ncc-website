SmartSql 借鉴了 MyBatis 的思想，使用 XML 来管理 SQL ，并且提供了若干个筛选器标签来消除代码层面的各种 if/else 的判断分支。

SmartSql 将管理你的 SQL ，并且通过筛选标签来维护本来你在代码层面的各种条件判断，使你的代码更加优美。

##  为什么选择 SmartSql ？

DotNet 体系下大都是 Linq 系的 ORM，Linq 很好，消除了开发人员对 SQL 的依赖。 但却忽视了一点，SQL 本身并不复杂，而且在复杂查询场景当中开发人员很难通过编写Linq来生成良好性能的SQL，相信使用过EF的同学一定有这样的体验：“我想好了Sql怎么写，然后再来写Linq,完了可能还要再查看一下Linq输出的Sql是什么样的“。这是非常糟糕的体验。要想对Sql做绝对的优化，那么开发者必须对Sql有绝对的控制权。另外Sql本身很简单，为何要增加一层翻译器呢？

> SmartSql 从正式开源已历经俩年多的时间，在生产环境经过若干个微服务验证。 同时也有一部分企业正在使用 SmartSql （如果您也在使用 SmartSql 欢迎提交issue）[Who is using SmartSql ](https://github.com/dotnetcore/SmartSql/issues/13)。 目前已加入 [NCC ](https://github.com/dotnetcore)。 未来([Roadmap-2019 ](https://github.com/dotnetcore/SmartSql/issues/47)) SmartSql 也会持续加入一些新的特性来帮助开发者提升效率。欢迎提交 Issue [https://github.com/dotnetcore/SmartSql/issues ](https://github.com/dotnetcore/SmartSql/issues)。

## 那么为什么不是 Dapper，或者 DbHelper ？

Dapper 确实很好，并且又很好的性能，但是会让给你的代码里边充斥着 SQL 和各种判断分支，这些将会使代码维护难以阅读和维护。另外 Dapper 只提供了DataReader 到 Entity 的反序列化功能。而 SmartSql 提供了大量的特性来提升开发者的效率。

## 特性概览

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

## SmartCode 生成的目录结构

![Directory Structure](/articles/projects/smartsql/assets/directory-structure.png)




