除了常見的 xml 或 json 響應內容要反序列化為強類型結果模型，你可能會遇到其它的二進制協議響應內容，比如 google 的 ProtoBuf 二進制內容。

## 1 編寫相關自定義特性

### 自定義請求內容處理特性

```csharp
public class ProtobufContentAttribute : HttpContentAttribute
{
    public string ContentType { get; set; } = "application/x-protobuf";

    protected override Task SetHttpContentAsync(ApiParameterContext context)
    {
        var stream = new MemoryStream();
        if (context.ParameterValue != null)
        {
            Serializer.NonGeneric.Serialize(stream, context.ParameterValue);
            stream.Position = 0L;
        }

        var content = new StreamContent(stream);
        content.Headers.ContentType = new MediaTypeHeaderValue(this.ContentType);
        context.HttpContext.RequestMessage.Content = content;
        return Task.CompletedTask;
    }
}
```

### 自定義響應內容解析特性

```csharp
public class ProtobufReturnAttribute : ApiReturnAttribute
{
    public ProtobufReturnAttribute(string acceptContentType = "application/x-protobuf")
        : base(new MediaTypeWithQualityHeaderValue(acceptContentType))
    {
    }

    public override async Task SetResultAsync(ApiResponseContext context)
    {
        var stream = await context.HttpContext.ResponseMessage.Content.ReadAsStreamAsync();
        context.Result = Serializer.NonGeneric.Deserialize(context.ApiAction.Return.DataType.Type, stream);
    }
}
```

## 2 應用相關自定義特性

```csharp
[ProtobufReturn]
public interface IProtobufApi
{
    [HttpPut("/users/{id}")]
    Task<User> UpdateAsync([Required, PathQuery] string id, [ProtobufContent] User user);
}
```