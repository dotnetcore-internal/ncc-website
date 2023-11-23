[TOC]

## 安装 HttpReports.Dashboard

创建一个 Dashboard 项目，然后在项目中安装 `HttpReports.Dashboard` 包。

### 使用 NuGet 安装

```shell
Intall-Package HttpReports.Dashboard

# 数据库驱动
Install-Package HttpReports.MySQL
# or
Install-Package HttpReports.SqlServer
# or
Install-Package HttpReports.PostgreSQL
```

### 配置

修改项目的 `appsetting.json` 文件

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

参数介绍：

- ExpireDay - 数据过期天数，默认3天，HttpReports 会自动清除过期的数据
- Storage - 存储信息
- DeferSecond - 批量数据入库的秒数，建议值 5-60
- DeferThreshold - 批量数据入库的数量，建议值100-1000
- Mail - 邮箱信息，配置监控的话，可以发告警邮件
- Check - 健康检查配置，具体看 健康检查 页面

### 更新 Startup.cs

修改 Dashboard 项目的 `Startup.cs` 文件：

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

- 默认账号： admin
- 默认密码： 123456 

运行后将跳转到 Dashboard 登录页面，使用默认账户进行登录。

至此，Dashboard 可视化完成，接下来为项目添加 HttpReports 支持。

## 安装 HttpReports 前端

### 使用 NuGet 安装

```shell
Install-Package HttpReports
Install-Package HttpReports.Transport.Http  
```

### 配置

修改项目的 `appsetting.json` 文件

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

参数介绍：

- Transport
    - CollectorAddress - 数据发送的地址，配置 Dashboard 的项目地址即可
    - DeferSecond - 批量数据入库的秒数，建议值 5-60
    - DeferThreshold - 批量数据入库的数量，建议值 100-300
- Server - 服务的地址,
- Service - 服务的名称
- Switch - 是否开启收集数据
- RequestFilter - 数据过滤，用 * 来模糊匹配
- WithRequest - 是否记录接口的入参
- WithResponse - 是否记录接口的出参
- WithCookie - 是否记录 Cookie 信息
- WithHeader - 是否记录请求 Header 信息

### 更新 Startup.cs

修改项目的 `Startup.cs` 文件：

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

> `app.UseHttpReports();` 这一行最好放到 `Configure` 方法 最上面

修改项目的启动端口为7000

```csharp
public static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
    .ConfigureWebHostDefaults(webBuilder =>
                {
                     webBuilder.UseStartup<Startup>().UseUrls("http://localhost:7000");
                });
```

然后 Visual Studio 设置多项目启动， 同时运行业务项目和 Dashboard 项目。

此时在 Dashboard 项目中，可以看到业务项目的数据了。

![Dashboard with data](/articles/projects/httpreports/assets/dashboard.png)

## 配置 IP 和端口

HttpReports 需要显式指定Web程序的IP和端口，当然这个地址用外网和内网的都可以，在微服务环境中， 一个服务会开启多个实例， HttpReports 通过IP和端口来区分不同的程序实例。

#### 在appsetting.json 中配置

我们直接在 `appsetting.json` 中设置 Urls 属性，你可以设置 `"Server": "http://127.0.0.1:3000"`



#### 在命令行参数中配置

```shell
dotnet  UserService.dll   --urls="http://127.0.0.1:3000"   
```






