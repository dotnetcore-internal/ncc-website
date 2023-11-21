When we use distributed caching, it's inevitable to serialize the contents of the cache.

How do you serialize the cached content? Normally, serializing an object to byte[] would be the first choice. This is also the implementation of EasyCaching.

Serialization use EasyCaching currently offers 5 serialization options, Newtonsoft.Json, MessagePack, System.Text.Json, MemoryPack and Protobuf.