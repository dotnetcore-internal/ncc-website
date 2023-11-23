The SmartSql is implemented internally DotNet the main types of type handlers, and some types of compatible type conversion processors are provided, as well as more commonly used JsonTypeHanlder.

```xml
    <TypeHandler PropertyType="SmartSql.Test.Entities.UserInfo,SmartSql.Test" Type="${JsonTypeHandler`}">
      <Properties>
        <Property Name="DateFormat" Value="yyyy-MM-dd mm:ss"/>
        <Property Name="NamingStrategy" Value="Camel"/>
      </Properties>
    </TypeHandler>
```