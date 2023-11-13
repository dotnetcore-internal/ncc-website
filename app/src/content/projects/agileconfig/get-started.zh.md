## 安装

AgileConfig Client:
- https://github.com/kklldog/AgileConfig_Client （.NET Core & .NET 5+）
- https://github.com/kklldog/AgileConfig.Client4FR （.NET Framework)
- https://github.com/kklldog/agileconfig-jclient （Java）

```shell
# For .NET Core & .NET 5+
Install-Package AgileConfig.Client

# For .NET Framework
Install-Package AgileConfig.Client4FR -Version 1.0.2
```

## 初始化数据库

用户只需要手工建一个空库，所有的表在第一次启动的时候都会自动生成。

目前支持 MSSQL、MySQL、Sqlite、PostgreSQL 和 Oracle 五种数据库。

Provider 对照：

- sqlserver = SqlServer
- mysql = MySql
- sqlite = Sqlite
- npgsql = PostgreSql
- oracle = Oracle

## 演示项目

### 服務端

演示地址： [AgileConfig Server Demo](http://agileconfig_server.xbaby.xyz/)

- 用户名： `admin`
- 密码： `123456`

### 客戶端

- [AgileConfig MVC Sample](https://github.com/kklldog/AgileConfig_Client/tree/master/AgileConfigMVCSample)
- [AgileConfig WPF Sample](https://github.com/kklldog/AgileConfig_Client/tree/master/AgileConfigWPFSample)
- [AgileConfig Console Sample](https://github.com/kklldog/AgileConfig_Client/tree/master/AgileConfigConsoleSample)
