[Redis](https://redis.io/) 是一個開源（BSD許可）的，內存中的數據結構存儲系統，它可以用作數據庫、緩存和消息中間件。

[Redis Stream](https://redis.io/topics/streams-intro) 是 Redis 5.0 引入的一種新數據類型，它用一種僅附加的數據結構以更抽象的方式模擬日志數據結構。

Redis Streams 可以在 CAP 中用作消息傳輸器。



CAP 直接對外提供的 Redis Stream 配置參數如下：

| NAME               | DESCRIPTION                         | TYPE                 | DEFAULT              |
| ------------------ | ----------------------------------- | :------------------- | -------------------- |
| Configuration      | redis連接配置 (StackExchange.Redis) | ConfigurationOptions | ConfigurationOptions |
| StreamEntriesCount | 讀取時從 stream 返回的條目數        | uint                 | 10                   |
| ConnectionPoolSize | 連接池數                            | uint                 | 10                   |



如果需要**更多**原生Redis相關配置選項，您可以在 `Configuration` 選項中進行設置 :

```
services.AddCap(capOptions => 
{
    capOptions.UseRedis(redisOptions=>
    {
        // redis options.
        redisOptions.Configuration.EndPoints.Add(IPAddress.Loopback, 0);
    });
});
```

`Configuration` 是 StackExchange.Redis ConfigurationOptions ，您可以通過此[鏈接](https://stackexchange.github.io/StackExchange.Redis/Configuration)找到更多詳細信息。



### 流清理注意事項

由於redis streams 沒有自動刪除所有已經被所有組確認的消息的特性[issue](https://github.com/redis/redis/issues/5774)，所以你需要考慮是否使用腳本來執行定期刪除。