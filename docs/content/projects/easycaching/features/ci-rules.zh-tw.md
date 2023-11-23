屬性是攔截的重要組成部分。對於這三個策略，提供了三個屬性。

- EasyCachingAble
- EasyCachingPut
- EasyCachingEvict

要攔截此方法，只需將上述三個屬性添加到其接口或繼承其一些屬性。

以下是一個示例：

```public interface IDemoService 
{
    [EasyCachingAble(Expiration = 10)]
    string GetCurrentUtcTime();
}
```

可以使用的一些參數說明

| 屬性           | 描述                                                  | 應用                              |
| ------------------ | ------------------------------------------------------------ | ---------------------------------- |
| CacheKeyPrefix     | 指定要使用的緩存鍵的前綴                      | 所有                                |
| CacheProviderName  | 指定要使用的提供程序名稱                    | 所有                                |
| IsHighAvailability | 是否緩存操作會中斷您的方法             | 所有                                |
| Expiration         | 指定緩存項的過期時間，單位為秒 | EasyCachingAble 和 EasyCachingPut |
| IsAll              | 是否刪除以 CacheKeyPrefix 開頭的所有緩存項 | EasyCachingEvict 僅              |
| IsBefore           | 在方法執行之前或之後刪除緩存項 | EasyCachingEvict 僅              |

> 這裏要注意的是，如果要使用 Put 和 Evict 策略，應盡可能指定 CacheKeyPrefix，否則緩存將無法正確更新或刪除。這取決於生成的緩存 Key 的實現，指定 CacheKeyPrefix 將忽略方法信息。