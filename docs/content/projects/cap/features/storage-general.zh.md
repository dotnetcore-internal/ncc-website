CAP 需要使用具有持久化功能的存储介质来存储事件消息，例如通过数据库或者其他NoSql设施。CAP 使用这种方式来应对一切环境或者网络异常导致消息丢失的情况，消息的可靠性是分布式事务的基石，所以在任何情况下消息都不能丢失。



### 发送前

在消息进入到消息队列之前，CAP使用本地数据库表对消息进行持久化，这样可以保证当消息队列出现异常或者网络错误时候消息是没有丢失的。

为了保证这种机制的可靠性，CAP使用和业务代码相同的数据库事务来保证业务操作和CAP的消息在持久化的过程中是强一致的。也就是说在进行消息持久化的过程中，任何一方发生异常情况数据库都会进行回滚操作。

### 发送后

消息进入到消息队列之后，CAP会启动消息队列的持久化功能，我们需要说明一下在 RabbitMQ 和 Kafka 中CAP的消息是如何持久化的。

针对于 RabbitMQ 中的消息持久化，CAP 使用的是具有消息持久化功能的消费者队列，但是这里面可能有例外情况，参加 2.2.1 章节。

由于 Kafka 天生设计的就是使用文件进行的消息持久化，在所以在消息进入到Kafka之后，Kafka会保证消息能够正确被持久化而不丢失。



### 支持的存储

CAP 支持以下几种具有事务支持的数据库做为存储：

- [SQL Server](https://cap.dotnetcore.xyz/user-guide/zh/storage/sqlserver/)
- [MySQL](https://cap.dotnetcore.xyz/user-guide/zh/storage/mysql/)
- [PostgreSql](https://cap.dotnetcore.xyz/user-guide/zh/storage/postgresql/)
- [MongoDB](https://cap.dotnetcore.xyz/user-guide/zh/storage/mongodb/)
- [In-Memory Storage](https://cap.dotnetcore.xyz/user-guide/zh/storage/in-memory-storage/)

在 CAP 启动后，会向持久化介质中生成两个表，默认情况下名称为：`Cap.Published` `Cap.Received`。



### 社区支持的持久化

感谢社区对CAP的支持，以下是社区支持的持久化的实现

- SQLite ([@colinin](https://github.com/colinin)) ：https://github.com/colinin/DotNetCore.CAP.Sqlite
- LiteDB ([@maikebing](https://github.com/maikebing)) ：https://github.com/maikebing/CAP.Extensions
- SQLite & Oracle ([@cocosip](https://github.com/cocosip)) ：https://github.com/cocosip/CAP-Extensions
- SmartSql ([@xiangxiren](https://github.com/xiangxiren)) ：https://github.com/xiangxiren/SmartSql.CAP