```csharp
//DI injection
private readonly AlipayService  _alipayService;

public xxxController(AlipayService alipayService)
{
    _alipayService = alipayService;
}

_alipayService.Execute();
```