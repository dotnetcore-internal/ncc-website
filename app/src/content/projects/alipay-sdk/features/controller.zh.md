```csharp
//通过di注入
private readonly AlipayService  _alipayService;

public xxxController(AlipayService alipayService)
{
    _alipayService = alipayService;
}

_alipayService.Execute();
```
