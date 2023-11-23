- Lru 最近最少使用算法
- Fifo 先進先出算法
- RedisCacheProvider
- 其他繼承自ICacheProvider緩存類型均可

```xml
<Caches>
    <Cache Id="LruCache" Type="Lru">
      <Property Name="CacheSize" Value="10"/>
      <FlushOnExecute Statement="AllPrimitive.Insert"/>
      <FlushInterval Hours="1" Minutes="0" Seconds="0"/>
    </Cache>
    <Cache Id="FifoCache" Type="Fifo">
      <Property Name="CacheSize" Value="10"/>
    </Cache>
    <Cache Id="RedisCache" Type="${RedisCacheProvider}">
      <Property Name="ConnectionString" Value="${Redis}" />
      <FlushInterval Seconds="60"/>
    </Cache>
  </Caches>
   <Statement Id="QueryByLruCache"  Cache="LruCache">
      SELECT Top 6 T.* From T_User T;
    </Statement>
```