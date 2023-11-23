## 參數值驗證

對於參數值，支持 ValidationAttribute 特性修飾來驗證值。

```csharp
public interface IUserApi
{
    [HttpGet("api/users/{email}")]
    Task<User> GetAsync([EmailAddress, Required] string email);
}
```

## 參數或返回模型屬性驗證

```csharp
public interface IUserApi
{
    [HttpPost("api/users")]
    Task<User> PostAsync([Required][XmlContent] User user);
}

public class User
{
    [Required]
    [StringLength(10, MinimumLength = 1)]
    public string Account { get; set; }

    [Required]
    [StringLength(10, MinimumLength = 1)]
    public string Password { get; set; }
}
```