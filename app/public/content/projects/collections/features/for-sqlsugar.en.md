Install `DotNetCore.Collections.Paginable.SqlSugar` package:

```shell
Install-Package DotNetCore.Collections.Paginable.SqlSugar
```



then:

```csharp
var sqlSugar = new SqlSugatClient(new ConnectionConfig{
    ConnectionString = connectionString,
    DbType = DbTypee.SqlServer,
    IsAutoCloseConnection = true
});

//... do some config for sqlSugar

var page = _sqlSugar.Query<ExampleModel>().GetPage(1, 9);

var totalPageCount = page.TotalPageCount;
//...
```