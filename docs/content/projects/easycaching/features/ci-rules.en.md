Attribute is an important part of interception. For the three strategies, three Attributes are provided.

- EasyCachingAble
- EasyCachingPut
- EasyCachingEvict

To intercept this method, just add the above three Attributes to its interface or inherit some of their Attributes.

Here is an example:

```
 public interface IDemoService 
 {
    [EasyCachingAble(Expiration = 10)]
    string GetCurrentUtcTime();
 }
```

Some parameter descriptions that can be used

| Property           | Description                                                  | Apply                              |
| ------------------ | ------------------------------------------------------------ | ---------------------------------- |
| CacheKeyPrefix     | To specify the prefix of your cache key                      | All                                |
| CacheProviderName  | To specify which provider you want to use                    | All                                |
| IsHighAvailability | Whether caching opreation will break your method             | All                                |
| Expiration         | To specify the expiration of your cache item，the unit is second | EasyCachingAble and EasyCachingPut |
| IsAll              | Whether remove all the cached items start with the CacheKeyPrefix | EasyCachingEvict only              |
| IsBefore           | Remove the cached item before method excute or after method excute | EasyCachingEvict only              |

> One thing to note here is that if you want to use the Put and Evict policies, you should specify CacheKeyPrefix as much as possible, otherwise the cache will not be updated or deleted correctly. This is dependent on the implementation of the generated cache Key, which specifies that CacheKeyPrefix will ignore method information.