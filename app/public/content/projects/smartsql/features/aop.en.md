```csharp
[Transaction]
public virtual long AddWithTran(User user)
{
    return _userRepository.Insert(user);
}
```

###  Transaction nesting

> When a transaction is nested, the transaction attribute annotation of the child function is no longer turned on, and the transaction that calls the function by the parent is used instead

```csharp
[Transaction]
public virtual long AddWithTranWrap(User user)
{
    return AddWithTran(user);
}
```