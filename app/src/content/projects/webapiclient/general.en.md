## Summary

WebApiClient has two versions:

- `WebApiClientCore`, a newly designed version based on `.NET Standard2.1`, perfectly aligned with the newly designed .NET abstract Api such as `Dependency Injection`, `Configuration`, `Options`, `Logging`, etc.
- `WebApiClient.JIT`, `WebApiClient.AOT` are the old versions based on `.NET Standard2.0` (additional support for `.NET Framework 4.5+`), supporting `.NET Core 2.0+`, and can also play a leading role on older versions of .NET.
- [QQ Group 825135345 Open in a new window](https://shang.qq.com/wpa/qunwpa?idkey=c6df21787c9a774ca7504a954402c9f62b6595d1e63120eabebd6b2b93007410) Please indicate **WebApiClient** when joining the group. Before asking a question, please read the remaining documents carefully to avoid unnecessary duplicate answers from the author.
- To report a problem, please go to [https://github.com/dotnetcore/WebApiClient/issues Open in a new window](https://github.com/dotnetcore/WebApiClient/issues).

## Features

- Support compiled-time proxy class generation package to improve runtime performance and compatibility.
- Support OAuth2 and token management extension packages to easily implement authentication and authorization.
- Support Json.Net extension package, providing flexible Json serialization and deserialization.
- Support JsonRpc invocation extension package, supporting remote process invocation using JsonRpc protocol.
- Support a dotnet tool that parses local or remote OpenApi documents and generates WebApiClientCore interface code, simplifying the workload of interface declaration.
- Provide syntax analysis and prompts for interface declarations to help developers avoid using improper syntax.
