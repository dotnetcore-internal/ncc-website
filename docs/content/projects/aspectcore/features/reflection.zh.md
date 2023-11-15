在从零实现AOP的过程中，难免会需要大量反射相关的操作，虽然在.net 4.5+/.net core中反射的性能有了大幅的优化，但为了追求极致性能，自己实现了部分反射的替代方案，包括构造器调用、方法调用、字段读写，属性读写和特性读取。在重构时，把反射扩展操作封装到单独的项目中，以此方便自己和大家使用。

更多信息可阅读[文档](https://github.com/dotnetcore/AspectCore-Framework/blob/master/docs/reflection-extensions.md)