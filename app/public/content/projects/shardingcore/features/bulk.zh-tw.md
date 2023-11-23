批量操作將對應的 DbContext 和數據進行分離由用戶自己選擇第三方框架比如[`Z.EntityFramework.Plus.EFCore`](https://github.com/zzzprojects/EntityFramework-Plus) 進行批量操作或者 [`EFCore.BulkExtensions`](https://github.com/borisdj/EFCore.BulkExtensions) ,支持一切三方批量框架

```c#
var list = new List<SysUserMod>();
///通過集合返回出對應的k-v歸集通過事務開啟

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