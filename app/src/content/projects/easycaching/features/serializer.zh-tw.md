當我們使用分布式緩存時，不可避免地需要對緩存的內容進行序列化。

你如何序列化緩存的內容？通常，將對象序列化為 byte[] 將是首選。這也是 EasyCaching 的實現方式。

序列化使用 EasyCaching 目前提供 5 種序列化選項，Newtonsoft.Json、MessagePack、System.Text.Json、MemoryPack 和 Protobuf。