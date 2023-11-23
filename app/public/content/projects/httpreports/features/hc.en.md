For the current cloud platform solution, due to many factors such as network and host status, the probability of problems with services on a single host has greatly increased. This requires us to be able to monitor the health status of each host and each microservice instance.

![Health Checking](/content/projects/httpreports/assets/hc-1.png)

HttpReports currently supports two methods of health checks, and this data is displayed on the Dashboard page:
- Self: After the service uses the HttpReports component, it collects performance data and sends it to the Dashboard every 10 seconds. Therefore, from the Dashboard, you can check which services have sent performance data to determine if the program is healthy.
- Http: The Dashboard checks the health check interfaces (Endpoint) of all services and instances every minute. If the interface response is within the normal time and the status code is 200, it is determined that the program is healthy. HttpReports defaults to a built-in health check interface. Of course, you can also customize this address. If you use the default, you can leave the Endpoint parameter empty, and the Range parameter defines the standard response time (separately by the two values `"Range": "500, 2000"` as the delimiter). There are three states:
    - Healthy Passing: 0 - 500ms
    - Warning Warning: 500 - 2000ms
    - Critical Critical: More than 2000ms

You need to add the Check section to the Dashboard configuration.

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

Parameter introduction:

- Mode - Self or Http
- Switch - Health check switch true, false
- Endpoint - Health check interface address, default empty
- Range - Response time in milliseconds 500,2000 represents 0-500 healthy, 500-2000 warning, and more than 2000 critical