Install `DotNetCore.Collections.Paginable.FreeSql` package:

```shell
Install-Package DotNetCore.Collections.Paginable.FreeSql
```



then:

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



or call the extension method of DbSet directly:

```csharp
var ctx = _freeSql.CreateDbContext();
var source = ctx.Set<ExampleModel>();

var page = source.GetPage(1, 9);

var totalPageCount = page.TotalPageCount;
//...
```



or

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