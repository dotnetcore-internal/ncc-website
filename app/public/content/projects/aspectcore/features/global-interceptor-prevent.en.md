By using `NonAspectAttribute` to prevent `Service` or `Method` from being proxied:

```csharp
[NonAspect]
public interface ICustomService
{
    void Call();
}
```