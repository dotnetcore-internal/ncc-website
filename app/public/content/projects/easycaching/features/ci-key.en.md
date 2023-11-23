The Key here is automatically generated based on the information (method, parameters) and custom prefix of the method to be intercepted.

For some basic data types, it will be converted into a string and then spliced.

For complex types, like custom classes, EasyCaching provides an ICachable interface that lets the user define the cache key that generates the class.

```csharp
public interface ICachable
{
    string CacheKey { get; }
}
```