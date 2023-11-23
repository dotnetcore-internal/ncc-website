针对目前云平台方案，因为网络、主机状态等诸多因素，单台主机上的服务出现问题的几率大大增加。这就要求我们能够监控每台主机、每个微服务实例的健康状态。

![Health Checking](/content/projects/httpreports/assets/hc-1.png)

HttpReports 目前支持两种方式的健康检查，这些数据会展示到 Dashboard 页面
- Self: 服务使用 HttpReports 组件后，会收集性能数据，每10s 一次 发送到 Dashboard，  所以从 Dashboard 就可以检查有哪些服务发送了性能数据上来， 来判断程序是否健康
- Http: Dashboard 每分钟会检查一次所有服务和实例的健康检查接口 （Endpoint），判断接口响应在正常时间内和 状态码为 200，来判断程序是否健康，HttpReports 默认内置了一个健康检查的接口，当然你也可以自定义这个地址，如果使用默认的话，Endpoint参数留空即可 ，Range参数定义了响应时间的标准（分别通过 `"Range": "500, 2000"` 的两个值作为分隔）。三个状态
  - 健康 Passing： 0 - 500ms
  - 警告 Warning： 500 - 2000ms
  - 严重 Critical： 2000ms 以上

你需要在 Dashboard 的配置中，加入 Check 部分 

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

- Mode - Self 或者 Http
- Switch - 健康检查开关 true , false
- Endpoint - 健康检查的接口地址，默认留空
- Range - 响应时间 毫秒  500,2000  代表 0-500 健康, 500-2000 警告，2000以上 严重