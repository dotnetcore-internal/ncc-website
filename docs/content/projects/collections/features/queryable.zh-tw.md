你可以在 EFCore 中通過 `Where` 或 NHibernate 中通過 `Query<T>` 來獲得 `IQueryable<T>`，然後：

```csharp
IQueryable<ExampleModel> queryable = GetQueryable();//...

var page = queryable.GetPage(15, 50);

var totalMemberCount = page.TotalMemberCount;

for(var i = 0; i < page.CurrentPageSize; i++)
{
    var itemNumber = page[i].ItemNumber;
    var itemValue = page[i].Value;
}
```

幹就對了。