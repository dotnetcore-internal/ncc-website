RabbitMQ是实现了高级消息队列协议（AMQP）的开源消息代理软件（亦称面向消息的中间件）。RabbitMQ 服务器是用 Erlang 语言编写的，而聚类和故障转移是构建在开源的通讯平台框架上的。所有主要的编程语言均有与代理接口通讯的客户端库。

CAP 支持使用 RabbitMQ 作为消息传输器。



CAP 直接对外提供的 RabbitMQ 配置参数如下：

| 配置项                   | 描述                                                         | 类型                  | 默认值            |
| ------------------------ | ------------------------------------------------------------ | :-------------------- | ----------------- |
| HostName                 | 宿主地址，如果要配置集群可以使用逗号分隔，例如 `192.168.1.111,192.168.1.112` | string                | localhost         |
| UserName                 | 用户名                                                       | string                | guest             |
| Password                 | 密码                                                         | string                | guest             |
| VirtualHost              | 虚拟主机                                                     | string                | /                 |
| Port                     | 端口号                                                       | int                   | -1                |
| ExchangeName             | CAP默认Exchange名称                                          | string                | cap.default.topic |
| QueueArguments           | 队列额外参数 x-arguments                                     | QueueArgumentsOptions | N/A               |
| ConnectionFactoryOptions | RabbitMQClient原生参数                                       | ConnectionFactory     | N/A               |
| CustomHeaders            | 订阅者自定义头信息                                           | 见下文                | N/A               |
| PublishConfirms          | 是否启用[发布确认](https://www.rabbitmq.com/confirms.html#publisher-confirms) | bool                  | false             |
| BasicQosOptions          | 指定消费的[Qos](https://www.rabbitmq.com/consumer-prefetch.html) | BasicQos              | N/A               |



如果你需要 **更多** 原生 `ConnectionFactory` 相关的配置项，可以通过 `ConnectionFactoryOptions` 配置项进行设定：

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

更多请[阅读文档](https://cap.dotnetcore.xyz/user-guide/zh/transport/rabbitmq/)