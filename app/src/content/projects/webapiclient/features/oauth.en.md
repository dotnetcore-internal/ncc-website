Using the WebApiClientCore.Extensions.OAuths extension, it is easy to support token acquisition, refresh, and application.

## Objects and Concepts

| Object                  | Usage                                                                 |
| --------------------- | -------------------------------------------------------------------- |
| ITokenProviderFactory | The factory for creating tokenProviders, providing the ability to obtain or create tokenProviders through the HttpApi interface type |
| ITokenProvider        | The token provider is used to obtain tokens and triggers a new request or refresh the token when the token expires for the first time in a request |
| OAuthTokenAttribute   | The application attribute of the token uses ITokenProviderFactory to create ITokenProvider, then uses ITokenProvider to obtain the token, and finally applies the token to the request message |
| OAuthTokenHandler     | A http message handler that functions the same as OAuthTokenAttribute. In addition, if the server returns unauthorized (401 status code) for some reason, it will also discard the old token and apply for a new token to retry the request. |

## OAuth Client Mode

### 1. Register tokenProvider for interfaces

```csharp
// Register and configure the tokenProvider in Client mode for the interface.
services.AddClientCredentialsTokenProvider<IUserApi>(o =>
{
    o.Endpoint = new Uri("http://localhost:6000/api/tokens");
    o.Credentials.Client_id = "clientId";
    o.Credentials.Client_secret = "xxyyzz";
});
```

### 2 Application of token

#### 2.1 Using the OAuthToken feature

OAuthTokenAttribute belongs to WebApiClientCore framework layer, it is very easy to manipulate the request content and response model, for example, add the token as a form field to the existing request form, or read the response message deserialized corresponding business model is very convenient, but it can not be achieved inside the request to retry the request. If the server's token is missing after it has been issued by the server, using the OAuthTokenAttribute will result in a failed request, and this failed request cannot be avoided.

```csharp
/// <summary>
/// User interface
/// </summary>
[OAuthToken]
public interface IUserApi
{
    ...
}
```

By default, OAuthTokenAttribute implements putting the token in the Authorization request header. If your interface requires putting the token in other places, such as the query of the URI, you need to override OAuthTokenAttribute:

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

#### 2.1 Using the OAuthTokenHandler

The strength of OAuthTokenHandler is that it supports multiple attempts within a request. After the server issues a token, if the server's token is lost, OAuthTokenHandler will discard and re-request the token within this request after receiving the 401 status code, and retry the request with the new token, thus behaving as a normal request. However, OAuthTokenHandler does not belong to the WebApiClientCore framework layer object. Inside, it can only access the original HttpRequestMessage and HttpResponseMessage. If you need to append the token to the Content of HttpRequestMessage, it is very difficult. Similarly, if the token is invalid is not based on the http status code (such as 401), but a flag field in the business model corresponding to the Content of HttpResponseMessage, it is also a very difficult task.

```csharp
// Add OAuthTokenHandler to the registration interface.
services
    .AddHttpApi<IUserApi>()
    .AddOAuthTokenHandler();
```

By default, OAuthTokenHandler implements putting the token in the Authorization request header. If your interface requires putting the token in other places, such as the query of the URI, you need to override OAuthTokenHandler:

```csharp
class UriQueryOAuthTokenHandler : OAuthTokenHandler
{
    /// <summary>
    /// http message handler for token application
    /// </summary>
    /// <param name="tokenProvider">tokenProvider</param>
    public UriQueryOAuthTokenHandler(ITokenProvider tokenProvider)
        : base(tokenProvider)
    {
    }

    /// <summary>
    /// Using token
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


// Add UriQueryOAuthTokenHandler when register interface
services
    .AddHttpApi<IUserApi>()
    .AddOAuthTokenHandler((s, tp) => new UriQueryOAuthTokenHandler(tp));
```

## Shared TokenProvider for multiple interfaces

You can set a base interface for the HTTP interface, and then configure a TokenProvider for the base interface. For example, the xxx and yyy interfaces both belong to IBaidu, and only need to configure a TokenProvider for IBaidu.

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
// Register and configure token provider options for password mode
services.AddPasswordCredentialsTokenProvider<IBaidu>(o =>
{
    o.Endpoint = new Uri("http://localhost:5000/api/tokens");
    o.Credentials.Client_id = "clientId";
    o.Credentials.Client_secret = "xxyyzz";
    o.Credentials.Username = "username";
    o.Credentials.Password = "password";
});
```

## Customize TokenProvider

The extension package already contains OAuth's Client and Password modes for standard token requests, but there are still many interface providers who only embody the spirit of it in implementation. At this time, a custom TokenProvider is needed. Assuming that the interface provider's token acquisition interface is as follows:

```csharp
public interface ITokenApi
{
    [HttpPost("http://xxx.com/token")]
    Task<TokenResult> RequestTokenAsync([Parameter(Kind.Form)] string clientId, [Parameter(Kind.Form)] string clientSecret);
}
```

### Delegate TokenProvider

Delegate TokenProvider is the simplest implementation method, which uses the delegate of requesting the token as the implementation logic of the custom TokenProvider:

```csharp
// Register a custom tokenProvider for an interface
services.AddTokenProvider<IUserApi>(s =>
{
    return s.GetService<ITokenApi>().RequestTokenAsync("id", "secret");
});
```

### Fully implemented TokenProvider

```csharp
// Register CustomTokenProvider for the interface
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

### Customize TokenProvider options

Each TokenProvider has a Name property, which is the same value as the Name of the ITokenProviderBuilder returned by service.AddTokenProvider(). To read the Options value, you can use the TokenProvider's GetOptionsValue() method. To configure Options, you can use the Name of the ITokenProviderBuilder.

