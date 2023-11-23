[Apache Pulsar](https://pulsar.apache.org/) 是一個用於服務器到服務器的消息系統，具有多租戶、高性能等優勢。 Pulsar 最初由 Yahoo 開發，目前由 Apache 軟件基金會管理。

CAP 支持使用 Apache Pulsar 作為消息傳輸器。

CAP 直接對外提供的 Pulsar 配置參數如下：

| NAME       | DESCRIPTION | TYPE   | DEFAULT |
| ---------- | ----------- | :----- | ------- |
| ServiceUrl | Broker 地址 | string |         |
| TlsOptions | TLS 配置項  | object |         |