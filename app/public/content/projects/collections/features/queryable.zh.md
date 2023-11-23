你可以在 EFCore 中通过 `Where` 或 NHibernate 中通过 `Query<T>` 来获得 `IQueryable<T>`，然后：

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

干就对了。