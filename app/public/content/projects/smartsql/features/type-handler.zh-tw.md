SmartSql 內部實現了 DotNet 主要類型的類型處理器，並且提供了部分類型兼容的類型轉換處理器，同時還提供了比較常用的 JsonTypeHanlder 。

```xml
    <TypeHandler PropertyType="SmartSql.Test.Entities.UserInfo,SmartSql.Test" Type="${JsonTypeHandler`}">
      <Properties>
        <Property Name="DateFormat" Value="yyyy-MM-dd mm:ss"/>
        <Property Name="NamingStrategy" Value="Camel"/>
      </Properties>
    </TypeHandler>
```