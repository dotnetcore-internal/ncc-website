SmartSql also provides CUD extension functions to help developers generate good CUD-SQL for direct developer use without having to write any configuration.

```csharp
public static TEntity GetById<TEntity, TPrimaryKey>(this ISqlMapper);
public static TPrimaryKey Insert<TEntity, TPrimaryKey>(this ISqlMapper sqlMapper, TEntity entity);
public static int DyUpdate<TEntity>(this ISqlMapper sqlMapper, object entity);
public static int Update<TEntity>(this ISqlMapper sqlMapper, TEntity entity);
public static int DeleteById<TEntity, TPrimaryKey>(this ISqlMapper sqlMapper, TPrimaryKey id);
public static int DeleteMany<TEntity, TPrimaryKey>(this ISqlMapper sqlMapper, IEnumerable<TPrimaryKey> ids);
```