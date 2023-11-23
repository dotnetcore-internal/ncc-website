默認shardingcore不支持自動追蹤,並且也不建議使用自動追蹤,如果你有需要shardingcore也默認提供了自動追蹤功能 有兩點需要注意 目前僅支持單主鍵對象 1.shardingcore僅支持dbcontext的model的類型的整個查詢匿名類型不支持聯級查詢不支持 2.shardingcore的單個查詢依然走數據庫不走緩存如果查詢出來的結果緩存裏面有就返回緩存裏面的而不是數據庫的 3.tolist等操作會查詢數據庫返回的時候判斷是否已經追蹤如果已經追蹤則返回緩存裏已經追蹤了的值 4.支持 `first`,`firstordefault`,`last`,`lastordefault`,`single`,`singleordefault` 如何開啟

```c#
services.AddShardingDbContext<DefaultShardingDbContext>(.......)
        .Begin(o => {
            o.CreateShardingTableOnStart = true;
            o.EnsureCreatedWithOutShardingTable = true;
            //autotrack support asnotracking astracking QueryTrackingBehavior.TrackAll
            o.AutoTrackEntity = true; 
        })
```