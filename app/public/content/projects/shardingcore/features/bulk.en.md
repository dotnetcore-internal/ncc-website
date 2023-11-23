Bulk operations are separated from the corresponding DbContext and data, allowing users to choose third-party frameworks such as [`Z.EntityFramework.Plus.EFCore`](https://github.com/zzzprojects/EntityFramework-Plus) or [`EFCore.BulkExtensions`](https://github.com/borisdj/EFCore.BulkExtensions) for bulk operations, supporting all third-party bulk frameworks.

```c#
var list = new List<SysUserMod>();
/// Returns the corresponding k-v aggregation through the collection and opens the transaction

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