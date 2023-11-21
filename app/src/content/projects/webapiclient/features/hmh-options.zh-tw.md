## Http 代理配置

```csharp
services
    .AddHttpApi<IUserApi>(o =>
    {
        o.HttpHost = new Uri("http://localhost:6000/");
    })
    .ConfigurePrimaryHttpMessageHandler(() => new HttpClientHandler
    {
        UseProxy = true,
        Proxy = new WebProxy
        {
            Address = new Uri("http://proxy.com"),
            Credentials = new NetworkCredential
            {
                UserName = "useranme",
                Password = "pasword"
            }
        }
    });
```

## 客戶端證書配置

有些服務器為了限制客戶端的連接，開啟了 https 雙向驗證，只允許它執有它頒發的證書的客戶端進行連接

```csharp
services
    .AddHttpApi<IUserApi>(o =>
    {
        o.HttpHost = new Uri("http://localhost:6000/");
    })
    .ConfigurePrimaryHttpMessageHandler(() =>
    {
        var handler = new HttpClientHandler();
        handler.ClientCertificates.Add(yourCert);
        return handler;
    });
```

## 維持 CookieContainer 不變

如果請求的接口不幸使用了 Cookie 保存身份信息機制，那麼就要考慮維持 CookieContainer 實例不要跟隨 HttpMessageHandler 的生命周期，默認的 HttpMessageHandler 最短只有 2 分鍾的生命周期。

```csharp
var cookieContainer = new CookieContainer();
services
    .AddHttpApi<IUserApi>(o =>
    {
        o.HttpHost = new Uri("http://localhost:6000/");
    })
    .ConfigurePrimaryHttpMessageHandler(() =>
    {
        var handler = new HttpClientHandler();
        handler.CookieContainer = cookieContainer;
        return handler;
    });
```

## Cookie 過期自動刷新

對於使用 Cookie 機制的接口，只有在接口請求之後，才知道 Cookie 是否已失效。通過自定義 CookieAuthorizationHandler，可以做在請求某個接口過程中，遇到 Cookie 失效時自動刷新 Cookie 再重試請求接口。

首先，我們需要把登錄接口與某它業務接口拆分在不同的接口定義，例如 IUserApi 和 IUserLoginApi

```csharp
[HttpHost("http://localhost:5000/")]
public interface IUserLoginApi
{
    [HttpPost("/users")]
    Task<HttpResponseMessage> LoginAsync([JsonContent] Account account);
}
```

然後實現自動登錄的 CookieAuthorizationHandler

```csharp
public class AutoRefreshCookieHandler : CookieAuthorizationHandler
{
    private readonly IUserLoginApi api;

    public AutoRefreshCookieHandler(IUserLoginApi api)
    {
        this.api = api;
    }

    /// <summary>
    /// 登錄並刷新Cookie
    /// </summary>
    /// <returns>返回登錄響應消息</returns>
    protected override Task<HttpResponseMessage> RefreshCookieAsync()
    {
        return this.api.LoginAsync(new Account
        {
            account = "admin",
            password = "123456"
        });
    }
}
```

最後，注冊 IUserApi、IUserLoginApi，並為 IUserApi 配置 AutoRefreshCookieHandler

```csharp
services
    .AddHttpApi<IUserLoginApi>();

services
    .AddHttpApi<IUserApi>()
    .AddHttpMessageHandler(s => new AutoRefreshCookieHandler(s.GetService<IUserLoginApi>()));
```

現在，調用 IUserApi 的任意接口，只要響應的狀態碼為 401，就觸發 IUserLoginApi 登錄，然後將登錄得到的 cookie 來重試請求接口，最終響應為正確的結果。你也可以重寫 CookieAuthorizationHandler 的 IsUnauthorizedAsync(HttpResponseMessage)方法來指示響應是未授權狀態。