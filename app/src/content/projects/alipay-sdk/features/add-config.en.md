```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddAlipay(options =>
    {
        options.AlipayPublicKey = "Alipay public key";
        options.AppId = "Application ID";
        options.CharSet = "Charset";
        options.Gatewayurl = "Payment gateway";
        options.PrivateKey = "Merchant private key";
        options.SignType = "Signature method RSA/RSA2";
        options.Uid = "Merchant ID";
    });
}
```