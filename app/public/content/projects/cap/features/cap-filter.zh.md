在 5.1.0 版本中，我们支持了在订阅者中添加过滤器。在过去，我们通过对第三方 AOP 组件提供支持来做到这一点，例如我们写了一篇[博客](https://www.cnblogs.com/savorboard/p/cap-castle.html) 来描述如何在 CAP 5.0 版本中使用 Castle 来对订阅方法进行拦截，但了这种方式存在一些缺点，例如无法方便的在代理类中进行构造函数注入以及方法需要设定为 virtual 另外还有拦截器生命周期控制等问题。

所以我们引入了对订阅者过滤器的支持，以使在某些场景（如事务处理，日志记录等）中变得容易。

更多关于 CAP 过滤器的信息，请[阅读文档](https://cap.dotnetcore.xyz/user-guide/zh/cap/filter/)。