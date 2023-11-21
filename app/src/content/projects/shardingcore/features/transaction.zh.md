## 事务

1.默认 `SaveChanges` 支持事务

```csharp
await  _defaultShardingDbContext.SaveChangesAsync();  
```

2.手动开启事务 [请参考微软](https://docs.microsoft.com/zh-cn/ef/core/saving/transactions)

```csharp
using (var tran = _defaultTableDbContext.DataBase.BeginTransaction())
{
    ........
    _defaultTableDbContext.SaveChanges();
    tran.Commit();
}
```