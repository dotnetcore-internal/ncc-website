可以通過路由開啟表達式緩存針對單個tail的表達式進行緩存支持=,>,>=,<,<=,equal

```c#
public class OrderCreateTimeVirtualTableRoute:AbstractSimpleShardingMonthKeyDateTimeVirtualTableRoute<Order>
{
    //開啟表達式緩存
    public override bool EnableRouteParseCompileCache => true;
}
```



針對表達式緩存可以自行重寫父類方法來自行實現，也可以僅實現多tail表達式`AbstractShardingRouteParseCompileCacheVirtualTableRoute`,`AbstractShardingRouteParseCompileCacheVirtualDataSourceRoute`

```c#
public virtual Func<string, bool> CachingCompile(Expression<Func<string, bool>> parseWhere)
{
	if (EnableRouteParseCompileCache)
    {
    	var doCachingCompile = DoCachingCompile(parseWhere);
        
        if (doCachingCompile != null)
        	return doCachingCompile;
        
        doCachingCompile = CustomerCachingCompile(parseWhere);
        
        if (doCachingCompile != null)
            return doCachingCompile;
    }
    return parseWhere.Compile();
}

/// <summary>
/// 系統默認永久單表達式緩存
/// </summary>
/// <param name="parseWhere"></param>
/// <returns>返回null會走<see cref="CustomerCachingCompile"/>這個方法如果還是null就會調用<see cref="Compile"/>方法</returns>
protected virtual Func<string, bool> DoCachingCompile(Expression<Func<string, bool>> parseWhere)
{
    var shouldCache = ShouldCache(parseWhere);
    if(shouldCache)
       return _routeCompileCaches.GetOrAdd(parseWhere, key => parseWhere.Compile());
    return null;
}

protected virtual Func<string, bool> CustomerCachingCompile(Expression<Func<string, bool>> parseWhere)
{
    return null;
}
```



開啟表達式緩存可以將路由模塊的編譯由原先的0.14ms升級到0.013ms提示約0.13ms將近10倍性能