RabbitMQ is an open-source message-broker software that originally implemented the Advanced Message Queuing Protocol and has since been extended with a plug-in architecture to support Streaming Text Oriented Messaging Protocol, Message Queuing Telemetry Transport, and other protocols.

RabbitMQ can be used in CAP as a message transporter.



The RabbitMQ configuration parameters provided directly by CAP:

| NAME                     | DESCRIPTION                                                  | TYPE                  | DEFAULT           |
| ------------------------ | ------------------------------------------------------------ | :-------------------- | ----------------- |
| HostName                 | Broker host address                                          | string                | localhost         |
| UserName                 | Broker user name                                             | string                | guest             |
| Password                 | Broker password                                              | string                | guest             |
| VirtualHost              | Broker virtual host                                          | string                | /                 |
| Port                     | Port                                                         | int                   | -1                |
| ExchangeName             | Default exchange name                                        | string                | cap.default.topic |
| QueueArguments           | Extra queue `x-arguments`                                    | QueueArgumentsOptions | N/A               |
| ConnectionFactoryOptions | RabbitMQClient native connection options                     | ConnectionFactory     | N/A               |
| CustomHeaders            | Custom subscribe headers                                     | See the blow          | N/A               |
| PublishConfirms          | Enable [publish confirms](https://www.rabbitmq.com/confirms.html#publisher-confirms) | bool                  | false             |
| BasicQosOptions          | Specify [Qos](https://www.rabbitmq.com/consumer-prefetch.html) of message prefetch | BasicQos              | N/A               |



If you need **more** native `ConnectionFactory` configuration options, you can set it by 'ConnectionFactoryOptions' option:

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



For more detail, please view the [documentation](https://cap.dotnetcore.xyz/user-guide/en/transport/rabbitmq/).