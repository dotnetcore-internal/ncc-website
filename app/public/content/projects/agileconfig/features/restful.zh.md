AgileConfig 支持通过 JSON RESTful APIs 来维护配置。

接口入参与出参均为 JSON 格式，因此需要设置 `Content-Type` 头部为 `application/json`。

接口使用 Basic 简单认证，设置 `Authorization` 头部为 `Basic base64(userName:password)` 。其中 `userName` 与 `password` 为配置中心的用户名与密码。
