本地緩存有三種選擇：

- SQLite（EasyCaching.SQLite，基於 **EasyCaching.Core** 和 **Microsoft.Data.SQLite**）
- LiteDB（EasyCaching.LiteDB，基於 **EasyCaching.Core** 和 **LiteDB**）
- Disk（EasyCaching.Disk，基於 **EasyCaching.Core**）

它們都包含了我們可以輕松使用的大部分緩存操作。

有兩種場景推薦使用 SQLite 作為我們的本地緩存：

1. 持久化緩存項。
2. 重建緩存項。