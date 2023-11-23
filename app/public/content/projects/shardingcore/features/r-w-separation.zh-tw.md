該框架目前已經支持一主多從的讀寫分離`AddReadWriteSeparation`,支持輪詢 Loop和隨機 Random兩種讀寫分離策略；

又因為讀寫分離多鏈接的時候會導致數據讀寫不一致,(如分頁其實是2步第一步獲取count，第二部獲取list)會導致數據量在最後幾頁出現缺量的問題。

針對這個問題框架目前實現了自定義讀鏈接獲取策略：
- `ReadConnStringGetStrategyEnum.LatestEveryTime`表示為每次都是新的(這個情況下會出現上述問題),
- `ReadConnStringGetStrategyEnum.LatestFirstTime`表示以dbcontext作為單位獲取一次(同dbcontext不會出現問題), 

又因為各節點讀寫分離網絡等一系列問題會導致剛剛寫入的數據沒辦法獲取到所以系統默認在dbcontext上添加是否使用讀寫分離

如果false默認選擇寫字符串去讀取`_defaultTableDbContext.ReadWriteSeparation=false`或者使用兩個封裝好的方法

```c#
//切換到只讀數據庫，只讀數據庫又只配置了A數據源讀取B數據源
_virtualDbContext.ReadWriteSeparationReadOnly();
_virtualDbContext.ReadWriteSeparationWriteOnly();
```



```c#
services.AddShardingDbContext<DefaultShardingDbContext>(
                    (conStr, builder) => builder.UseSqlServer(conStr).UseLoggerFactory(efLogger)
                ).Begin(o =>
                {
                    o.CreateShardingTableOnStart = true;
                    o.EnsureCreatedWithOutShardingTable = true;
                })
                .AddShardingTransaction((connection, builder) =>
                    builder.UseSqlServer(connection).UseLoggerFactory(efLogger))
                .AddDefaultDataSource("ds0",
                    "Data Source=localhost;Initial Catalog=ShardingCoreDB1;Integrated Security=True;")
                .AddShardingTableRoute(o =>
                {
                    o.AddShardingTableRoute<SysUserModVirtualTableRoute>();
                }).AddReadWriteSeparation(o =>
                {
                    return new Dictionary<string, ISet<string>>()
                    {
                        {
                            "ds0", new HashSet<string>(){
                            "Data Source=localhost;Initial Catalog=ShardingCoreDBReadOnly1;Integrated Security=True;",
                            "Data Source=localhost;Initial Catalog=ShardingCoreDBReadOnly2;Integrated Security=True;"}
                        }
                    };
                }, ReadStrategyEnum.Loop,defaultEnable:true).End();

            _virtualDbContext.ReadWriteSeparationReadOnly();
                //reslove read write delay data not found
                //dbcontext use write connection string 
            _virtualDbContext.ReadWriteSeparationWriteOnly();
```