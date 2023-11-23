```csharp
[Transaction]
public virtual long AddWithTran(User user)
{
    return _userRepository.Insert(user);
}
```

### 事务嵌套

> 当出现事务嵌套时，子函数的事务特性注解将不再开启，转而使用上级调用函数的事务

```csharp
[Transaction]
public virtual long AddWithTranWrap(User user)
{
    return AddWithTran(user);
}
```