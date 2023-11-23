Transports move data from one place to another – between acquisition programs and pipelines, between pipelines and the entity database, and even between pipelines and external systems.



## How to select a transport

| 🏳‍🌈              | RabbitMQ                      | Kafka                     | Azure Service Bus | In-Memory          |
| --------------- | ----------------------------- | ------------------------- | ----------------- | ------------------ |
| **Positioning** | Reliable message transmission | Real time data processing | Cloud             | In-Memory, testing |
| **Distributed** | ✔                             | ✔                         | ✔                 | ❌                  |
| **Persistence** | ✔                             | ✔                         | ✔                 | ❌                  |
| **Performance** | Medium                        | High                      | Medium            | High               |

## Community-supported transport extensions

Thanks to the community for supporting CAP, the following is the implementation of community-supported transport

- ActiveMQ (@[Lukas Zhang](https://github.com/lukazh/Lukaz.CAP.ActiveMQ)): https://github.com/lukazh
- RedisMQ ([@木木](https://github.com/difudotnet)) https://github.com/difudotnet/CAP.RedisMQ.Extensions
- ZeroMQ ([@maikebing](https://github.com/maikebing))： https://github.com/maikebing/CAP.Extensions
- MQTT ([@john jiang](https://github.com/jinzaz)): https://github.com/jinzaz/jinzaz.CAP.MQTT