批量操作将对应的 DbContext 和数据进行分离由用户自己选择第三方框架比如[`Z.EntityFramework.Plus.EFCore`](https://github.com/zzzprojects/EntityFramework-Plus) 进行批量操作或者 [`EFCore.BulkExtensions`](https://github.com/borisdj/EFCore.BulkExtensions) ,支持一切三方批量框架

```c#
var list = new List<SysUserMod>();
///通过集合返回出对应的k-v归集通过事务开启

var dbContexts = _defaultTableDbContext.BulkShardingEnumerable(list);

           
foreach (var dataSourceMap in dbContexts)
{
    foreach (var tailMap in dataSourceMap.Value)
    {
        tailMap.Key.BulkInsert(tailMap.Value.ToList());
        //tailMap.Key.BulkDelete(tailMap.Value.ToList());
        //tailMap.Key.BulkUpdate(tailMap.Value.ToList());
    }
}

_defaultTableDbContext.SaveChanges();
//or
var dbContexts = _defaultTableDbContext.BulkShardingEnumerable(list);
using (var tran = _defaultTableDbContext.Database.BeginTransaction())
{
    foreach (var dataSourceMap in dbContexts)
    {
        foreach (var tailMap in dataSourceMap.Value)
        {
            tailMap.Key.BulkInsert(tailMap.Value.ToList());
            //tailMap.Key.BulkDelete(tailMap.Value.ToList());
             //tailMap.Key.BulkUpdate(tailMap.Value.ToList());
        }
    }
    _defaultTableDbContext.SaveChanges();
    tran.Commit();
}
```