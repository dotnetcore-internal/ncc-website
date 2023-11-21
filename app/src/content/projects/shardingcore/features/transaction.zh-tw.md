## 事務

1.默認 `SaveChanges` 支持事務

```csharp
await  _defaultShardingDbContext.SaveChangesAsync();  
```

2.手動開啟事務 [請參考微軟](https://docs.microsoft.com/zh-cn/ef/core/saving/transactions)

```csharp
using (var tran = _defaultTableDbContext.DataBase.BeginTransaction())
{
    ........
    _defaultTableDbContext.SaveChanges();
    tran.Commit();
}
```