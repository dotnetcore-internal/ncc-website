Sharding-core itself uses streaming processing to obtain data, and there is basically no difference in performance under normal circumstances compared to a single table. However, after paging is skipped X pages, the performance will decrease as X increases. The current framework has implemented a high-performance paging that can be configured according to user preferences to implement paging functions.

Supported versions `x.2.0.16+`

## How to enable paging configuration

For example, we configure the user monthly new table for paging, implement the `IPaginationConfiguration<>` interface, and the interface is a pagination configuration interface

```c#
public class SysUserSalaryPaginationConfiguration : IPaginationConfiguration<SysUserSalary>
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

## Configuration for route

1. Add configuration in the corresponding user route [XXXXXXVirtualTableRoute]

```c#
public override IPaginationConfiguration<SysUserSalary> CreatePaginationConfiguration()
{
    return new SysUserSalaryPaginationConfiguration();
}
```

## What does the Configure inside mean?

1. `builder.PaginationSequence(o => o.Id)` Configures the pagination field for the order by field when the paginated query is Id. The paginated query rules are set through `UseRouteCompare`. The string is the table tail or data source name, which specifically means that if the current paginated query is designed with three tables, table1, table2, and table3, if no id is configured, then you need to query three tables and perform streaming aggregation. If id is configured, if the SQL query brings the id as the order by field, then it does not need to query three tables, and it can directly query table1 if the table1 count is greater than the skipped page. Assume that the paginated query retrieves 10 rows. The original time is O(100) now. The time is O(10) because table1 skips 90 rows and the remaining 10 rows;

2. `UseQueryMatch` is what it means. This means that you need to match the rules. Whether it is the current class property or only the sorting name is the same, because there may be SELECT new{} anonymous objects, the PrimaryMatch means that whether it is the first main order by match, the UseAppendIfOrderNone means whether to add this property sorting when there is no corresponding order query condition, which can ensure the optimal order by performance

3. `builder.ConfigReverseShardingPage` indicates whether to enable reverse paging. Because the skip is too much after positive paging, it will cause the data to be skipped too much, especially for the last few pages. If reverse paging is enabled, it is actually the reverse pagination of the last few pages. The first parameter indicates the skip factor, that is, skip must be greater than the total * the factor (0-1 double), and the second parameter indicates the minimum total number of rows that must be satisfied at the same time (must be greater than 500), and reverse pagination has a lower priority than positive pagination. 

4. How to use:

```c#
var shardingPageResultAsync = await _defaultTableDbContext.Set<SysUserMod>().OrderBy(o=>o.Age).ToShardingPageAsync(pageIndex, pageSize);
```

> Note: If you are sorted by time, it is recommended to enable it and add a time-ordered sequence. If you are divided into modules or custom tables, it is recommended to use Id as the order-by sequence. If there is no special situation, please use id as the order-by sequence and add reverse paging as a performance optimization. If the entity supports both distributed and partitioned databases, and both routing support the same property as the order-by sequence, the priority is the distributed first and then the partitioned table.