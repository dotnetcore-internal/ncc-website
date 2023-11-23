缓存工厂的主要目的是解决多个实例的问题。多个实例可以理解为在一个项目中使用多个不同的提供者，例如一个 InMemory 和一个 CSRedis，三个 InMemory 和两个 InMemory 与两个 CSRedis。

在 EasyCaching 中，工厂可以创建所有不同类型的提供者：

- IEasyCachingProvider
- IRedisCachingProvider
- IHybridCachingProvider