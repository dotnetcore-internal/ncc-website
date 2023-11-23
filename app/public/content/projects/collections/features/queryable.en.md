You can get `IQueryable<T>` from `Where` in EfCore or `Query<T>` in NHibernate, and then:

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



Just do it.