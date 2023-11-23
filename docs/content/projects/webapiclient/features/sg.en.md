SourceGenerator is a new C# compile-time code supplementation generation technology that can easily generate a proxy implementation class for the WebApiClient interface. Using the SourceGenerator extension package, you can replace the default built-in Emit generation of the proxy class, and support platforms that require complete AOT compilation.

To use it, reference WebApiClientCore.Extensions.SourceGenerator and enable the following configuration in your project:

```csharp
// The application generates proxy type code for the interface at compile time
services
    .AddWebApiClient()
    .UseSourceGeneratorHttpApiActivator();
```