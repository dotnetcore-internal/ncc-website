## Q: 学习和讨论 CAP 的任何即时通讯群（例如腾讯 QQ 群）？

没有。我希望开发者能够更加独立地思考，并通过参考文档自己解决问题，甚至在出现错误时创建问题或发送电子邮件。

## Q: CAP 是否需要为生产者和消费者使用不同的数据库？

不需要，建议为每个程序使用专用数据库。

否则，请参考以下问答。

## Q: 如何为不同的应用程序使用相同的数据库？

在 `ConfigureServices` 方法中定义表前缀名称。

代码示例：

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddCap(x =>
    {
        x.UseKafka("");
        x.UseMySql(opt =>
        {
            opt.ConnectionString = "connection string";
            opt.TableNamePrefix = "appone"; // 在此处设置不同的表名前缀
        });
    });
}
```

## Q: CAP 能否不使用数据库作为事件存储？我只想发送消息

目前还不能。

CAP 的目的是在微服务或 SOA 架构中确保一致性原则。该解决方案基于数据库的 ACID 特性，没有数据库的单个客户端包装器消息队列没有意义。

## Q: 如果消费者异常，是否可以回滚生产者已经执行的数据库操作？

不能回滚，CAP 是最终一致性解决方案。

可以将您的场景想象为调用第三方支付。如果您在成功调用支付宝接口后，自己的代码出现错误，支付宝会回滚吗？如果不回滚，您应该怎么做？这里也是同理。