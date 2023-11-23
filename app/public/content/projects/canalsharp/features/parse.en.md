### Entry

`conn.GetAsync()` returns a collection of Entries, each corresponding to a binlog record. An Entry can either be a transaction marker or a row data change, distinguished by `Entry.EntryType`. Generally, transaction markers do not need to be handled during business consumption processing.

Example:

```csharp
var entries = await conn.GetAsync(1024);
foreach (var entry in entries)
{
    // Don't handle transaction markers
    if (entry.EntryType == EntryType.Transactionbegin || entry.EntryType == EntryType.Transactionend)
    {
        continue;
    }
}
```

The Entry.Header contains some information about the binlog and the database:

| Property | Description                |
| -------- | ------------------------ |
| Entry.Header.LogfileName   | The name of the binlog file |
| Entry.Header.LogfileOffset | The offset of the binlog file |
| Entry.Header.SchemaName    | The name of the MySQL schema |
| Entry.Header.TableName     | The name of the table        |

### RowChange

In business processing, row data changes are usually required, so convert the Entry to a `RowChange` object.

Example:

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



By `RowChange.EventType`, you can determine what kind of change the Row has undergone. `EventType.Update`, `EventType.Delete`, and `EventType.Insert` correspond to the `UPDATE`, `DELETE`, and `INSERT` statements in SQL.

You can access the collection of row change data contained in the `RowChange` object through the `RowChange.RowDatas` property.

Example, iterating through the row data in the RowChange:

```csharp
foreach (var rowData in rowChange.RowDatas)
{
    // Deleted data
    if (eventType == EventType.Delete)
    {
        PrintColumn(rowData.BeforeColumns.ToList());
    }
    // Inserted data
    else if (eventType == EventType.Insert)
    {
        PrintColumn(rowData.AfterColumns.ToList());
    }
    // Updated data
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

As its name suggests, a `Column` represents information about each column in a database table.

| Property Name | Description |
| ------------ | ------------ |
| Column.Name   | Column name |
| Column.Value  | Column value |
| Column.Updated | Whether the column has been updated |

For example, if you execute the SQL statement `UPDATE user SET Name='Allen'`, the data changes you obtain will have the following columns:

```csharp
Column.Name = 'Name';
Column.Value = 'Allen';
Column.Updated = True
```