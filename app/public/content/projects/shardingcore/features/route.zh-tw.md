## 手動路由

```csharp
ctor inject IShardingRouteManager shardingRouteManager

    public class SysUserModVirtualTableRoute : AbstractSimpleShardingModKeyStringVirtualTableRoute<SysUserMod>
    {
        /// <summary>
        /// 開啟提示路由
        /// </summary>
        protected override bool EnableHintRoute => true;

        public SysUserModVirtualTableRoute() : base(2,3)
        {
        }
    }


    

    using (_shardingRouteManager.CreateScope())
    {
        _shardingRouteManager.Current.TryCreateOrAddMustTail<SysUserMod>("00");

        var mod00s = await _defaultTableDbContext.Set<SysUserMod>().Skip(10).Take(11).ToListAsync();
    }
```