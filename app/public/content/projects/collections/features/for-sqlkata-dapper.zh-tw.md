安裝 `DotNetCore.Collections.Paginable.SqlKata` 包：

```shell
Install-Package DotNetCore.Collections.Paginable.SqlKata
```


然後：

```csharp
using(var connection = new SqlConnection(connectionString))
{
    connection.Open();

    var compiler = new SqlServerCompiler();
    var db = new QueryFactory(connection, compiler);

    var page = db.Query("ExampleModels").GetPage<ExampleModel>(1, 9);

    var totalPageCount = page.TotalCount;
    //...
}
```