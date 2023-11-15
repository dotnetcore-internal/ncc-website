動態代理倉儲(SmartSql.DyRepository)組件是 SmartSql 非常獨特的功能，它能簡化 SmartSql 的使用。對業務代碼除了配置幾乎沒有侵入。可以說使用 ISqlMapper 是原始方法，而 DyRepository 自動幫你實現這些方法。

DyRepository 的表現是只需要定義倉儲接口，通過簡單配置就能自動實現這些接口並注冊到 IoC 容器中，使用時注入即刻獲取實現。原理是通過接口和接口方法的命名規則來獲取 SmartSql 的 xml 文件中的 Scope 和 SqlId ，用接口方法的參數作為 Request ，通過 xml 中的 sql 自動判斷是查詢還是執行操作，最後實現對 ISqlMapper 的調用。

更多請查閱[文檔](https://smartsql.net/dyrepository)
