Install `DotNetCore.Collections.Paginable.SqlKata` package:

```shell
Install-Package DotNetCore.Collections.Paginable.SqlKata
```



then:

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