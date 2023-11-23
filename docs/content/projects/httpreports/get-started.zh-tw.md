[TOC]

## 安裝 HttpReports.Dashboard

創建一個 Dashboard 項目，然後在項目中安裝 `HttpReports.Dashboard` 包。

### 使用 NuGet 安裝

```shell
Intall-Package HttpReports.Dashboard

# 數據庫驅動
Install-Package HttpReports.MySQL
# or
Install-Package HttpReports.SqlServer
# or
Install-Package HttpReports.PostgreSQL
```

### 配置

修改項目的 `appsetting.json` 文件

```json
{
 "HttpReportsDashboard": { 
    "ExpireDay": 3,
    "Storage": {
      "ConnectionString": "DataBase=HttpReports;Data Source=localhost;User Id=root;Password=123456;", 
      "DeferSecond": 10,
      "DeferThreshold": 100
    },
   "Check": {
      "Mode": "Self",
      "Switch": true,
      "Endpoint": "",
      "Range": "500,2000"
    },
    "Mail": {
      "Server": "smtp.163.com",
      "Port": 465,
      "Account": "HttpReports@qq.com",
      "Password": "*******",
      "EnableSsL": true,
      "Switch": true
    }
  } 
}
```

參數介紹：

- ExpireDay - 數據過期天數，默認3天，HttpReports 會自動清除過期的數據
- Storage - 存儲信息
- DeferSecond - 批量數據入庫的秒數，建議值 5-60
- DeferThreshold - 批量數據入庫的數量，建議值100-1000
- Mail - 郵箱信息，配置監控的話，可以發告警郵件
- Check - 健康檢查配置，具體看 健康檢查 頁面

### 更新 Startup.cs

修改 Dashboard 項目的 `Startup.cs` 文件：

```csharp
public void ConfigureServices(IServiceCollection services)
 { 
    services.AddHttpReportsDashboard().AddMySqlStorage(); 
}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{ 
    app.UseHttpReportsDashboard(); 
}
```

- 默認賬號： admin
- 默認密碼： 123456

運行後將跳轉到 Dashboard 登錄頁面，使用默認賬戶進行登錄。

至此，Dashboard 可視化完成，接下來為項目添加 HttpReports 支持。

## 安裝 HttpReports 前端

### 使用 NuGet 安裝

```shell
Install-Package HttpReports
Install-Package HttpReports.Transport.Http  
```

### 配置

修改項目的 `appsetting.json` 文件

```json
{
  "HttpReports": {
    "Transport": {
      "CollectorAddress": "http://localhost:5000/",
      "DeferSecond": 10,
      "DeferThreshold": 100
    },
    "Server": "http://localhost:7000",
    "Service": "User",
    "Switch": true,
    "RequestFilter": [ "/api/health/*", "/HttpReports*" ],
    "WithRequest": true,
    "WithResponse": true,
    "WithCookie": true,
    "WithHeader": true
  }
}
```

參數介紹：

- Transport
    - CollectorAddress - 數據發送的地址，配置 Dashboard 的項目地址即可
    - DeferSecond - 批量數據入庫的秒數，建議值 5-60
    - DeferThreshold - 批量數據入庫的數量，建議值 100-300
- Server - 服務的地址,
- Service - 服務的名稱
- Switch - 是否開啟收集數據
- RequestFilter - 數據過濾，用 * 來模糊匹配
- WithRequest - 是否記錄接口的入參
- WithResponse - 是否記錄接口的出參
- WithCookie - 是否記錄 Cookie 信息
- WithHeader - 是否記錄請求 Header 信息

### 更新 Startup.cs

修改項目的 `Startup.cs` 文件：

```csharp
public void ConfigureServices(IServiceCollection services)
{
     services.AddHttpReports().AddHttpTransport();
     services.AddControllers();
}

        
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
     app.UseHttpReports();
     ....
```

> `app.UseHttpReports();` 這一行最好放到 `Configure` 方法 最上面

修改項目的啟動端口為7000

```csharp
public static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
    .ConfigureWebHostDefaults(webBuilder =>
                {
                     webBuilder.UseStartup<Startup>().UseUrls("http://localhost:7000");
                });
```

然後 Visual Studio 設置多項目啟動， 同時運行業務項目和 Dashboard 項目。

此時在 Dashboard 項目中，可以看到業務項目的數據了。

![Dashboard with data](/content/projects/httpreports/assets/dashboard.png)

## 配置 IP 和端口

HttpReports 需要顯式指定Web程序的IP和端口，當然這個地址用外網和內網的都可以，在微服務環境中， 一個服務會開啟多個實例， HttpReports 通過IP和端口來區分不同的程序實例。

#### 在appsetting.json 中配置

我們直接在 `appsetting.json` 中設置 Urls 屬性，你可以設置 `"Server": "http://127.0.0.1:3000"`



#### 在命令行參數中配置

```shell
dotnet  UserService.dll   --urls="http://127.0.0.1:3000"   
```






