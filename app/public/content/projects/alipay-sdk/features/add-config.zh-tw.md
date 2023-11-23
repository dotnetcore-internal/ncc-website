```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddAlipay(options =>
        {
            options.AlipayPublicKey = "支付寶公鑰";
            options.AppId = "應用ID";
            options.CharSet = "密鑰編碼";
            options.Gatewayurl = "支付網關";
            options.PrivateKey = "商家私鑰";
            options.SignType = "簽名方式 RSA/RSA2";
            options.Uid = "商戶ID";
        });
}
```