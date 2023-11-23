使用 WebApiClientCore.Extensions.OAuths 擴展，輕松支持 token 的獲取、刷新與應用。

## 對象與概念

| 對象                  | 用途                                                         |
| --------------------- | ------------------------------------------------------------ |
| ITokenProviderFactory | tokenProvider 的創建工廠，提供通過 HttpApi 接口類型獲取或創建 tokenProvider |
| ITokenProvider        | token 提供者，用於獲取 token，在 token 的過期後的頭一次請求裏觸發重新請求或刷新 token |
| OAuthTokenAttribute   | token 的應用特性，使用 ITokenProviderFactory 創建 ITokenProvider，然後使用 ITokenProvider 獲取 token，最後將 token 應用到請求消息中 |
| OAuthTokenHandler     | 屬於 http 消息處理器，功能與 OAuthTokenAttribute 一樣，除此之外，如果因為意外的原因導致服務器仍然返回未授權(401 狀態碼)，其還會丟棄舊 token，申請新 token 來重試一次請求。 |

## OAuth 的 Client 模式

### 1 為接口注冊 tokenProvider

```csharp
// 為接口注冊與配置Client模式的tokenProvider
services.AddClientCredentialsTokenProvider<IUserApi>(o =>
{
    o.Endpoint = new Uri("http://localhost:6000/api/tokens");
    o.Credentials.Client_id = "clientId";
    o.Credentials.Client_secret = "xxyyzz";
});
```

### 2 token 的應用

#### 2.1 使用 OAuthToken 特性

OAuthTokenAttribute 屬於 WebApiClientCore 框架層，很容易操控請求內容和響應模型，比如將 token 作為表單字段添加到既有請求表單中，或者讀取響應消息反序列化之後對應的業務模型都非常方便，但它不能在請求內部實現重試請求的效果。在服務器頒發 token 之後，如果服務器的 token 丟失了，使用 OAuthTokenAttribute 會得到一次失敗的請求，本次失敗的請求無法避免。

```csharp
/// <summary>
/// 用戶操作接口
/// </summary>
[OAuthToken]
public interface IUserApi
{
    ...
}
```

OAuthTokenAttribute 默認實現將 token 放到 Authorization 請求頭，如果你的接口需要請 token 放到其它地方比如 uri 的 query，需要重寫 OAuthTokenAttribute：

```csharp
class UriQueryTokenAttribute : OAuthTokenAttribute
{
    protected override void UseTokenResult(ApiRequestContext context, TokenResult tokenResult)
    {
        context.HttpContext.RequestMessage.AddUrlQuery("mytoken", tokenResult.Access_token);
    }
}

[UriQueryToken]
public interface IUserApi
{
    ...
}
```

#### 2.1 使用 OAuthTokenHandler

OAuthTokenHandler 的強項是支持在一個請求內部裏進行多次嘗試，在服務器頒發 token 之後，如果服務器的 token 丟失了，OAuthTokenHandler 在收到 401 狀態碼之後，會在本請求內部丟棄和重新請求 token，並使用新 token 重試請求，從而表現為一次正常的請求。但 OAuthTokenHandler 不屬於 WebApiClientCore 框架層的對象，在裏面只能訪問原始的 HttpRequestMessage 與 HttpResponseMessage，如果需要將 token 追加到 HttpRequestMessage 的 Content 裏，這是非常困難的，同理，如果不是根據 http 狀態碼(401 等)作為 token 無效的依據，而是使用 HttpResponseMessage 的 Content 對應的業務模型的某個標記字段，也是非常棘手的活。

```csharp
// 注冊接口時添加OAuthTokenHandler
services
    .AddHttpApi<IUserApi>()
    .AddOAuthTokenHandler();
```

OAuthTokenHandler 默認實現將 token 放到 Authorization 請求頭，如果你的接口需要請 token 放到其它地方比如 uri 的 query，需要重寫 OAuthTokenHandler：

