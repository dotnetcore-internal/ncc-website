接入 HttpReports 后，前端调用接口，接口的响应头部会返回 HttpReports.Trace.Span.Id , 根据 traceId，可以在Dashboard 快速查询到接口的请求信息

![TraceId Query 1](/content/projects/httpreports/assets/trace-query-1.png)

![TraceId Query 2](/content/projects/httpreports/assets/trace-query-2.png)