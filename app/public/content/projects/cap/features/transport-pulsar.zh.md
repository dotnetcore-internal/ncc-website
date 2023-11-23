[Apache Pulsar](https://pulsar.apache.org/) 是一个用于服务器到服务器的消息系统，具有多租户、高性能等优势。 Pulsar 最初由 Yahoo 开发，目前由 Apache 软件基金会管理。

CAP 支持使用 Apache Pulsar 作为消息传输器。

CAP 直接对外提供的 Pulsar 配置参数如下：

| NAME       | DESCRIPTION | TYPE   | DEFAULT |
| ---------- | ----------- | :----- | ------- |
| ServiceUrl | Broker 地址 | string |         |
| TlsOptions | TLS 配置项  | object |         |