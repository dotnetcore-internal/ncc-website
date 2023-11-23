SmartSql draws on MyBatis's ideas, uses XML to manage SQL, and provides several filter tags to eliminate various if/else judgment branches at the code level. SmartSql will manage your SQL and filter the tags to maintain your various conditional judgments at the code level to make your code more beautiful.

## Why Choose SmartSql?

The Orm,linq of the DotNet system, which is mostly Linq, is very good, eliminating the developer's reliance on SQL. But it ignores the fact that SQL itself is not complex, and that it is difficult for developers to write Linq to generate good performance SQL in complex query scenarios, and I believe that students who have used EF must have this experience: "I think about how SQL writes, and then I write Linq, It's over. You may also want to see what SQL output of Linq is like. " It was a very bad experience. To be absolutely optimized for SQL, developers must have absolute control over SQL. In addition, SQL itself is very simple, why add a layer of translators?

> SmartSql has been out of formal open source for more than two years, in the production environment after several micro-service verification. There are also some businesses that are using SmartSql (if you are also using SmartSql Welcome to submit issue)[Who is using SmartSql ](https://github.com/dotnetcore/SmartSql/issues/13). Has now joined [NCC ](https://github.com/dotnetcore)。 The future ([Roadmap-2019 ](https://github.com/dotnetcore/SmartSql/issues/47)) SmartSql will continue to add new features to help developers improve efficiency. Welcome to submit Issue [https://github.com/dotnetcore/SmartSql/issues ](https://github.com/dotnetcore/SmartSql/issues).

## So why not Dapper, or DbHelper?

Dapper is really good and good performance, but the code that will be ceded to you is filled with SQL and various judgment branches that will make code maintenance difficult to read and maintain. In addition, Dapper only provides DataReader to Entity anti-serialization function. And SmartSql offers a number of features to improve developer efficiency.

## Feature Overview

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

## Directory structure generated by SmartCode

![Directory Structure](/articles/projects/smartsql/assets/directory-structure.png)

