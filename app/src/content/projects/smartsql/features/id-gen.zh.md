### SnowflakeId

```xml
<IdGenerators>
    <IdGenerator Name="SnowflakeId" Type="SnowflakeId">
      <Properties>
        <Property Name="WorkerIdBits" Value="10"/>
        <Property Name="WorkerId" Value="888"/>
        <Property Name="Sequence" Value="1"/>
      </Properties>
    </IdGenerator>
</IdGenerators>
    <Statement Id="Insert">
      <IdGenerator Name="SnowflakeId" Id="Id"/>
      INSERT INTO T_UseIdGenEntity
      (
      Id,
      Name
      )
      VALUES
      (
      @Id,
      @Name
      );
      Select @Id;
    </Statement>
var id = SqlMapper.ExecuteScalar<long>(new RequestContext
            {
                Scope = nameof(UseIdGenEntity),
                SqlId = "Insert",
                Request = new UseIdGenEntity()
                {
                    Name = "SmartSql"
                }
            });
```

### DbSequence

```xml
<IdGenerators>
    <IdGenerator Name="DbSequence" Type="DbSequence">
      <Properties>
        <Property Name="Step" Value="10"/>
        <Property Name="SequenceSql" Value="Select Next Value For IdSequence;"/>
      </Properties>
    </IdGenerator>
</IdGenerators>
    <Statement Id="InsertByDbSequence">
      <IdGenerator Name="DbSequence" Id="Id"/>
      INSERT INTO T_UseIdGenEntity
      (
      Id,
      Name
      )
      VALUES
      (
      @Id,
      @Name
      );
      Select @Id;
    </Statement>
            var id = SqlMapper.ExecuteScalar<long>(new RequestContext
            {
                Scope = nameof(UseIdGenEntity),
                SqlId = "InsertByDbSequence",
                Request = new UseIdGenEntity()
                {
                    Name = "SmartSql"
                }
            });
```