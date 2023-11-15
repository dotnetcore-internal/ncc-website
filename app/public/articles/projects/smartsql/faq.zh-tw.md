## 為什麼不支持 Linq?

SmartSql 希望 開發人員更多的接觸 Sql ,獲得絕對的控制權與安全感。所以目前沒有計劃支持 Code First 編程模式。

> 我想好了Sql怎麼寫，然後再來寫Linq,完了可能還要再查看一下Linq輸出的Sql是什麼樣的，這真是糟糕的體驗。要想對Sql做絕對的優化，那麼開發者必須對Sql有絕對的控制權。另外Sql本身很簡單，為何要增加一層翻譯器呢？

> **Codefirst 一個美好，卻不切實際的想法。**

## 對SmartSql很感興趣，不知從何開始？

請閱讀示例項目：[https://github.com/dotnetcore/SmartSql/tree/master/sample/SmartSql.Sample.AspNetCore(opens new window)](https://github.com/dotnetcore/SmartSql/tree/master/sample/SmartSql.Sample.AspNetCore)

## SmartSql支持哪些數據庫？

只要是實現了ADO.NET的數據庫驅動的數據庫均支持，您只需要安裝好對應的驅動即可。

## SmartSql是否支持多數據庫？

支持，可以通過配置引入多個數據庫實例：

```csharp
var sqlServerMapper = SmartSqlContainer.Instance.GetSmartSql("SqlServer");
var mySqlMapepr = SmartSqlContainer.Instance.GetSmartSql("MySql");
```

## SmartSql性能如何？

SmartSql的性能與Dapper是保存同一級別的≈原生手寫（另外多個其他ORM在自己的測試報告中寫明比Dapper性能還高，**請同學們保持好奇**），文檔中的 SmartSql 性能對比測試報告是開放了源代碼的，任何對於性能感興趣的同學均可以clone源代碼自己跑一遍性能測試。**自己Run的性能測試才是真的測試！**

## SmartSql可用性如何？

SmartSql 已曆經1年多的線上數十個微服務場景驗證，其性能、可用性、生產力是得到驗證的。

## 對於簡單CURD配置

作者還開源了一個代碼生成器項目：SmartCode: [https://github.com/Ahoo-Wang/SmartCode (opens new window)](https://github.com/Ahoo-Wang/SmartCode),可以使用SmartCode生成解決方案，包括所有CURD操作的XML/Entity/IRepository!

## 為什麼選擇Xml作為配置語法

Xml 的標簽語法用起來會比較靈活. 比如 篩選標簽,嵌套複用,可讀性. 複雜查詢場景用起來會非常舒爽,可讀性也會比較好,代碼層面不需要做任何處理,全部交給Xml .

## 集群場景如何使用獲得緩存一致性

SmartSql提供了Redis緩存插件,可通過NuGet安裝:

```csharp
Install-Package SmartSql.Cache.Redis
```

## 集群場景中Sql配置很多Copy怎麼辦

SmartSql 提供了 ZooKeeper配置插件,通過NuGet安裝:

```csharp
Install-Package SmartSql.ZooKeeperConfig
```

- 另外作者還開源了ZooKeeper節點管理工具:[ZooKeeper-Admin (opens new window)](https://github.com/Ahoo-Wang/ZooKeeper-Admin),可直接通過該管理工具直接配置. 關於[ZooKeeper-Admin (opens new window)](https://github.com/Ahoo-Wang/ZooKeeper-Admin):
- 使用 Asp.net Core 編寫
- Docker安裝:

```csharp
docker pull ahoowang/zookeeper.admin
docker run --name zooAdmin -p 80:80 ahoowang/zookeeper.admin
```

- 本地安裝

```csharp
git clone https://github.com/Ahoo-Wang/ZooKeeper-Admin.git
dotnet run
```

## 我之前使用過MyBatis,感覺SmartSql有種似曾相識的感覺

是的,SmartSql編程模型多處借鑒了MyBatis,如果你之前使用過MyBatis,那麼SmartSql將是你更好的選擇,因為你幾乎不需要有任何編程方式的轉變就可以直接上手,並且擁有跨平台,高性能,以及眾多你插件的支持.

## 手寫Xml 很痛苦是否有智能提示

SmartSql 提供了Xml架構文檔,可以獲得輸入智能提示的體驗:

![](/articles/projects/smartsql/assets/faq-01.png)