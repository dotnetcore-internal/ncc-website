sharding-core 本身使用流式处理获取数据在普通情况下和单表的差距基本没有,但是在分页跳过 X 页后,性能会随着X的增大而减小 O(n) 目前该框架已经实现了一套高性能分页可以根据用户配置,实现分页功能。

支持版本`x.2.0.16+`

## 如何开启分页配置

比如我们针对用户月新表进行分页配置,先实现 `IPaginationConfiguration<>` 接口,该接口是分页配置接口

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

## 添加配置 

在对应的用户路由中添加配置 [XXXXXXVirtualTableRoute]

```c#
public override IPaginationConfiguration<SysUserSalary> CreatePaginationConfiguration()
{
    return new SysUserSalaryPaginationConfiguration();
}
```


## Configure内部为什么意思?

1. `builder.PaginationSequence(o => o.Id)` 配置当分页 `orderby` 字段为 `Id` 时那么分表所对应的表结构为顺序,顺序的规则通过 `UseRouteCompare` 来设置,其中 string 为表 `tail` 或 data source name, 具体什么意思就是说如果本次分页设计 3 张表分别是 `table1`,`table2`,`table3`,如果我没配置id的情况下那么需要查询3张表然后分别进行流式聚合,如果我配置了id的情况下,如果本次sql查询带上了id作为order by字段 那么就不需要分别查询3张表,可以直接查询table1如果table1的count大于你要跳过的页数,假设分页查询先查询多少条,table1:100条,table2:200条,table3:300条 如果你要跳过90条获取10条原先的时间就是O(100)现在的时间就是O(10)因为table1跳过了90条还剩余10条;
2. `UseQueryMatch`是什么意思,这个就是表示你要匹配的规则,是必须是当前这个类下的属性还是说只需要排序名称一样即可,因为有可能select new{}匿名对象类型就会不一样,`PrimaryMatch`表示是否只需要第一个主要的 orderby匹配上就行了,`UseAppendIfOrderNone`表示是否需要开启在没有对应order查询条件的前提下添加本属性排序,这样可以保证顺序排序性能最优
3. `builder.ConfigReverseShardingPage` 表示是否需要启用反向排序,因为正向排序在skip过多后会导致需要跳过的数据过多,尤其是最后几页,如果开启其实最后几页就是前几页的反向排序,其中第一个参数表示跳过的因子,就是说 skip必须大于分页总total*该因子(0-1的double),第二个参数表示最少需要total多少条必须同时满足两个条件才会开启(必须大于500),并且反向排序优先级低于顺序排序
4. 如何使用：

```c#
var shardingPageResultAsync = await _defaultTableDbContext.Set<SysUserMod>().OrderBy(o=>o.Age).ToShardingPageAsync(pageIndex, pageSize);
```

> 注意：如果你是按时间排序无论何种排序建议开启并且加上时间顺序排序,如果你是取模或者自定义分表,建议将Id作为顺序排序,如果没有特殊情况请使用id排序并且加上反向排序作为性能优化,如果entity同时支持分表分库并且两个路由都支持同一个属性的顺序排序优先级为先分库后分表