```csharp
class UriQueryOAuthTokenHandler : OAuthTokenHandler
{
    /// <summary>
    /// token應用的http消息處理程序
    /// </summary>
    /// <param name="tokenProvider">token提供者</param>
    public UriQueryOAuthTokenHandler(ITokenProvider tokenProvider)
        : base(tokenProvider)
    {
    }

    /// <summary>
    /// 應用token
    /// </summary>
    /// <param name="request"></param>
    /// <param name="tokenResult"></param>
    protected override void UseTokenResult(HttpRequestMessage request, TokenResult tokenResult)
    {
        // var builder = new UriBuilder(request.RequestUri);
        // builder.Query += "mytoken=" + Uri.EscapeDataString(tokenResult.Access_token);
        // request.RequestUri = builder.Uri;

        var uriValue = new UriValue(request.RequestUri).AddQuery("myToken", tokenResult.Access_token);
        request.RequestUri = uriValue.ToUri();
    }
}


// 注冊接口時添加UriQueryOAuthTokenHandler
services
    .AddHttpApi<IUserApi>()
    .AddOAuthTokenHandler((s, tp) => new UriQueryOAuthTokenHandler(tp));
```

## 多接口共享的 TokenProvider

可以給 http 接口設置基礎接口，然後為基礎接口配置 TokenProvider，例如下面的 xxx 和 yyy 接口，都屬於 IBaidu，只需要給 IBaidu 配置 TokenProvider。

```csharp
[OAuthToken]
public interface IBaidu
{
}

public interface IBaidu_XXX_Api : IBaidu
{
    [HttpGet]
    Task xxxAsync();
}

public interface IBaidu_YYY_Api : IBaidu
{
    [HttpGet]
    Task yyyAsync();
}
// 注冊與配置password模式的token提者選項
services.AddPasswordCredentialsTokenProvider<IBaidu>(o =>
{
    o.Endpoint = new Uri("http://localhost:5000/api/tokens");
    o.Credentials.Client_id = "clientId";
    o.Credentials.Client_secret = "xxyyzz";
    o.Credentials.Username = "username";
    o.Credentials.Password = "password";
});
```

## 自定義 TokenProvider

擴展包已經內置了 OAuth 的 Client 和 Password 模式兩種標准 token 請求，但是仍然還有很多接口提供方在實現上僅僅體現了它的精神，這時候就需要自定義 TokenProvider，假設接口提供方的獲取 token 的接口如下：

```csharp
public interface ITokenApi
{
    [HttpPost("http://xxx.com/token")]
    Task<TokenResult> RequestTokenAsync([Parameter(Kind.Form)] string clientId, [Parameter(Kind.Form)] string clientSecret);
}
```

### 委托 TokenProvider

委托 TokenProvider 是一種最簡單的實現方式，它將請求 token 的委托作為自定義 TokenProvider 的實現邏輯：

```csharp
// 為接口注冊自定義tokenProvider
services.AddTokenProvider<IUserApi>(s =>
{
    return s.GetService<ITokenApi>().RequestTokenAsync("id", "secret");
});
```

### 完整實現的 TokenProvider

```csharp
// 為接口注冊CustomTokenProvider
services.AddTokenProvider<IUserApi, CustomTokenProvider>();
class CustomTokenProvider : TokenProvider
{
    public CustomTokenProvider(IServiceProvider serviceProvider)
        : base(serviceProvider)
    {
    }

    protected override Task<TokenResult> RequestTokenAsync(IServiceProvider serviceProvider)
    {
        return serviceProvider.GetService<ITokenApi>().RequestTokenAsync("id", "secret");
    }

    protected override Task<TokenResult> RefreshTokenAsync(IServiceProvider serviceProvider, string refresh_token)
    {
        return this.RequestTokenAsync(serviceProvider);
    }
}
```

### 自定義 TokenProvider 的選項

每個 TokenProvider 都有一個 Name 屬性，與 service.AddTokenProvider()返回的 ITokenProviderBuilder 的 Name 是同一個值。讀取 Options 值可以使用 TokenProvider 的 GetOptionsValue()方法，配置 Options 則通過 ITokenProviderBuilder 的 Name 來配置。