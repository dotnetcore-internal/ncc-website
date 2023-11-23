安裝 `DotNetCore.Collections.Paginable.Chloe` 包：

```shell
Install-Package DotNetCore.Collections.Paginable.Chloe
```


然後：

```csharp
//... do some config for Chloe by EntityTypeBuilder<ExampleModel>

using(var db = new MsSqlContext(connectionString))
{
    var page = db.Query<ExampleModel>().GetPage(15, 50);

    var totalPageCount = page.TotalPageCount;
    var totalMemberCount = page.TotalMemberCount;
    var pageSize = page.PageSize;

    var currentPageNumber = page.CurrentPageNumber;
    var currentPageSize = page.CurrentPageSize;

    var hasNext = page.HasNext;
    var HasPrevious = page.HasPrevious;

    for(var i = 0; i < currentPageSize; i++)
    {
        var id = page[i].Value.Id;
    }
}
```