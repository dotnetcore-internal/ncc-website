通過運輸將數據從一個地方移動到另一個地方-在采集程序和管道之間，管道與實體數據庫之間，甚至在管道與外部系統之間。



## 怎麼選擇運輸器

| 🏳‍🌈         | RabbitMQ     | Kafka        | Azure Service Bus | In-Memory    |
| ---------- | ------------ | ------------ | ----------------- | ------------ |
| **定位**   | 可靠消息傳輸 | 實時數據處理 | 雲                | 內存型，測試 |
| **分布式** | ✔            | ✔            | ✔                 | ❌            |
| **持久化** | ✔            | ✔            | ✔                 | ❌            |
| **性能**   | Medium       | High         | Medium            | High         |



## 社區支持的運輸器

感謝社區對 CAP 的支持，以下是社區支持的運輸器實現

- ActiveMQ (@[Lukas Zhang](https://github.com/lukazh/Lukaz.CAP.ActiveMQ)): https://github.com/lukazh
- RedisMQ ([@木木](https://github.com/difudotnet)): https://github.com/difudotnet/CAP.RedisMQ.Extensions
- ZeroMQ ([@maikebing](https://github.com/maikebing)): https://github.com/maikebing/CAP.Extensions/tree/master/src/DotNetCore.CAP.ZeroMQ
- MQTT ([@john jiang](https://github.com/jinzaz)): https://github.com/jinzaz/jinzaz.CAP.MQTT