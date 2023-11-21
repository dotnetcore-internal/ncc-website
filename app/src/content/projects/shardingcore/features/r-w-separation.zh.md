该框架目前已经支持一主多从的读写分离`AddReadWriteSeparation`,支持轮询 Loop和随机 Random两种读写分离策略。

又因为读写分离多链接的时候会导致数据读写不一致,(如分页其实是2步第一步获取count，第二部获取list)会导致数据量在最后几页出现缺量的问题。

针对这个问题框架目前实现了自定义读链接获取策略：
- `ReadConnStringGetStrategyEnum.LatestEveryTime`表示为每次都是新的(这个情况下会出现上述问题),
- `ReadConnStringGetStrategyEnum.LatestFirstTime`表示以dbcontext作为单位获取一次(同dbcontext不会出现问题),

又因为各节点读写分离网络等一系列问题会导致刚刚写入的数据没办法获取到所以系统默认在dbcontext上添加是否使用读写分离

如果false默认选择写字符串去读取`_defaultTableDbContext.ReadWriteSeparation=false`或者使用两个封装好的方法

```c#
//切换到只读数据库，只读数据库又只配置了A数据源读取B数据源
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