AspectCore.DependencyInjection provides two ways of constructor injection and property:

```csharp
public interface ISampleService
{
}

public class SampleService : ISampleService
{
    private readonly ISampleRepository _sampleRepository;
    private readonly ILogger _logger;
    
    // Constructor injection
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
    // Property injection. The condition for property injection is to mark the FromServiceContext attribute and allow set. Properties that meet the conditions are automatically injected
    [FromServiceContext]
    public ILogger Logger { get; set; }
}
```