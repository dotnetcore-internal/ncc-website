这里的关键是根据要拦截的方法的信息（方法、参数）和自定义前缀自动生成。

对于一些基本数据类型，它将被转换为字符串，然后进行拼接。

对于复杂类型，如自定义类，EasyCaching 提供了 ICachable 接口，允许用户定义生成类的缓存键。

```public interface ICachable
{
    string CacheKey { get; }
}
```