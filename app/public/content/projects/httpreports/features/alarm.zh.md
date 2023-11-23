HttpReports.Dashboard 支持预警监控功能，设定请求规则，预警触发后，推送预警信息到邮箱或者 WebHook，使用的话需要先配置 Smtp 邮箱，否则接收不到预警邮件哦

![Alarm 1](/content/projects/httpreports/assets/alarm-1.png)

![Alarm 2](/content/projects/httpreports/assets/alarm-2.png)

### 监控类型

监控功能主要针对以下四项监控

- 响应超时
- 请求错误
- 请求量监控

### WebHook

预警支持 WebHook，配置后可以自动把预警信息推送到您定义的地址,推送方式为Post推送

```json
{
  "Title":"...",
  "Content":"..."
}
```