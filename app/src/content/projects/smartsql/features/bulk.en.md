```csharp
using (var dbSession= SqlMapper.SessionStore.Open())
{
    var data = SqlMapper.GetDataTable(new RequestContext
    {
        Scope = nameof(AllPrimitive),
        SqlId = "Query",
        Request = new { Taken = 100 }
    });
    data.TableName = "T_AllPrimitive";
    IBulkInsert bulkInsert = new BulkInsert(dbSession);
    bulkInsert.Table = data;
    bulkInsert.Insert();
}
```