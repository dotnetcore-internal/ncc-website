```csharp
//... do come config for EFCore

using(var context = new ExampleDbContext())
{
    var page = context.ExampleModels.Where(x => x.Id > 100).GetPage(1, 9);

    var totalPageCount = page.TotalPageCount;
    //...
}
```

或直接調用 DbSet 的擴展方法

首先安裝 `DotNetCore.Collections.Paginable.EntityFrameworkCore` 包：

```shell
Install-Package DotNetCore.Collections.Paginable.EntityFrameworkCore
```


然後：

```csharp
using(var context = new ExampleDbContext())
{
    var pagee = context.ExampleModels.GetPage(1, 9);

    var totalPageCount = page.TotalPageCount;
    //...
}
//...
```