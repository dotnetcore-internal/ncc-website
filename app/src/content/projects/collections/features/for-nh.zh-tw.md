安裝 `DotNetCore.Collections.Paginable.NHibernate` 包：

```shell
Install-Package DotNetCore.Collections.Paginable.NHibernate
```


然後：

```csharp
//... do some config for NHibernate by FluentNHibernate.ClassMap<ExampleModel>

using(var session = GetAndOpenSession())
{
    var page = session.QueryOver<ExampleModel>().GetPage(1, 9);

    var totalPageCount = page.TotalPageCount;
    //...
}
```