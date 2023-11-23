[TOC]

## 安裝

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

## 初始化資料庫

用戶只需要手工建一個空庫，所有的表在第一次啟動的時候都會自動生成。

目前支持 MSSQL、MySQL、Sqlite、PostgreSQL 和 Oracle 五種數據庫。

Provider 對照：

- sqlserver = SqlServer
- mysql = MySql
- sqlite = Sqlite
- npgsql = PostgreSql
- oracle = Oracle

## 演示項目

### 服务端

演示地址： [AgileConfig Server Demo](http://agileconfig_server.xbaby.xyz/)

- 用戶名： `admin`
- 密碼： `123456`

### 客户端

- [AgileConfig MVC Sample](https://github.com/kklldog/AgileConfig_Client/tree/master/AgileConfigMVCSample)
- [AgileConfig WPF Sample](https://github.com/kklldog/AgileConfig_Client/tree/master/AgileConfigWPFSample)
- [AgileConfig Console Sample](https://github.com/kklldog/AgileConfig_Client/tree/master/AgileConfigConsoleSample)