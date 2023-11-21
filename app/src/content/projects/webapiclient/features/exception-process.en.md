When requesting an interface, no matter what kind of exception occurs, an HttpRequestException is finally thrown, and the internal exception of the HttpRequestException is the actual specific exception. The reason for designing it as an internal exception is to preserve the stack information of the internal exception intact.

Many exceptions inside WebApiClient are based on the ApiException abstract exception, which means that in many cases, the exception thrown is an HttpRequestException containing a certain ApiException.

```csharp
try
{
    var model = await api.GetAsync();
}
catch (HttpRequestException ex) when (ex.InnerException is ApiInvalidConfigException configException)
{
    // Request configuration exception
}
catch (HttpRequestException ex) when (ex.InnerException is ApiResponseStatusException statusException)
{
    // The response status code is abnormal
}
catch (HttpRequestException ex) when (ex.InnerException is ApiException apiException)
{
    // Abstract api exceptions
}
catch (HttpRequestException ex) when (ex.InnerException is SocketException socketException)
{
    // Socket connection layer exception
}
catch (HttpRequestException ex)
{
    // Request exception
}
catch (Exception ex)
{
    // Other...
}
```