### Entry

`conn.GetAsync()` 返回的是一個 Entry 集合，Entry 對應 binlog 記錄，它可能是事務標記也有可能是行數據變化，通過 `Entry.EntryType` 來區分，一般事務的標記在業務消費處理時不需要處理。

示例：

```csharp
var entries = await conn.GetAsync(1024);
foreach (var entry in entries)
{
    //不處理事務標記
    if (entry.EntryType == EntryType.Transactionbegin || entry.EntryType == EntryType.Transactionend)
    {
        continue;
    }
}
```



Entry.Header 包含了一些binlog以及數據庫信息

| 屬性                       | 說明              |
| -------------------------- | ----------------- |
| Entry.Header.LogfileName   | binlog 文件名     |
| Entry.Header.LogfileOffset | binlog 偏移       |
| Entry.Header.SchemaName    | mysql schema 名稱 |
| Entry.Header.TableName     | 表名              |

### RowChange

一般在業務處理中，都會需要行數據的變更，將 Entry 轉換為 `RowChange`對象

示例：

```csharp
RowChange rowChange = null;
try
{
    rowChange = RowChange.Parser.ParseFrom(entry.StoreValue);
}
catch (Exception e)
{
    _logger.LogError(e);
}
```



通過 `RowChange.EventType` 來Row是什麼變化，Update、Delete和 Insert 對應 sql 中的 update、delete 和 insert 語句

通過 `RowChange.RowDatas` 屬性，來訪問 RowChange 對象中包含的行變化數據集合。

示例，遍曆 RowChange 中的行數據：

```csharp
foreach (var rowData in rowChange.RowDatas)
{
    //刪除的數據
    if (eventType == EventType.Delete)
    {
        PrintColumn(rowData.BeforeColumns.ToList());
    }
    //插入的數據
    else if (eventType == EventType.Insert)
    {
        PrintColumn(rowData.AfterColumns.ToList());
    }
    //更新的數據
    else
    {
        _logger.LogInformation("-------> before");
        PrintColumn(rowData.BeforeColumns.ToList());
        _logger.LogInformation("-------> after");
        PrintColumn(rowData.AfterColumns.ToList());
    }
}

private static void PrintColumn(List<Column> columns)
{
    foreach (var column in columns)
    {
        Console.WriteLine($"{column.Name} ： {column.Value}  update=  {column.Updated}");
    }
}
```



### Column

Column 如其名，代表數據庫中表的每一列的信息。

| 屬性名         | 說明         |
| -------------- | ------------ |
| Column.Name    | 列名         |
| Column.Value   | 列的值       |
| Column.Updated | 列是否被更新 |

如執行 sql `update user set Name='Allen'`，那麼獲取到的數據變更則有

```csharp
Column.Name = 'Name';
Column.Value = 'Allen';
Column.Updated = True
```