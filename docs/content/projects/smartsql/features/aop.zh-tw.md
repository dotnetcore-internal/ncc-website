```csharp
[Transaction]
public virtual long AddWithTran(User user)
{
    return _userRepository.Insert(user);
}
```

### 事務嵌套

> 當出現事務嵌套時，子函數的事務特性注解將不再開啟，轉而使用上級調用函數的事務

```csharp
[Transaction]
public virtual long AddWithTranWrap(User user)
{
    return AddWithTran(user);
}
```