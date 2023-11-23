通过运输将数据从一个地方移动到另一个地方-在采集程序和管道之间，管道与实体数据库之间，甚至在管道与外部系统之间。



## 怎么选择运输器

| 🏳‍🌈         | RabbitMQ     | Kafka        | Azure Service Bus | In-Memory    |
| ---------- | ------------ | ------------ | ----------------- | ------------ |
| **定位**   | 可靠消息传输 | 实时数据处理 | 云                | 内存型，测试 |
| **分布式** | ✔            | ✔            | ✔                 | ❌            |
| **持久化** | ✔            | ✔            | ✔                 | ❌            |
| **性能**   | Medium       | High         | Medium            | High         |



## 社区支持的运输器

感谢社区对 CAP 的支持，以下是社区支持的运输器实现

- ActiveMQ (@[Lukas Zhang](https://github.com/lukazh/Lukaz.CAP.ActiveMQ)): https://github.com/lukazh
- RedisMQ ([@木木](https://github.com/difudotnet)): https://github.com/difudotnet/CAP.RedisMQ.Extensions
- ZeroMQ ([@maikebing](https://github.com/maikebing)): https://github.com/maikebing/CAP.Extensions/tree/master/src/DotNetCore.CAP.ZeroMQ
- MQTT ([@john jiang](https://github.com/jinzaz)): https://github.com/jinzaz/jinzaz.CAP.MQTT