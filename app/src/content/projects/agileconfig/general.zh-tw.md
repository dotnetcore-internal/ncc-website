## 概述

這是一個基於 .NET Core 的輕量級配置中心。

> 說起配置中心很容易讓人跟微服務聯系起來，如果你選擇微服務架構，那麼幾乎逃不了需要一個配置中心。
>
> 事實上我這裏並不是要蹭微服務的熱度。這個世界上有很多分布式程序但它並不是微服務。
>
> - 比如有很多傳統的 SOA 的應用采用分布式部署，但並不是完整的微服務架構 —— 這些程序由於分散在多個服務器上所以更改配置很困難。
> - 又或者某些程序即使不是分布式部署的，但是他們采用了容器化部署，他們修改配置同樣很費勁。

所以我開發了 AgileConfig（當然，並不是為了什麼微服務） —— 我更多的是為了那些分布式、容器化部署的應用能夠更加簡單的讀取、修改配置。

AgileConfig 秉承輕量化的特點，部署簡單、配置簡單、使用簡單、學習簡單，它只提取了必要的一些功能，並沒有像 Apollo 那樣複雜且龐大。但是它的功能也已經足夠你替換 `web.config`、`appsettings.json` 這些文件了。

如果你不想用微服務全家桶，不想為了部署一個配置中心而需要看 N 篇教程跟幾台服務器那麼你可以試試 AgileConfig ：）

## 特點

- 部署簡單，最少只需要一個數據節點，支持 Docker 部署
- 支持多節點分布式部署來保證高可用
- 配置支持按應用隔離，應用內配置支持分組隔離
- 支持多環境
- 應用支持繼承，可以把公共配置提取到一個應用然後其它應用繼承它
- 使用長連接技術，配置信息實時推送至客戶端
- 支持 `IConfiguration`、`IOptions` 模式讀取配置，原程序幾乎可以不用改造
- 配置修改支持版本記錄，隨時回滾配置
- 如果所有節點都故障，客戶端支持從本地緩存讀取配置
- 支持 RESTful API 維護配置

## 客戶端

- https://github.com/kklldog/AgileConfig_Client （.NET Core & .NET 5+）
- https://github.com/kklldog/AgileConfig.Client4FR （.NET Framework)
- https://github.com/kklldog/agileconfig-jclient （Java）

## 架構

![AgileConfig Architecture](/articles/projects/agileconfig/assets/architecture.png)

AgileConfig 的架構比較簡單，主要分為三部分：

### 客戶端

客戶端程序是一個 .NET Standard 2.0 類庫，十分方便接入 .NET Core / .NET 5+ 應用程序。

在 NuGet 中搜索 `agileconfig.client` 安裝即可。

可以在啟動客戶端的時候配置多個節點的地址：

- 客戶端會隨機挑選一個進行連接。連接成功後，將維持一個 WebSocket 長連接。
- 如果連接的節點發生故障導致連接中斷，則客戶端會繼續隨機一個節點進行連接，直到連接成功。

### 節點與管理程序

節點通過 ASP.NET Core 服務實現。為便於部署，開發團隊將管理程序與節點服務合二為一了。

任何一個節點都可以在啟動時配置環境變量，以便開啟管理程序功能。

### 數據庫

使用數據庫來存儲數據，目前支持 MSSQL、MySQL、Sqlite、PostgreSQL 和 Oracle 五種數據庫。

AgileConfig 最新版本通過 [NCC FreeSql](https://ncc.work/projects/freesql) 訪問數據庫，因此得到了 FreeSql 的強勁加持，特別是對國產數據庫的支持。

由於開發團隊目前沒有國產數據庫的測試環境，因此 AgileConfig 沒有直接對它們進行支持。如果需要，開發團隊可以為相關數據庫實現單開分支進行嘗試性支持，但具體的測試工作就需要用戶一起來配合了。

> 注意：如果使用 <= 1.0.4 之前版本的用戶請不要更新，因為 EFCore 跟 Freesql 自動建的庫可能存在稍許差異，保險起見不要更新吧。


