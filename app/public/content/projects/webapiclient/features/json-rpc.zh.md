
在极少数场景中，开发者可能遇到 JsonRpc 调用的接口，由于该协议不是很流行，WebApiClientCore 将该功能的支持作为 WebApiClientCore.Extensions.JsonRpc 扩展包提供。使用[JsonRpcMethod]修饰 Rpc 方法，使用[JsonRpcParam]修饰 Rpc 参数 即可。