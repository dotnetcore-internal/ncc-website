請求一個接口，不管出現何種異常，最終都拋出 HttpRequestException，HttpRequestException 的內部異常為實際具體異常，之所以設計為內部異常，是為了完好的保存內部異常的堆棧信息。

WebApiClient 內部的很多異常都基於 ApiException 這個抽象異常，也就是很多情況下，拋出的異常都是內為某個 ApiException 的 HttpRequestException。

```csharp
try
{
    var model = await api.GetAsync();
}
catch (HttpRequestException ex) when (ex.InnerException is ApiInvalidConfigException configException)
{
    // 請求配置異常
}
catch (HttpRequestException ex) when (ex.InnerException is ApiResponseStatusException statusException)
{
    // 響應狀態碼異常
}
catch (HttpRequestException ex) when (ex.InnerException is ApiException apiException)
{
    // 抽象的api異常
}
catch (HttpRequestException ex) when (ex.InnerException is SocketException socketException)
{
    // socket連接層異常
}
catch (HttpRequestException ex)
{
    // 請求異常
}
catch (Exception ex)
{
    // 異常
}
```