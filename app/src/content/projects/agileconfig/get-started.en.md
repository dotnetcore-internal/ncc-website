## Installation

AgileConfig Client: 
- https://github.com/kklldog/AgileConfig_Client (.NET Core & .NET 5+)
- https://github.com/kklldog/AgileConfig.Client4FR （.NET Framework)

```shell
# For .NET Core & .NET 5+
Install-Package AgileConfig.Client

# For .NET Framework
Install-Package AgileConfig.Client4FR -Version 1.0.2
```

## Initialized Database

Users only need to manually create an empty database, and all tables will be automatically generated when the system starts for the first time.

Currently, it supports five databases: MSSQL, MySQL, Sqlite, PostgreSQL, and Oracle.

All Providers：

- sqlserver = SqlServer
- mysql = MySql
- sqlite = Sqlite
- npgsql = PostgreSql
- oracle = Oracle

## Demo Project

### Server Demonstration

Demo Address： [AgileConfig Server Demo](http://agileconfig_server.xbaby.xyz/)

- Username: `admin`
- Password: `123456`

### Client Demonstration

- [AgileConfig MVC Sample](https://github.com/kklldog/AgileConfig_Client/tree/master/AgileConfigMVCSample)
- [AgileConfig WPF Sample](https://github.com/kklldog/AgileConfig_Client/tree/master/AgileConfigWPFSample)
- [AgileConfig Console Sample](https://github.com/kklldog/AgileConfig_Client/tree/master/AgileConfigConsoleSample)