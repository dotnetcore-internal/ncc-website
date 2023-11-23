可以通过路由开启表达式缓存针对单个tail的表达式进行缓存支持=,>,>=,<,<=,equal

```c#
public class OrderCreateTimeVirtualTableRoute:AbstractSimpleShardingMonthKeyDateTimeVirtualTableRoute<Order>
{
    //开启表达式缓存
    public override bool EnableRouteParseCompileCache => true;
}
```



针对表达式缓存可以自行重写父类方法来自行实现，也可以仅实现多tail表达式`AbstractShardingRouteParseCompileCacheVirtualTableRoute`,`AbstractShardingRouteParseCompileCacheVirtualDataSourceRoute`

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
/// 系统默认永久单表达式缓存
/// </summary>
/// <param name="parseWhere"></param>
/// <returns>返回null会走<see cref="CustomerCachingCompile"/>这个方法如果还是null就会调用<see cref="Compile"/>方法</returns>
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



开启表达式缓存可以将路由模块的编译由原先的0.14ms升级到0.013ms提示约0.13ms将近10倍性能