并发控制器以一定速度从 Scheduler 中获取请求并推到到消息队列中，这些请求会缓存在 RequestedQueue 中，这个队列是使用低开销的 HashedWheelTimer 实现的，若在一定时间内未收到下载代理器返回的消息，则认为是 Timeout 触发重试直到超过重试次数限制。

