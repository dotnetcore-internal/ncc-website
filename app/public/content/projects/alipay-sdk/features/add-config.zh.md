```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddAlipay(options =>
        {
            options.AlipayPublicKey = "支付宝公钥";
            options.AppId = "应用ID";
            options.CharSet = "密钥编码";
            options.Gatewayurl = "支付网关";
            options.PrivateKey = "商家私钥";
            options.SignType = "签名方式 RSA/RSA2";
            options.Uid = "商户ID";
        });
}
```