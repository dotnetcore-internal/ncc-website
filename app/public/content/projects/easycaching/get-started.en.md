[TOC]

### Step 1 : Install the package

Choose caching provider that you need and install it via Nuget.

```csharp
Install-Package EasyCaching.InMemory
Install-Package EasyCaching.Redis
Install-Package EasyCaching.SQLite
Install-Package EasyCaching.Memcached
```



### Step 2 : Configure Startup class

Each caching provider has it's own configuration options.

Here is a sample configuration for InMemory and Redis caching provider.

```csharp
public class Startup
{
    //...
    
    public void ConfigureServices(IServiceCollection services)
    {
        //configuration
        services.AddEasyCaching(options => 
        {
            //use memory cache that named default
            options.UseInMemory("default");

            // // use memory cache with your own configuration
            // options.UseInMemory(config => 
            // {
            //     config.DBConfig = new InMemoryCachingOptions
            //     {
            //         // scan time, default value is 60s
            //         ExpirationScanFrequency = 60, 
            //         // total count of cache items, default value is 10000
            //         SizeLimit = 100 
            //     };
            //     // the max random second will be added to cache's expiration, default value is 120
            //     config.MaxRdSecond = 120;
            //     // whether enable logging, default is false
            //     config.EnableLogging = false;
            //     // mutex key's alive time(ms), default is 5000
            //     config.LockMs = 5000;
            //     // when mutex key alive, it will sleep some time, default is 300
            //     config.SleepMs = 300;
            // }, "m2");

            //use redis cache that named redis1
            options.UseRedis(config => 
            {
                config.DBConfig.Endpoints.Add(new ServerEndPoint("127.0.0.1", 6379));
            }, "redis1")
            .WithMessagePack()//with messagepack serialization
            ;            
        });    
    }    
}
```



### Step 3 : Write code in your controller

```csharp
[Route("api/[controller]")]
public class ValuesController : Controller
{
    // //when using single provider
    // private readonly IEasyCachingProvider _provider;
    //when using multiple provider
    private readonly IEasyCachingProviderFactory _factory;

    public ValuesController(
        //IEasyCachingProvider provider, 
        IEasyCachingProviderFactory factory
        )
    {
        //this._provider = provider;
        this._factory = factory;
    }

    [HttpGet]
    public string Handle()
    {
        //var provider = _provider;
        //get the provider from factory with its name
        var provider = _factory.GetCachingProvider("redis1");    

        //Set
        provider.Set("demo", "123", TimeSpan.FromMinutes(1));
            
        //Set Async
        await provider.SetAsync("demo", "123", TimeSpan.FromMinutes(1));                  
    }
}
```