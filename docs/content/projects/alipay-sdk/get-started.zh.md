[TOC]

## 安装

```shell
Install-Package Install-Package Alipay.AopSdk.AspnetCore
```

## 配置

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

## 使用

```csharp
//通过di注入
private readonly AlipayService  _alipayService;

public xxxController(AlipayService alipayService)
{
    _alipayService = alipayService;
}

_alipayService.Execute();
```

