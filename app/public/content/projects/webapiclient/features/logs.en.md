## Requests and Responses Logging

By declaring `[LoggingFilter]` on the entire Interface or a specific Method, you can output the request and response content to the LoggingFactory. To exclude a Method from printing logs, declare `[LoggingFilter(Enable = false)]` on that Method, which will exclude it.

## Default logging

```csharp
[LoggingFilter]
public interface IUserApi
{
    [HttpGet("api/users/{account}")]
    ITask<HttpResponseMessage> GetAsync([Required]string account);

    // Disable logging
    [LoggingFilter(Enable =false)]
    [HttpPost("api/users/body")]
    Task<User> PostByJsonAsync([Required, JsonContent]User user, CancellationToken token = default);
}
```

## Custom logging output target

```csharp
class MyLoggingAttribute : LoggingFilterAttribute
{
    protected override Task WriteLogAsync(ApiResponseContext context, LogMessage logMessage)
    {
        xxlogger.Log(logMessage.ToIndentedString(spaceCount: 4));
        return Task.CompletedTask;
    }
}

[MyLogging]
public interface IUserApi
{
}
```