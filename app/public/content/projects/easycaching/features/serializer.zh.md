当我们使用分布式缓存时，不可避免地需要对缓存的内容进行序列化。

你如何序列化缓存的内容？通常，将对象序列化为 byte[] 将是首选。这也是 EasyCaching 的实现方式。

序列化使用 EasyCaching 目前提供 5 种序列化选项，Newtonsoft.Json、MessagePack、System.Text.Json、MemoryPack 和 Protobuf。