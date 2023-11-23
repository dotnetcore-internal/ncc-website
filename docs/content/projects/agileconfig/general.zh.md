[TOC]

## 概述

这是一个基于 .NET Core 的轻量级配置中心。

> 说起配置中心很容易让人跟微服务联系起来，如果你选择微服务架构，那么几乎逃不了需要一个配置中心。
> 
> 事实上我这里并不是要蹭微服务的热度。这个世界上有很多分布式程序但它并不是微服务。
> 
> - 比如有很多传统的 SOA 的应用采用分布式部署，但并不是完整的微服务架构 —— 这些程序由于分散在多个服务器上所以更改配置很困难。
> - 又或者某些程序即使不是分布式部署的，但是他们采用了容器化部署，他们修改配置同样很费劲。

所以我开发了 AgileConfig（当然，并不是为了什么微服务） —— 我更多的是为了那些分布式、容器化部署的应用能够更加简单的读取、修改配置。

AgileConfig 秉承轻量化的特点，部署简单、配置简单、使用简单、学习简单，它只提取了必要的一些功能，并没有像 Apollo 那样复杂且庞大。但是它的功能也已经足够你替换 `web.config`、`appsettings.json` 这些文件了。

如果你不想用微服务全家桶，不想为了部署一个配置中心而需要看 N 篇教程跟几台服务器那么你可以试试 AgileConfig ：）

## 特点

- 部署简单，最少只需要一个数据节点，支持 Docker 部署 
- 支持多节点分布式部署来保证高可用 
- 配置支持按应用隔离，应用内配置支持分组隔离 
- 支持多环境 
- 应用支持继承，可以把公共配置提取到一个应用然后其它应用继承它 
- 使用长连接技术，配置信息实时推送至客户端 
- 支持 `IConfiguration`、`IOptions` 模式读取配置，原程序几乎可以不用改造 
- 配置修改支持版本记录，随时回滚配置 
- 如果所有节点都故障，客户端支持从本地缓存读取配置 
- 支持 RESTful API 维护配置

## 客户端

- https://github.com/kklldog/AgileConfig_Client （.NET Core & .NET 5+）
- https://github.com/kklldog/AgileConfig.Client4FR （.NET Framework)
- https://github.com/kklldog/agileconfig-jclient （Java）

## 架构

![AgileConfig Architecture](/articles/projects/agileconfig/assets/architecture.png)

AgileConfig 的架构比较简单，主要分为三部分：

### 客户端

客户端程序是一个 .NET Standard 2.0 类库，十分方便接入 .NET Core / .NET 5+ 应用程序。

在 NuGet 中搜索 `agileconfig.client` 安装即可。

可以在启动客户端的时候配置多个节点的地址：

- 客户端会随机挑选一个进行连接。连接成功后，将维持一个 WebSocket 长连接。 
- 如果连接的节点发生故障导致连接中断，则客户端会继续随机一个节点进行连接，直到连接成功。

### 节点与管理程序

节点通过 ASP.NET Core 服务实现。为便于部署，开发团队将管理程序与节点服务合二为一了。

任何一个节点都可以在启动时配置环境变量，以便开启管理程序功能。

### 数据库

使用数据库来存储数据，目前支持 MSSQL、MySQL、Sqlite、PostgreSQL 和 Oracle 五种数据库。

AgileConfig 最新版本通过 [NCC FreeSql](https://ncc.work/projects/freesql) 访问数据库，因此得到了 FreeSql 的强劲加持，特别是对国产数据库的支持。

由于开发团队目前没有国产数据库的测试环境，因此 AgileConfig 没有直接对它们进行支持。如果需要，开发团队可以为相关数据库实现单开分支进行尝试性支持，但具体的测试工作就需要用户一起来配合了。

> 注意：如果使用 <= 1.0.4 之前版本的用户请不要更新，因为 EFCore 跟 Freesql 自动建的库可能存在稍许差异，保险起见不要更新吧。