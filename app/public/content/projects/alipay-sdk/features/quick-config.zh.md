在 `appsettings.json` 里添加如下信息：

```json
 "Alipay": {
    "AlipayPublicKey": "",
    "AppId": "",
    "CharSet": "UTF-8",
    "Gatewayurl": "https://openapi.alipaydev.com/gateway.do",
    "PrivateKey": "",
    "SignType": "RSA2",
    "Uid": ""
  }
```

添加配置代码可改为如下：

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddAlipay(Configuration.GetSection("Alipay"));
    
}
```

