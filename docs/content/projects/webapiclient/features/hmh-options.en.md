## Http proxy configuration

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

## Client certificate configuration

In order to restrict client connections, some servers enable HTTPS mutual authentication, allowing only clients with certificates issued by it to connect.

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

## Maintain CookieContainer

If the interface being requested unfortunately uses Cookie to store identity information, then it is necessary to consider maintaining the CookieContainer instance independently from the life cycle of the HttpMessageHandler. The default HttpMessageHandler has a minimum life cycle of only 2 minutes.

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

## Automatic cookie expiration refresh

For interfaces that use the Cookie mechanism, it is only possible to determine whether the Cookie has expired after the interface request. By customizing the CookieAuthorizationHandler, it is possible to automatically refresh the Cookie when it expires during the process of requesting an interface and retry the interface request.

First, we need to split the login interface from other business interfaces into different interface definitions, such as IUserApi and IUserLoginApi.

```csharp
[HttpHost("http://localhost:5000/")]
public interface IUserLoginApi
{
    [HttpPost("/users")]
    Task<HttpResponseMessage> LoginAsync([JsonContent] Account account);
}
```

Then implement the AutoRefreshCookieHandler for automatic login:

```csharp
public class AutoRefreshCookieHandler : CookieAuthorizationHandler
{
    private readonly IUserLoginApi api;

    public AutoRefreshCookieHandler(IUserLoginApi api)
    {
        this.api = api;
    }

    /// <summary>
    /// Login and refresh Cookie
    /// </summary>
    /// <returns>Return the login response message</returns>
    protected override Task<HttpResponseMessage> refreshCookieAsync()
    {
        return this.api.LoginAsync(new Account
        {
            account = "admin",
            password = "123456"
        });
    }
}
```

Finally, register IUserApi, IUserLoginApi, and configure AutoRefreshCookieHandler for IUserApi:

```csharp
services
    .AddHttpApi<IUserLoginApi>();

services
    .AddHttpApi<IUserApi>()
    .AddHttpMessageHandler(s => new AutoRefreshCookieHandler(s.GetService<IUserLoginApi>()));
```

Now, when calling any interface of IUserApi, as long as the response status code is 401, it triggers the IUserLoginApi login, and then retries the interface request with the logged-in cookie, and finally responds with the correct result. You can also override the IsUnauthorizedAsync(HttpResponseMessage) method of CookieAuthorizationHandler to indicate that the response is unauthorized status.