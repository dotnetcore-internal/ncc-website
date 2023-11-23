Using this tool, you can parse a local or remote OpenApi document to generate WebApiClientCore interface definition code files, and the aspnetcore swagger json file is also applicable.

## 1. Install the tool

```bash
dotnet tool install WebApiClientCore.OpenApi.SourceGenerator -g
```

## 2. Use the tool

Run the following command, and the corresponding WebApiClientCore interface definition code file will be output to the current directory's output folder:

```bash
# Example
WebApiClientCore.OpenApi.SourceGenerator -o https://petstore.swagger.io/v2/swagger.json
```

### 2.1 Command Introduction

```text
  -o OpenApi, --openapi=OpenApi          Required. The path of the local OpenApi json file or the remote Uri address
  -n Namespace, --namespace=Namespace    The namespace of the code, such as WebApiClientCore
  --help                                 Display this help screen.
```

### 2.2 Workflow

1. Use NSwag to parse the OpenApi json to obtain the OpenApiDocument object
2. Use RazorEngine to compile the OpenApiDocument into cshtml template and obtain html
3. Use XDocument to extract the html text code and obtain the declarative code of WebApiClientCore
4. Code beautification, output to local files