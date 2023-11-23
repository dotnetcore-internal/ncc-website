使用 `ITask<>` 異步聲明，就有 Retry 的擴展，Retry 的條件可以為捕獲到某種 Exception 或響應模型符合某種條件。

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