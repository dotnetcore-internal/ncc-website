Install `DotNetCore.Collections.Paginable.DosOrm` package:

```shell
Install-Package DotNetCore.Collections.Paginable.DosOrm
```



then:

```csharp
var _session = new DbSession(DatabaseType.SqlServer, connectionString);

var page = _dosOrmSession.From<ExampleModel>().GetPage(1, 9);

var totalPageCount = page.TotalPageCount;
//...

.
.
.

class ExampleModel : Entity
{
    public ExampleModel() : base("ExampleModels") { }

    public virtual int Id { get; set; }

    public override Field[] GetPrimaryKeyFields() => new Field[] { new Field("Id"), };
}
```