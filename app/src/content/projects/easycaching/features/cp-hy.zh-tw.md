HybridCachingProvider 將本地緩存和分布式緩存結合在一起。

此緩存提供程序解決的最重要問題是它保留最新的本地緩存值。

當我們修改緩存值時，提供程序會向`EasyCaching Bus`發送消息，以便它可以通知其他應用程序刪除舊值。

下圖顯示了它的運行方式。

![Hybrid Details](/articles/projects/easycaching/assets/hybrid_details.png)