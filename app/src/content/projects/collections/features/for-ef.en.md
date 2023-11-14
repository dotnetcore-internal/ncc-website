```csharp
//... do come config for EFCore

using(var context = new ExampleDbContext())
{
    var page = context.ExampleModels.Where(x => x.Id > 100).GetPage(1, 9);

    var totalPageCount = page.TotalPageCount;
    //...
}
```

or call the extension method of DbSet directly:

Install `DotNetCore.Collections.Paginable.EntityFrameworkCore` package first:

```shell
Install-Package DotNetCore.Collections.Paginable.EntityFrameworkCore
```



then:

```csharp
using(var context = new ExampleDbContext())
{
    var pagee = context.ExampleModels.GetPage(1, 9);

    var totalPageCount = page.TotalPageCount;
    //...
}
//...
```