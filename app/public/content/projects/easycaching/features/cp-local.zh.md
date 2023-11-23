本地缓存有三种选择：

- SQLite（EasyCaching.SQLite，基于 **EasyCaching.Core** 和 **Microsoft.Data.SQLite**）
- LiteDB（EasyCaching.LiteDB，基于 **EasyCaching.Core** 和 **LiteDB**）
- Disk（EasyCaching.Disk，基于 **EasyCaching.Core**）

它们都包含了我们可以轻松使用的大部分缓存操作。

有两种场景推荐使用 SQLite 作为我们的本地缓存：

1. 持久化缓存项。
2. 重建缓存项。