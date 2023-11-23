SmartSql 内部实现了 DotNet 主要类型的类型处理器，并且提供了部分类型兼容的类型转换处理器，同时还提供了比较常用的 JsonTypeHanlder 。

```xml
    <TypeHandler PropertyType="SmartSql.Test.Entities.UserInfo,SmartSql.Test" Type="${JsonTypeHandler`}">
      <Properties>
        <Property Name="DateFormat" Value="yyyy-MM-dd mm:ss"/>
        <Property Name="NamingStrategy" Value="Camel"/>
      </Properties>
    </TypeHandler>
```