並發控制器以一定速度從 Scheduler 中獲取請求並推到到消息隊列中，這些請求會緩存在 RequestedQueue 中，這個隊列是使用低開銷的 HashedWheelTimer 實現的，若在一定時間內未收到下載代理器返回的消息，則認為是 Timeout 觸發重試直到超過重試次數限制。


