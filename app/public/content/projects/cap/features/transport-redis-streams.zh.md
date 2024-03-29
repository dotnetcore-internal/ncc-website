[Redis](https://redis.io/) 是一个开源（BSD许可）的，内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件。

[Redis Stream](https://redis.io/topics/streams-intro) 是 Redis 5.0 引入的一种新数据类型，它用一种仅附加的数据结构以更抽象的方式模拟日志数据结构。

Redis Streams 可以在 CAP 中用作消息传输器。



CAP 直接对外提供的 Redis Stream 配置参数如下：

| NAME               | DESCRIPTION                         | TYPE                 | DEFAULT              |
| ------------------ | ----------------------------------- | :------------------- | -------------------- |
| Configuration      | redis连接配置 (StackExchange.Redis) | ConfigurationOptions | ConfigurationOptions |
| StreamEntriesCount | 读取时从 stream 返回的条目数        | uint                 | 10                   |
| ConnectionPoolSize | 连接池数                            | uint                 | 10                   |



如果需要**更多**原生Redis相关配置选项，您可以在 `Configuration` 选项中进行设置 :

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

`Configuration` 是 StackExchange.Redis ConfigurationOptions ，您可以通过此[链接](https://stackexchange.github.io/StackExchange.Redis/Configuration)找到更多详细信息。



### 流清理注意事项

由于redis streams 没有自动删除所有已经被所有组确认的消息的特性[issue](https://github.com/redis/redis/issues/5774)，所以你需要考虑是否使用脚本来执行定期删除。