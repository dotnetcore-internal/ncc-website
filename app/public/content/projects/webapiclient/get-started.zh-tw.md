> 注意
>
> - 如果你的項目所運行的.NET 版本支持`.NET Standard2.1`，並具備依賴注入的環境，我們強烈建議你直接使用全新的`WebApiclientCore`
> - `WebApiClient.JIT`、`WebApiClient.AOT` 目前處於 `修補性維護` 階段。你仍可用用它來構建項目，但我們僅修補致命性錯誤而不會為其帶來任何功能性的更新。

## 依賴環境

對於`WebApiclientCore`，由於基於`.NET Standard2.1`它可以運行在以下平台

- .NET Core 3 +
- .NET 5、6、7、8
- Mono 6.4 +
- Xamarin.iOS 12.16 +
- Xamarin.Mac 5.16 +
- Xamarin.Android 10 +
- 包括但不限於以上列舉的實現`.NET Standard2.1`的平台

對於`WebApiClient.JIT`、`WebApiClient.AOT`，由於基於`.NET Standard2.0`它可以運行在以下平台

- .NET Framework 4.6.1+
- .NET Core 2 +
- .NET Core 3 +
- .NET 5、6、7、8
- Mono 4.6 +
- Xamarin.iOS 10 +
- Xamarin.Mac 3 +
- Xamarin.Android 7 +
- 通用 Windows 平台 10 +
- 包括但不限於以上列舉的實現`.NET Standard2.0`的平台
- 額外支持.NET Framework 4.5

## 從 NuGet 安裝

這一章節會幫助你從頭搭建一個簡單的 VuePress 文檔網站。如果你想在一個現有項目中使用 VuePress 管理文檔，從步驟 3 開始。

- .NET CLI
- Package Manager
- PackageReference
- Paket CLI

```bash
dotnet add package WebApiClientCore
```

## 聲明接口

```csharp
[HttpHost("http://localhost:5000/")]
public interface IUserApi
{
    [HttpGet("api/users/{id}")]
    Task<User> GetAsync(string id);

    [HttpPost("api/users")]
    Task<User> PostAsync([JsonContent] User user);
}
```

## 注冊接口

AspNetCore Startup

```csharp
public void ConfigureServices(IServiceCollection services)
{
  //注冊
  services.AddHttpApi<IUserApi>();
}
```

Console

```csharp
public static void Main(string[] args)
{
    //無依賴注入的環境需要自行創建
    IServiceCollection services = new ServiceCollection();
    services.AddHttpApi<IUserApi>();
}
```

## 配置

```csharp
public void ConfigureServices(IServiceCollection services)
{
  // 注冊並配置
  services.AddHttpApi(typeof(IUserApi), o =>
  {
      o.UseLogging = Environment.IsDevelopment();
      o.HttpHost = new Uri("http://localhost:5000/");
  });
  //注冊，然後配置
  services.AddHttpApi<IUserApi>().ConfigureHttpApi(o =>
  {
      o.UseLogging = Environment.IsDevelopment();
      o.HttpHost = new Uri("http://localhost:5000/");
  });
  //添加全局配置
  services.AddWebApiClient().ConfigureHttpApi(o =>
  {
      o.UseLogging = Environment.IsDevelopment();
      o.HttpHost = new Uri("http://localhost:5000/");
  });
}
```

## 注入接口

```csharp
public class MyService
{
    private readonly IUserApi userApi;
    public MyService(IUserApi userApi)
    {
        this.userApi = userApi;
    }

    public async Task GetAsync(){
        //使用接口
        var user=await userApi.GetAsync(100);
    }
}
```