針對目前雲平台方案，因為網絡、主機狀態等諸多因素，單台主機上的服務出現問題的幾率大大增加。這就要求我們能夠監控每台主機、每個微服務實例的健康狀態。

![Health Checking](/articles/projects/httpreports/assets/hc-1.png)

HttpReports 目前支持兩種方式的健康檢查，這些數據會展示到 Dashboard 頁面
- Self: 服務使用 HttpReports 組件後，會收集性能數據，每10s 一次 發送到 Dashboard，  所以從 Dashboard 就可以檢查有哪些服務發送了性能數據上來， 來判斷程序是否健康
- Http: Dashboard 每分鍾會檢查一次所有服務和實例的健康檢查接口 （Endpoint），判斷接口響應在正常時間內和 狀態碼為 200，來判斷程序是否健康，HttpReports 默認內置了一個健康檢查的接口，當然你也可以自定義這個地址，如果使用默認的話，Endpoint參數留空即可 ，Range參數定義了響應時間的標准（分別通過 `"Range": "500, 2000"` 的兩個值作為分隔）。三個狀態
    - 健康 Passing： 0 - 500ms
    - 警告 Warning： 500 - 2000ms
    - 嚴重 Critical： 2000ms 以上

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

參數介紹：

- Mode - Self 或者 Http
- Switch - 健康檢查開關 true , false
- Endpoint - 健康檢查的接口地址，默認留空
- Range - 響應時間 毫秒  500,2000  代表 0-500 健康, 500-2000 警告，2000以上 嚴重