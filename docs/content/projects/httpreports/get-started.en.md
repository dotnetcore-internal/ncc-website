[TOC]

## Install HttpReports.Dashboard

To install `HttpReports.Dashboard`, create a Dashboard project and then install the `HttpReports.Dashboard` package in the project.

### Installing with NuGet

Open the NuGet Package Manager Console in Visual Studio or your preferred NuGet Package Manager, and run the following command:

```shell
Intall-Package HttpReports.Dashboard
```

This will install the latest version of `HttpReports.Dashboard` into your project.

Then, install database providers:

```shell
# Database providers
Install-Package HttpReports.MySQL
# or
Install-Package HttpReports.SqlServer
# or
Install-Package HttpReports.PostgreSQL
```

### Config

Update `appsetting.json` file:

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

Parameter Introduction:

- ExpireDay: The number of days after which data will expire, defaults to 3 days. HttpReports will automatically clear expired data.
- Storage: Storage information
- DeferSecond: The number of seconds for batch data to be entered into the repository, recommended value 5-60
- DeferThreshold: The number of batch data to be entered into the repository, recommended value 100-1000
- Mail: Email information. If monitoring is configured, alert emails can be sent.
- Check: Health check configuration, see the Health Check page for more details.

### Update Startup.cs

Modify the `Startup.cs` file in the Dashboard project:

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

- Default username: admin
- Default password: 123456

After running, it will jump to the Dashboard login page and log in with the default account.

At this point, the Dashboard visualization is complete, and next, we will add HttpReports support to the project.

## Install HttpReports front-end

### Installing with NuGet

```shell
Install-Package HttpReports
Install-Package HttpReports.Transport.Http  
```

### Config

Update `appsetting.json` file:

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

Parameter Introduction:

- Transport
    - CollectorAddress: The address to which data is sent. Configure the project address of the Dashboard.
    - DeferSecond: The number of seconds for batch data to be entered into the repository, recommended value 5-60
    - DeferThreshold: The number of batch data to be entered into the repository, recommended value 100-300
- Server: The address of the server
- Service: The name of the service
- Switch: Whether to turn on data collection
- RequestFilter: Data filter, use * to fuzzy match
- WithRequest: Whether to record the input parameters of the interface
- WithResponse: Whether to record the output parameters of the interface
- WithCookie: Whether to record Cookie information
- WithHeader: Whether to record request Header information

### Update Startup.cs

Modify the `Startup.cs` file in the project:

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

> `app.UseHttpReports();` This line is best placed at the top of the `Configure` method.

Change the start port of the project to 7000.

```csharp
public static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
    .ConfigureWebHostDefaults(webBuilder =>
                {
                     webBuilder.UseStartup<Startup>().UseUrls("http://localhost:7000");
                });
```

Then, in Visual Studio, set up multiple projects to start, and run both the business project and the Dashboard project.

At this point, in the Dashboard project, you can see the data from the business project.

![Dashboard with data](/articles/projects/httpreports/assets/dashboard.png)

## Configure IP and port

HttpReports requires the IP and port of the web application to be explicitly specified. Of course, this address can be used for both external and internal networks. In a microservice environment, multiple instances of a service are started, and HttpReports distinguishes between different instances of the program through IP and port.

#### Configuration in appsetting.json

We can directly set the Urls property in `appsetting.json`. You can set `"Server": "http://127.0.0.1:3000"`

#### Configuration in command-line arguments

```shell
dotnet  UserService.dll   --urls="http://127.0.0.1:3000"   
```






