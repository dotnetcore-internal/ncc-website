在数据库中，更改数据捕获（CDC）是一组软件设计模式，用于确定和跟踪已更改的数据，以便可以使用已更改的数据来采取措施。CanalSharp 是阿里巴巴开源项目 mysql 数据库 binlog 的增量订阅&消费组件 Canal 的 .NET 客户端，Canal 是 mysql 数据库的一种 cdc 组件。

## 什么是 Canal

![Canal](/content/projects/canalsharp/assets/canal.png)

早期阿里巴巴因为杭州和美国双机房部署，存在跨机房同步的业务需求，实现方式主要是基于业务 trigger 获取增量变更。从 2010 年开始，业务逐步尝试数据库日志解析获取增量变更进行同步，由此衍生出了大量的数据库增量订阅和消费业务。

基于日志增量订阅和消费的业务包括

- 数据库镜像
- 数据库实时备份
- 索引构建和实时维护(拆分异构索引、倒排索引等)
- 业务 cache 刷新
- 带业务逻辑的增量数据处理

当前的 canal 支持源端 MySQL 版本包括 5.1.x , 5.5.x , 5.6.x , 5.7.x , 8.0.x

### Canal 工作原理

- canal 模拟 MySQL slave 的交互协议，伪装自己为 MySQL slave ，向 MySQL master 发送dump 协议
- MySQL master 收到 dump 请求，开始推送 binary log 给 slave (即 canal )
- canal 解析 binary log 对象(原始为 byte 流)

更详细介绍请查阅 Canal 官方文档：https://github.com/alibaba/canal

## CanalSharp 工作机制

canal 设计了 client-server 模式，交互协议使用 protobuf 3.0 , client 端可采用不同语言实现不同的消费逻辑。而 CanalSharp 正是 .NET/C# Client 实现，可以采用 C# 编写业务代码来消费 MySql binlog 数据。

![CanalSharp](/content/projects/canalsharp/assets/canalsharp.png)

## 问题反馈

请通过 [Issue](https://github.com/dotnetcore/CanalSharp/issues/new) 向我们提交问题反馈，在提交时尽可能提供详细的信息，以便我们进行排查和解决。

## 贡献代码

如果你有一些好的想法，欢迎您提交 [Pull Request](https://github.com/dotnetcore/canalsharp/pulls) 或者 [Issue](https://github.com/dotnetcore/CanalSharp/issues/new)

## 重构进度

目前重构的版本已经完全覆盖旧版本，且性能更高，代码更优美，实现了旧版本未实现的部分功能，支持最新的 Canal。

| Task                                 | Status              |
| ------------------------------------ | ------------------- |
| protobuf 3 协议生成                  | 已完成              |
| 对接 Canal                           | 已完成              |
| 数据订阅封装                         | TODO                |
| 集群支持(Service 集群和 Client 集群) | 已完成              |
| 数据发送到Kafka                      | 直接通过 Canal 发送 |
| 数据发送到Redis                      | 直接通过 Canal 发送 |

