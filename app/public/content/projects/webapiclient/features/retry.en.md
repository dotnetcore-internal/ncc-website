Using `ITask<>` asynchronous declaration, there is an extension for Retry, and the conditions for Retry can be catching a certain Exception or the response model meets certain conditions.

```csharp
public interface IUserApi
{
    [HttpGet("api/users/{id}")]
    ITask<User> GetAsync(string id);
}

var result = await userApi.GetAsync(id: "id001")
    .Retry(maxCount: 3)
    .WhenCatch<HttpRequestException>()
    .WhenResult(r => r.Age <= 0);
```