Add the following information in `appsettings.json`:

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

The configuration code can be changed to the following:

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddAlipay(Configuration.GetSection("Alipay"));
}
```