[TOC]

## 安裝

### 通過Nuget 安裝 SmartSql.Schema 獲得智能提示

```powershell
Install-Package SmartSql.Schema
```

### 全局安裝 Schema 獲得智能提示

下載以下倆個文件至 Microsoft Visual Studio XSD安裝目錄

> VS2017目錄地址：\Microsoft Visual Studio\2017\Enterprise\Xml\Schemas

| 文件                  |                                                         地址 |
| --------------------- | -----------------------------------------------------------: |
| SmartSqlMapConfig.xsd | [SmartSqlMapConfig.xsd](https://raw.githubusercontent.com/Ahoo-Wang/SmartSql/master/doc/Schema/SmartSqlMapConfig.xsd) |
| SmartSqlMap.xsd       | [SmartSqlMap.xsd](https://raw.githubusercontent.com/Ahoo-Wang/SmartSql/master/doc/Schema/SmartSqlMap.xsd) |

![智能提示](/articles/projects/smartsql/assets/quick-start-01.png)

```powershell
Install-Package SmartSql
// 以及相應ADO.NET驅動
```

## 從連接字符串創建SmartSql實例

```csharp
var smartSqlBuilder = new SmartSqlBuilder()
    .UseDataSource(DbProvider.SQLSERVER, ConnectionString)
    .Build();
```

## 從XML中創建SmartSql實例

```xml
<?xml version="1.0" encoding="utf-8" ?>
<SmartSqlMapConfig xmlns="http://SmartSql.net/schemas/SmartSqlMapConfig.xsd">
  <Settings IgnoreParameterCase="false" ParameterPrefix="$" IsCacheEnabled="true"/>
  <Properties>
    <Property Name="ConnectionString" Value="Data Source=.;Initial Catalog=SmartSqlTestDB;Integrated Security=True"/>  
  </Properties>
  <Database>
    <DbProvider Name="SqlServer"/>
    <Write Name="WriteDB" ConnectionString="${ConnectionString}"/>
    <Read Name="ReadDb-1" ConnectionString="${ConnectionString}" Weight="100"/>
  </Database>
  <IdGenerator Type="SnowflakeId">
    <Properties>
      <Property Name="WorkerIdBits" Value="10"/>
      <Property Name="WorkerId" Value="888"/>
      <Property Name="Sequence" Value="14"/>
    </Properties>
  </IdGenerator>
  <SmartSqlMaps>
    <SmartSqlMap Path="Maps" Type="Directory"/>
  </SmartSqlMaps>
</SmartSqlMapConfig>
<?xml version="1.0" encoding="utf-8" ?>
<SmartSqlMap Scope="User" xmlns="http://SmartSql.net/schemas/SmartSqlMap.xsd">
  <Statements>
    <Statement Id="QueryParams">
      <Where>
        <IsNotEmpty Prepend="And" Property="Id">
          T.Id = @Id
        </IsNotEmpty>
        <IsNotEmpty Prepend="And" Property="UserName">
          T.UserName = @UserName
        </IsNotEmpty>
        <IsNotEmpty Prepend="And" Property="ExtendedInfo">
          T.ExtendedInfo = @ExtendedInfo
        </IsNotEmpty>
      </Where>
    </Statement>
    <!--新增-->
    <Statement Id="Insert">
      INSERT INTO T_User
      (
      Id,
      UserName,
      ExtendedInfo
      )
      VALUES
      (
      @Id,
      @UserName,
      @ExtendedInfo
      );
      Select Scope_Identity();
    </Statement>
    <!--刪除-->
    <Statement Id="Delete">
      Delete From T_User
      Where Id=@Id
    </Statement>
    <!--更新-->
    <Statement Id="Update">
      UPDATE T_User
      <Set>
        <IsProperty Prepend="," Property="UserName">
          UserName = @UserName
        </IsProperty>
        <IsProperty Prepend="," Property="ExtendedInfo">
          ExtendedInfo = @ExtendedInfo
        </IsProperty>
      </Set>
      Where Id=@Id
    </Statement>

    <!--獲取數據列-->
    <Statement Id="Query" >
      SELECT
      <IsNotEmpty Prepend="Top" Property="Taken">
        (@Taken)
      </IsNotEmpty>
      T.* From T_User T
      <Include RefId="QueryParams" />
      <Switch Prepend="Order By" Property="OrderBy">
        <Default>
          T.Id Desc
        </Default>
      </Switch>
    </Statement>
    <!--獲取分頁數據-->
    <Statement Id="QueryByPage" >
      Select T.* From T_User T With(NoLock)
      <Include RefId="QueryParams" />
      Order By T.Id Desc
      Offset ((@PageIndex-1)*@PageSize) Rows Fetch Next @PageSize Rows Only;

      Select Count(1) From T_User T
      <Include RefId="QueryParams" />
    </Statement>
    <!--獲取表映射實體-->
    <Statement Id="GetEntity" >
      Select Top 1 T.* From T_User T With(NoLock)
      <Where Min="1">
        <IsNotEmpty Prepend="And" Property="Id">
          T.Id=@Id
        </IsNotEmpty>
      </Where>
    </Statement>
  </Statements>
</SmartSqlMap>
var smartSqlBuilder = new SmartSqlBuilder()
    .UseXmlConfig()
    .Build();
```

## SmartSqlBuilder 生命周期

SmartSqlBuilder 的最佳作用域是應用作用域。 可以使用單例模式或者靜態單例模式。

## IDbSession

| 函數                |                                                         說明 |
| :------------------ | -----------------------------------------------------------: |
| Execute             |               IDbCommand.ExecuteNonQuery，執行返回受影響行數 |
| ExecuteScalar       | IDbCommand.ExecuteScalar,執行並返回查詢返回的ReultSet中第一行的第一列 |
| Query               |                                             執行返回實體列表 |
| QuerySingle         |                                             執行返回單個實體 |
| GetDataTable        |                                            執行返回DataTable |
| GetDataSet          |                                              執行返回DataSet |
| BeginTransaction    |                                                     開啟事務 |
| CommitTransaction   |                                                     提交事務 |
| RollbackTransaction |                                                     回滾事務 |

```csharp
var dbSessionFactory = new SmartSqlBuilder()
    .UseXmlConfig()
    .Build()
    .GetDbSessionFactory();

    using (var dbSession = dbSessionFactory.Open())
    {
        // Do Somethings
    }
```

### ExecuteScalar

```csharp
var id = DbSession.ExecuteScalar<long>(new RequestContext
            {
                Scope = nameof(User),
                SqlId = "Insert",
                Request = new User
                {
                    UserName = "SmartSql"
                }
            });
```

### Execute

```csharp
var id = DbSession.Execute(new RequestContext
            {
                Scope = nameof(User),
                SqlId = "Update",
                Request = new User
                {
                    Id=1,
                    UserName = "SmartSql"
                }
            });
```

### Query

```csharp
var list = DbSession.Query<User>(new RequestContext
            {
                Scope = nameof(User),
                SqlId = "Query",
                Request = new { Taken = 100 }
            });
```

### QuerySingle

```csharp
var entity = DbSession.QuerySingle<User>(new RequestContext
            {
                Scope = nameof(User),
                SqlId = "GetEntity",
                Request = new { Id = id }
            });
```

### QueryByPage

通過傳入 ValueTuple ，將多個返回結果合並。

```csharp
var result = DbSession.QuerySingle<ValueTuple<IEnumerable<User>, int>>(new RequestContext
            {
                Scope = nameof(User),
                SqlId = "QueryByPage",
                Request = new { PageSize = 10, PageIndex = 1 }
            });
```

### StoredProcedure

```csharp
            var dbParameterCollection = new SqlParameterCollection();
            dbParameterCollection.Add(new SqlParameter
            {
                Name = "Total",
                DbType = System.Data.DbType.Int32,
                Direction = System.Data.ParameterDirection.Output
            });
            RequestContext context = new RequestContext
            {
                CommandType = System.Data.CommandType.StoredProcedure,
                RealSql = "SP_QueryUser",
                Request = dbParameterCollection
            };
            var list = DbSession.Query<User>(context);
            dbParameterCollection.TryGetParameterValue("Total", out int total);
```

## IDbSession-CUD

IDbSession 同時提供了CUD擴展函數幫助開發者生成好CUD-SQL，方便開發者直接使用。

### Insert

```csharp
var id = DbSession.Insert<User,long>(userEntity);
```

### Update

```csharp
var recordsAffected = DbSession.Update<User>(new User
            {
                Id = id,
                UserName = "SmartSql"
            });
```

### DyUpdate

DyUpdate 函數的作用是當僅需更新部分字段時，可以使用。

```csharp
var recordsAffected = dbSession.DyUpdate<User>(new { Id = id, UserName = "SmartSql" });
```

### DeleteById

```csharp
var recordsAffected = dbSession.DeleteById<User, long>(id);
```

### DeleteMany

```csharp
var recordsAffected = dbSession.DeleteMany<User, long>(new long[] { id0, id1, id2 });
```

### GetById

```csharp
var entity = dbSession.GetById<User, long>(id);
```

## ISqlMapper

> ISqlMapper 接口提供了與IDbSession一致的接口函數，但是ISqlMapper不需要顯式的通過DbSessionFactory來創建DbSession，ISqlMapper 內部依賴IDbSessionStore來管理DbSession，開啟/釋放DbSession的原則為：「誰開啟，誰負責釋放」。

```csharp
var sqlMapper = new SmartSqlBuilder()
               .UseXmlConfig()
               .Build()
               .GetSqlMapper();
```