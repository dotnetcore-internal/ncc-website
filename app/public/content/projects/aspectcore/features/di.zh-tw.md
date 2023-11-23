AspectCore.DependencyInjection 提供構造器注入和屬性兩種方式：

```csharp
public interface ISampleService
{
}

public class SampleService : ISampleService
{
    private readonly ISampleRepository _sampleRepository;
    private readonly ILogger _logger;
    
    //構造器注入
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
    //屬性注入。屬性注入的條件為標記FromServiceContext特性，並且允許set。滿足條件的屬性自動注入
    [FromServiceContext]
    public ILogger Logger { get; set; }
}
```