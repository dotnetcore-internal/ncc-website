CAP 需要使用具有持久化功能的存儲介質來存儲事件消息，例如通過數據庫或者其他NoSql設施。CAP 使用這種方式來應對一切環境或者網絡異常導致消息丟失的情況，消息的可靠性是分布式事務的基石，所以在任何情況下消息都不能丟失。



### 發送前

在消息進入到消息隊列之前，CAP使用本地數據庫表對消息進行持久化，這樣可以保證當消息隊列出現異常或者網絡錯誤時候消息是沒有丟失的。

為了保證這種機制的可靠性，CAP使用和業務代碼相同的數據庫事務來保證業務操作和CAP的消息在持久化的過程中是強一致的。也就是說在進行消息持久化的過程中，任何一方發生異常情況數據庫都會進行回滾操作。

### 發送後

消息進入到消息隊列之後，CAP會啟動消息隊列的持久化功能，我們需要說明一下在 RabbitMQ 和 Kafka 中CAP的消息是如何持久化的。

針對於 RabbitMQ 中的消息持久化，CAP 使用的是具有消息持久化功能的消費者隊列，但是這裏面可能有例外情況，參加 2.2.1 章節。

由於 Kafka 天生設計的就是使用文件進行的消息持久化，在所以在消息進入到Kafka之後，Kafka會保證消息能夠正確被持久化而不丟失。



### 支持的存儲

CAP 支持以下幾種具有事務支持的數據庫做為存儲：

- [SQL Server](https://cap.dotnetcore.xyz/user-guide/zh/storage/sqlserver/)
- [MySQL](https://cap.dotnetcore.xyz/user-guide/zh/storage/mysql/)
- [PostgreSql](https://cap.dotnetcore.xyz/user-guide/zh/storage/postgresql/)
- [MongoDB](https://cap.dotnetcore.xyz/user-guide/zh/storage/mongodb/)
- [In-Memory Storage](https://cap.dotnetcore.xyz/user-guide/zh/storage/in-memory-storage/)

在 CAP 啟動後，會向持久化介質中生成兩個表，默認情況下名稱為：`Cap.Published` `Cap.Received`。



### 社區支持的持久化

感謝社區對CAP的支持，以下是社區支持的持久化的實現

- SQLite ([@colinin](https://github.com/colinin)) ：https://github.com/colinin/DotNetCore.CAP.Sqlite
- LiteDB ([@maikebing](https://github.com/maikebing)) ：https://github.com/maikebing/CAP.Extensions
- SQLite & Oracle ([@cocosip](https://github.com/cocosip)) ：https://github.com/cocosip/CAP-Extensions
- SmartSql ([@xiangxiren](https://github.com/xiangxiren)) ：https://github.com/xiangxiren/SmartSql.CAP