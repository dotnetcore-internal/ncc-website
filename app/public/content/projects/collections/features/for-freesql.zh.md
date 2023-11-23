安装 `DotNetCore.Collections.Paginable.FreeSql` 包：

```shell
Install-Package DotNetCore.Collections.Paginable.FreeSql
```


然后：

```csharp
var _freeSql = new FreeSql.FreeSqlBuilder()
    .UseConnectionString(DataType.SqlServer, connectionString)
    .UseAutoSyncStructure(false)
    .Build();

//... do some config for FreeSql

var page = _freeSql.Select<ExampleModel>().GetPage(1, 9);

var totalPageCount = page.TotalPageCount;
//...
```


或直接调用 DbSet 的扩展方法：

```csharp
var ctx = _freeSql.CreateDbContext();
var source = ctx.Set<ExampleModel>();

var page = source.GetPage(1, 9);

var totalPageCount = page.TotalPageCount;
//...
```


又或者

```csharp
using(var ctx = new ExampleDbContext())
{
    var page = ctx.ExampleModels.GetPage(1, 9);

    var totalPageCount = page.TotalPageCount;
    //...
}

.
.
.

class ExampleDbContext: DbContext
{
    public DbSet<ExampleModel> ExampleModel {get; set;}

    protected override void OnConfiguring(DbContextOptionsBuilder builder)
    {
        builder.UseFreeSql(_freeSqlInstance);
    }
}
```