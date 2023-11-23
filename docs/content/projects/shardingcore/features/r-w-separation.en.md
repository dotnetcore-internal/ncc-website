The framework currently supports master-slave read-write separation `AddReadWriteSeparation`, supporting polling Loop and random Random two read-write separation strategies. 

Because when read-write separation is used, multiple links will lead to inconsistent data reading (such as paging, in fact, it is 2 steps: the first step is to obtain the count, and the second step is to obtain the list), which will cause data in the last few pages to be missing. 

To solve this problem, the framework currently implements a custom read link acquisition strategy
- `ReadConnStringGetStrategyEnum.LatestEveryTime` to indicate that each time is a new (in this case, the above problem will occur), 
- `ReadConnStringGetStrategyEnum.LatestFirstTime` indicates that it is obtained once with the dbcontext as a unit (the same dbcontext will not be a problem), 

and because various nodes read-write separation and a series of network problems may cause the newly written data to not be retrieved, so the system defaults to adding whether to use read-write separation on the dbcontext. 

If false, the default selection is to write the string to read `_defaultTableDbContext.ReadWriteSeparation=false` or use the two encapsulated methods:

```c#
//When the database is switched to A read-only database, only data source A is configured to read data source B
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