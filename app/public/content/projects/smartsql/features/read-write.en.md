SmartSql Read and write separation is especially easy, just provide a good configuration can be:

```xml
  <Database>
    <DbProvider Name="PostgreSql"/>
    <Write Name="WriteDB" ConnectionString="${Master}"/>
    <Read Name="ReadDb-1" ConnectionString="${Slave-0}" Weight="100"/>
    <Read Name="ReadDb-2" ConnectionString="${Slave-1}" Weight="100"/>
  </Database>
```