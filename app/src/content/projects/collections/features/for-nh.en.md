Install `DotNetCore.Collections.Paginable.NHibernate` package:

```shell
Install-Package DotNetCore.Collections.Paginable.NHibernate
```



then:

```csharp
//... do some config for NHibernate by FluentNHibernate.ClassMap<ExampleModel>

using(var session = GetAndOpenSession())
{
    var page = session.QueryOver<ExampleModel>().GetPage(1, 9);

    var totalPageCount = page.TotalPageCount;
    //...
}
```