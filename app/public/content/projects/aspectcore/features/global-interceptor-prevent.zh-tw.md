通過使用`NonAspectAttribute`來使得`Service`或`Method`不被代理：

```csharp
[NonAspect]
public interface ICustomService
{
    void Call();
}
```