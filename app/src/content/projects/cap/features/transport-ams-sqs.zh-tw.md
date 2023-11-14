AWS SQS 是一種完全托管的消息隊列服務，可讓您分離和擴展微服務、分布式系統和無服務器應用程序。

AWS SNS 是一種高度可用、持久、安全、完全托管的發布/訂閱消息收發服務，可以輕松分離微服務、分布式系統和無服務器應用程序。



由於 CAP 是基於 Topic 模式工作的，所以需要使用到 AWS SNS，SNS 簡化了消息的發布訂閱架構。



針對每個消費者組，CAP 將創建一個與之對應的 SQS 隊列，隊列的名稱為配置項中 DefaultGroup 的名稱，類型為 Standard Queue 。



CAP 直接對外提供的 AmazonSQSOptions 配置參數如下：

| NAME        | DESCRIPTION    | TYPE                          | DEFAULT |
| ----------- | -------------- | :---------------------------- | ------- |
| Region      | AWS 所處的區域 | Amazon.RegionEndpoint         |         |
| Credentials | AWS AK SK信息  | Amazon.Runtime.AWSCredentials |         |

如果你的項目運行在 AWS EC2 中，則不需要設置 Credentials，直接對 EC2 應用 IAM 策略即可。

Credentials 需要具有新增和訂閱 SNS Topic，SQS Queue 等權限。



更多細節請[查閱文檔](https://cap.dotnetcore.xyz/user-guide/zh/transport/aws-sqs/)。