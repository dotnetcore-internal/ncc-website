RabbitMQ是實現了高級消息隊列協議（AMQP）的開源消息代理軟件（亦稱面向消息的中間件）。RabbitMQ 服務器是用 Erlang 語言編寫的，而聚類和故障轉移是構建在開源的通訊平台框架上的。所有主要的編程語言均有與代理接口通訊的客戶端庫。

CAP 支持使用 RabbitMQ 作為消息傳輸器。



CAP 直接對外提供的 RabbitMQ 配置參數如下：

| 配置項                   | 描述                                                         | 類型                  | 默認值            |
| ------------------------ | ------------------------------------------------------------ | :-------------------- | ----------------- |
| HostName                 | 宿主地址，如果要配置集群可以使用逗號分隔，例如 `192.168.1.111,192.168.1.112` | string                | localhost         |
| UserName                 | 用戶名                                                       | string                | guest             |
| Password                 | 密碼                                                         | string                | guest             |
| VirtualHost              | 虛擬主機                                                     | string                | /                 |
| Port                     | 端口號                                                       | int                   | -1                |
| ExchangeName             | CAP默認Exchange名稱                                          | string                | cap.default.topic |
| QueueArguments           | 隊列額外參數 x-arguments                                     | QueueArgumentsOptions | N/A               |
| ConnectionFactoryOptions | RabbitMQClient原生參數                                       | ConnectionFactory     | N/A               |
| CustomHeaders            | 訂閱者自定義頭信息                                           | 見下文                | N/A               |
| PublishConfirms          | 是否啟用[發布確認](https://www.rabbitmq.com/confirms.html#publisher-confirms) | bool                  | false             |
| BasicQosOptions          | 指定消費的[Qos](https://www.rabbitmq.com/consumer-prefetch.html) | BasicQos              | N/A               |



如果你需要 **更多** 原生 `ConnectionFactory` 相關的配置項，可以通過 `ConnectionFactoryOptions` 配置項進行設定：

```csharp
services.AddCap(x =>
{
    x.UseRabbitMQ(o =>
    {
        o.HostName = "localhost";
        o.ConnectionFactoryOptions = opt => { 
            //rabbitmq client ConnectionFactory config
        };
    });
});
```

更多請[閱讀文檔](https://cap.dotnetcore.xyz/user-guide/zh/transport/rabbitmq/)