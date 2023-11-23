```csharp
private readonly AlipayF2FService _alipayF2FService;

public xxxController(AlipayF2FService alipayF2FService)
{
    _alipayF2FService = alipayF2FService;
}

_alipayF2FService.Execute();
```