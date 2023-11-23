sharding-core本身使用流式處理獲取數據在普通情況下和單表的差距基本沒有,但是在分頁跳過X頁後,性能會隨著X的增大而減小O(n) 目前該框架已經實現了一套高性能分頁可以根據用戶配置,實現分頁功能。

支持版本`x.2.0.16+`

## 如何開啟分頁配置

比如我們針對用戶月新表進行分頁配置,先實現`IPaginationConfiguration<>`接口,該接口是分頁配置接口

```c#
public class SysUserSalaryPaginationConfiguration:IPaginationConfiguration<SysUserSalary>
{
    public void Configure(PaginationBuilder<SysUserSalary> builder)
    {
        builder.PaginationSequence(o => o.Id)
            .UseRouteCompare(Comparer<string>.Default)
            .UseQueryMatch(PaginationMatchEnum.Owner | PaginationMatchEnum.Named | PaginationMatchEnum.PrimaryMatch);
        builder.PaginationSequence(o => o.DateOfMonth)
            .UseQueryMatch(PaginationMatchEnum.Owner | PaginationMatchEnum.Named | PaginationMatchEnum.PrimaryMatch).UseAppendIfOrderNone(10);
        builder.PaginationSequence(o => o.Salary)
            .UseQueryMatch(PaginationMatchEnum.Owner | PaginationMatchEnum.Named | PaginationMatchEnum.PrimaryMatch).UseAppendIfOrderNone();
        builder.ConfigReverseShardingPage(0.5d,10000L);
    }
}
```

## 路由配置

在對應的用戶路由中添加配置 [XXXXXXVirtualTableRoute]

```c#
public override IPaginationConfiguration<SysUserSalary> CreatePaginationConfiguration()
{
    return new SysUserSalaryPaginationConfiguration();
}
```

## Configure 內部為什麼意思?

1. builder.PaginationSequence(o => o.Id) 配置當分頁orderby 字段為Id時那麼分表所對應的表結構為順序,順序的規則通過`UseRouteCompare`來設置,其中string為表tail 或 data source name, 具體什麼意思就是說如果本次分頁設計3張表分別是table1,table2,table3,如果我沒配置id的情況下那麼需要查詢3張表然後分別進行流式聚合,如果我配置了id的情況下,如果本次sql查詢帶上了id作為order by字段 那麼就不需要分別查詢3張表,可以直接查詢table1如果table1的count大於你要跳過的頁數,假設分頁查詢先查詢多少條,table1:100條,table2:200條,table3:300條 如果你要跳過90條獲取10條原先的時間就是O(100)現在的時間就是O(10)因為table1跳過了90條還剩餘10條;
2. `UseQueryMatch`是什麼意思,這個就是表示你要匹配的規則,是必須是當前這個類下的屬性還是說只需要排序名稱一樣即可,因為有可能select new{}匿名對象類型就會不一樣,`PrimaryMatch`表示是否只需要第一個主要的 orderby匹配上就行了,`UseAppendIfOrderNone`表示是否需要開啟在沒有對應order查詢條件的前提下添加本屬性排序,這樣可以保證順序排序性能最優
3. `builder.ConfigReverseShardingPage` 表示是否需要啟用反向排序,因為正向排序在skip過多後會導致需要跳過的數據過多,尤其是最後幾頁,如果開啟其實最後幾頁就是前幾頁的反向排序,其中第一個參數表示跳過的因子,就是說 skip必須大於分頁總total*該因子(0-1的double),第二個參數表示最少需要total多少條必須同時滿足兩個條件才會開啟(必須大於500),並且反向排序優先級低於順序排序
4. 如何使用：

```c#
var shardingPageResultAsync = await _defaultTableDbContext.Set<SysUserMod>().OrderBy(o=>o.Age).ToShardingPageAsync(pageIndex, pageSize);
```


> 注意：如果你是按時間排序無論何種排序建議開啟並且加上時間順序排序,如果你是取模或者自定義分表,建議將Id作為順序排序,如果沒有特殊情況請使用id排序並且加上反向排序作為性能優化,如果entity同時支持分表分庫並且兩個路由都支持同一個屬性的順序排序優先級為先分庫後分表