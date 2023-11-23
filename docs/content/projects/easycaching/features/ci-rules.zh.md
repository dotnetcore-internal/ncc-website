属性是拦截的重要组成部分。对于这三个策略，提供了三个属性。

- EasyCachingAble
- EasyCachingPut
- EasyCachingEvict

要拦截此方法，只需将上述三个属性添加到其接口或继承其一些属性。

以下是一个示例：

```public interface IDemoService 
{
    [EasyCachingAble(Expiration = 10)]
    string GetCurrentUtcTime();
}
```

可以使用的一些参数说明

| 属性           | 描述                                                  | 应用                              |
| ------------------ | ------------------------------------------------------------ | ---------------------------------- |
| CacheKeyPrefix     | 指定要使用的缓存键的前缀                      | 所有                                |
| CacheProviderName  | 指定要使用的提供程序名称                    | 所有                                |
| IsHighAvailability | 是否缓存操作会中断您的方法             | 所有                                |
| Expiration         | 指定缓存项的过期时间，单位为秒 | EasyCachingAble 和 EasyCachingPut |
| IsAll              | 是否删除以 CacheKeyPrefix 开头的所有缓存项 | EasyCachingEvict 仅              |
| IsBefore           | 在方法执行之前或之后删除缓存项 | EasyCachingEvict 仅              |

> 这里要注意的是，如果要使用 Put 和 Evict 策略，应尽可能指定 CacheKeyPrefix，否则缓存将无法正确更新或删除。这取决于生成的缓存 Key 的实现，指定 CacheKeyPrefix 将忽略方法信息。