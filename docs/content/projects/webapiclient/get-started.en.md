> **Notice**
>
> - If your project runs on a .NET version that supports `.NET Standard2.1` and has a dependency injection environment, we strongly recommend that you use the new `WebApiClientCore` directly.
> - `WebApiClient.JIT` and `WebApiClient.AOT` are currently in the `maintenance phase`. You can still use them to build your projects, but we will only fix critical bugs and will not bring any functional updates to them.

## Dependencies

For `WebApiClientCore`, it can run on the following platforms based on `.NET Standard2.1`:

- .NET Core 3+
- .NET 5, 6, 7, 8
- Mono 6.4+
- Xamarin.iOS 12.16+
- Xamarin.Mac 5.16+
- Xamarin.Android 10+
- And any other platform implementing `.NET Standard2.1`

For `WebApiClient.JIT` and `WebApiClient.AOT`, it can run on the following platforms based on `.NET Standard2.0`:

- .NET Framework 4.6.1+
- .NET Core 2+
- .NET Core 3+
- .NET 5, 6, 7, 8
- Mono 4.6+
- Xamarin.iOS 10+
- Xamarin.Mac 3+
- Xamarin.Android 7+
- Universal Windows Platform 10+
- And any other platform implementing `.NET Standard2.0`
- Additional support for .NET Framework 4.5

## Installing from NuGet

This section will help you set up a simple VuePress documentation website from scratch. If you want to use VuePress to manage documentation in an existing project, start from step 3.

- .NET CLI
- Package Manager
- PackageReference
- Paket CLI

```bash
dotnet add package WebApiClientCore
```

## Declaration interface

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

## Register interface

AspNetCore Startup

```csharp
public void ConfigureServices(IServiceCollection services)
{
  //Register
  services.AddHttpApi<IUserApi>();
}
```

Console

```csharp
public static void Main(string[] args)
{
    //The environment for dependency injection needs to be created by yourself.
    IServiceCollection services = new ServiceCollection();
    services.AddHttpApi<IUserApi>();
}
```

## Configure

```csharp
public void ConfigureServices(IServiceCollection services)
{
  // Register with configuration
  services.AddHttpApi(typeof(IUserApi), o =>
  {
      o.UseLogging = Environment.IsDevelopment();
      o.HttpHost = new Uri("http://localhost:5000/");
  });
  //Register, then config
  services.AddHttpApi<IUserApi>().ConfigureHttpApi(o =>
  {
      o.UseLogging = Environment.IsDevelopment();
      o.HttpHost = new Uri("http://localhost:5000/");
  });
  //Add global configuration
  services.AddWebApiClient().ConfigureHttpApi(o =>
  {
      o.UseLogging = Environment.IsDevelopment();
      o.HttpHost = new Uri("http://localhost:5000/");
  });
}
```

## Injection interface

```csharp
public class MyService
{
    private readonly IUserApi userApi;
    public MyService(IUserApi userApi)
    {
        this.userApi = userApi;
    }

    public async Task GetAsync(){
        //To use interface
        var user=await userApi.GetAsync(100);
    }
}
```