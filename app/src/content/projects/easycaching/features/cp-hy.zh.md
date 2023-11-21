HybridCachingProvider 将本地缓存和分布式缓存结合在一起。

此缓存提供程序解决的最重要问题是它保留最新的本地缓存值。

当我们修改缓存值时，提供程序会向`EasyCaching Bus`发送消息，以便它可以通知其他应用程序删除旧值。

下图显示了它的运行方式。

![Hybrid Details](/articles/projects/easycaching/assets/hybrid_details.png)

