緩存工廠的主要目的是解決多個實例的問題。多個實例可以理解為在一個項目中使用多個不同的提供者，例如一個 InMemory 和一個 CSRedis，三個 InMemory 和兩個 InMemory 與兩個 CSRedis。

在 EasyCaching 中，工廠可以創建所有不同類型的提供者：

- IEasyCachingProvider
- IRedisCachingProvider
- IHybridCachingProvider

