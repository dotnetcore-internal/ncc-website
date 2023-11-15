动态代理仓储(SmartSql.DyRepository)组件是 SmartSql 非常独特的功能，它能简化 SmartSql 的使用。对业务代码除了配置几乎没有侵入。可以说使用 ISqlMapper 是原始方法，而 DyRepository 自动帮你实现这些方法。

DyRepository 的表现是只需要定义仓储接口，通过简单配置就能自动实现这些接口并注册到 IoC 容器中，使用时注入即刻获取实现。原理是通过接口和接口方法的命名规则来获取 SmartSql 的 xml 文件中的 Scope 和 SqlId ，用接口方法的参数作为 Request ，通过 xml 中的 sql 自动判断是查询还是执行操作，最后实现对 ISqlMapper 的调用。

更多请查阅[文档](https://smartsql.net/dyrepository)
