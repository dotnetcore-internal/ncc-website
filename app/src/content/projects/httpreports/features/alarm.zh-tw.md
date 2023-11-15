HttpReports.Dashboard 支持預警監控功能，設定請求規則，預警觸發後，推送預警信息到郵箱或者 WebHook，使用的話需要先配置 Smtp 郵箱，否則接收不到預警郵件哦

![Alarm 1](/articles/projects/httpreports/assets/alarm-1.png)

![Alarm 2](/articles/projects/httpreports/assets/alarm-2.png)

### 監控類型

監控功能主要針對以下四項監控

- 響應超時
- 請求錯誤
- 請求量監控

### WebHook

預警支持 WebHook，配置後可以自動把預警信息推送到您定義的地址,推送方式為Post推送

```json
{
  "Title":"...",
  "Content":"..."
}
```