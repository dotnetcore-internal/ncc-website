## Parameter Value Validation

For parameter values, ValidationAttribute attributes can be used to validate values.

```csharp
public interface IUserApi
{
    [HttpGet("api/users/{email}")]
    Task<User> GetAsync([EmailAddress, Required] string email);
}
```

## Parameter or return model property validation

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