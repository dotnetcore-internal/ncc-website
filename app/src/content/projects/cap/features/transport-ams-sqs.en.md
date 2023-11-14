AWS SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.

AWS SNS is a highly available, durable, secure, fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and serverless applications.



Because CAP works based on the topic pattern, it needs to use AWS SNS, which simplifies the publish and subscribe architecture of messages.



For each consumer group, CAP will create a corresponding SQS queue, the name of the queue is the name of the `DefaultGroup` in the configuration options, and the queue type is Standard.



The SQS configuration parameters provided directly by the CAP:

| NAME        | DESCRIPTION           | TYPE                          | DEFAULT |
| ----------- | --------------------- | :---------------------------- | ------- |
| Region      | AWS Region            | Amazon.RegionEndpoint         |         |
| Credentials | AWS AK SK Information | Amazon.Runtime.AWSCredentials |         |

If your project runs in AWS EC2, you don't need to set Credentials, you can directly apply IAM policy for EC2.

Credentials requires the SNS,SQS IAM policy.



For more details, please [check the documentation](https://cap.dotnetcore.xyz/user-guide/en/transport/aws-sqs/).