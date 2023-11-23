默认shardingcore不支持自动追踪,并且也不建议使用自动追踪,如果你有需要shardingcore也默认提供了自动追踪功能 有两点需要注意 目前仅支持单主键对象 1.shardingcore仅支持dbcontext的model的类型的整个查询匿名类型不支持联级查询不支持 2.shardingcore的单个查询依然走数据库不走缓存如果查询出来的结果缓存里面有就返回缓存里面的而不是数据库的 3.tolist等操作会查询数据库返回的时候判断是否已经追踪如果已经追踪则返回缓存里已经追踪了的值 4.支持 `first`,`firstordefault`,`last`,`lastordefault`,`single`,`singleordefault` 如何开启

```c#
services.AddShardingDbContext<DefaultShardingDbContext>(.......)
        .Begin(o => {
            o.CreateShardingTableOnStart = true;
            o.EnsureCreatedWithOutShardingTable = true;
            //autotrack support asnotracking astracking QueryTrackingBehavior.TrackAll
            o.AutoTrackEntity = true; 
        })
```