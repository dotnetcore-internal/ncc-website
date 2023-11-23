AspectCore.DependencyInjection 提供构造器注入和属性两种方式：

```csharp
public interface ISampleService
{
}

public class SampleService : ISampleService
{
    private readonly ISampleRepository _sampleRepository;
    private readonly ILogger _logger;
    
    //构造器注入
    public SampleService(ISampleRepository sampleRepository, ILogger logger)
    {
        _sampleRepository = sampleRepository;
        _logger = logger;
    }
}

public interface ISampleRepository
{
}

public class SampleRepository : ISampleRepository
{
    //属性注入。属性注入的条件为标记FromServiceContext特性，并且允许set。满足条件的属性自动注入
    [FromServiceContext]
    public ILogger Logger { get; set; }
}
```