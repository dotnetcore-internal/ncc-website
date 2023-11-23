### 安裝

```shell
Install-Package DotNetCore.Collections.Paginable
```



### 編寫代碼

```csharp
IEnumerable<ExampleModel> list = GetList();//...

//Get a collection of Page, each page has 50 PageMembers
var paginableList = list.ToPaginable(50);

//Get page 15th
var page = paginableList.GetPage(15);

for (var i = 0; i < page.CurrentPageSize; i++)
{
    var itemNumber = page[i].ItemNumber;
    var itemValue = page[i].Value;
}
```



或者使用更精簡的代碼:

```csharp
IEnumerable<ExampleModel> list = GetList();//...

//Get page 15th, each page has 50 items.
ar page = list.GetPage(15, 50);

for (var i = 0; i < page.CurrentPageSize; i++)
{
    var itemNumber = page[i].ItemNumber;
    var itemValue = page[i].Value;
}
```