AWS SQS 是一种完全托管的消息队列服务，可让您分离和扩展微服务、分布式系统和无服务器应用程序。

AWS SNS 是一种高度可用、持久、安全、完全托管的发布/订阅消息收发服务，可以轻松分离微服务、分布式系统和无服务器应用程序。



由于 CAP 是基于 Topic 模式工作的，所以需要使用到 AWS SNS，SNS 简化了消息的发布订阅架构。



针对每个消费者组，CAP 将创建一个与之对应的 SQS 队列，队列的名称为配置项中 DefaultGroup 的名称，类型为 Standard Queue 。



CAP 直接对外提供的 AmazonSQSOptions 配置参数如下：

| NAME        | DESCRIPTION    | TYPE                          | DEFAULT |
| ----------- | -------------- | :---------------------------- | ------- |
| Region      | AWS 所处的区域 | Amazon.RegionEndpoint         |         |
| Credentials | AWS AK SK信息  | Amazon.Runtime.AWSCredentials |         |

如果你的项目运行在 AWS EC2 中，则不需要设置 Credentials，直接对 EC2 应用 IAM 策略即可。

Credentials 需要具有新增和订阅 SNS Topic，SQS Queue 等权限。



更多细节请[查阅文档](https://cap.dotnetcore.xyz/user-guide/zh/transport/aws-sqs/)。