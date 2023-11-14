MongoDB 是一個跨平台的面向文檔型的數據庫程序，它被歸為 NOSQL 數據庫，CAP 從 2.3 版本開始支持 MongoDB 作為消息存儲。

MongoDB 從 4.0 版本開始支持 ACID 事務，所以 CAP 也只支持 4.0 以上的 MongoDB，並且 MongoDB 需要部署為集群，因為 MongoDB 的 ACID 事務需要集群才可以使用。

有關開發環境如何快速搭建 MongoDB 4.0+ 集群，你可以我的參考 [這篇文章](https://www.cnblogs.com/savorboard/p/mongodb-4-cluster-install.html)。



下面的示例展示了如何利用 CAP 和 MongoDB 進行本地事務集成。

```csharp
//NOTE: before your test, your need to create database and collection at first
//注意：MongoDB 不能在事務中創建數據庫和集合，所以你需要單獨創建它們，模擬一條記錄插入則會自動創建        
//var mycollection = _client.GetDatabase("test").GetCollection<BsonDocument>("test.collection");
//mycollection.InsertOne(new BsonDocument { { "test", "test" } });

using (var session = _client.StartTransaction(_capBus, autoCommit: false))
{
    var collection = _client.GetDatabase("test").GetCollection<BsonDocument>("test.collection");
    collection.InsertOne(session, new BsonDocument { { "hello", "world" } });

    _capBus.Publish("sample.rabbitmq.mongodb", DateTime.Now);

    session.CommitTransaction();
}
```