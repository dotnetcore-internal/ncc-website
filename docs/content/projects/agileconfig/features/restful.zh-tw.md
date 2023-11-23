AgileConfig 支持通過 JSON RESTful APIs 來維護配置。

接口入參與出參均為 JSON 格式，因此需要設置 `Content-Type` 頭部為 `application/json`。

接口使用 Basic 簡單認證，設置 `Authorization` 頭部為 `Basic base64(userName:password)` 。其中 `userName` 與 `password` 為配置中心的用戶名與密碼。