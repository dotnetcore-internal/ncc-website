SourceGenerator 是一種新的 c#編譯時代碼補充生成技術，可以非常方便的為 WebApiClient 生成接口的代理實現類，使用 SourceGenerator 擴展包，可以替換默認的內置 Emit 生成代理類的方案，支持需要完全 AOT 編譯的平台。

引用 WebApiClientCore.Extensions.SourceGenerator，並在項目啟用如下配置:

```csharp
// 應用編譯時生成接口的代理類型代碼
services
    .AddWebApiClient()
    .UseSourceGeneratorHttpApiActivator();
```