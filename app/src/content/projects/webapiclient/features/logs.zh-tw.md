## 請求和響應日志

在整個 Interface 或某個 Method 上聲明`[LoggingFilter]`，即可把請求和響應的內容輸出到 LoggingFactory 中。如果要排除某個 Method 不打印日志，在該 Method 上聲明`[LoggingFilter(Enable = false)]`，即可將本 Method 排除。

## 默認日志

```csharp
[LoggingFilter]
public interface IUserApi
{
    [HttpGet("api/users/{account}")]
    ITask<HttpResponseMessage> GetAsync([Required]string account);

    // 禁用日志
    [LoggingFilter(Enable =false)]
    [HttpPost("api/users/body")]
    Task<User> PostByJsonAsync([Required, JsonContent]User user, CancellationToken token = default);
}
```

## 自定義日志輸出目標

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