使用這個工具可以將 OpenApi 的本地或遠程文檔解析生成 WebApiClientCore 的接口定義代碼文件，aspnetcore 的 swagger json 文件也適用

## 1、安裝工具

```bash
dotnet tool install WebApiClientCore.OpenApi.SourceGenerator -g
```

## 2、使用工具

運行以下命令，會將對應的 WebApiClientCore 的接口定義代碼文件輸出到當前目錄的 output 文件夾下

```bash
#舉例
WebApiClientCore.OpenApi.SourceGenerator -o https://petstore.swagger.io/v2/swagger.json
```

### 2.1 命令介紹

```text
  -o OpenApi, --openapi=OpenApi          Required. openApi的json本地文件路徑或遠程Uri地址
  -n Namespace, --namespace=Namespace    代碼的命名空間，如WebApiClientCore
  --help                                 Display this help screen.
```

### 2.2 工作流程

1. 使用 NSwag 解析 OpenApi 的 json 得到 OpenApiDocument 對象
2. 使用 RazorEngine 將 OpenApiDocument 傳入 cshtml 模板編譯得到 html
3. 使用 XDocument 將 html 的文本代碼提取，得到 WebApiClientCore 的聲明式代碼
4. 代碼美化，輸出到本地文件