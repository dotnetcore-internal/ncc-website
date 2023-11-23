在 5.1.0 版本中，我們支持了在訂閱者中添加過濾器。在過去，我們通過對第三方 AOP 組件提供支持來做到這一點，例如我們寫了一篇[博客](https://www.cnblogs.com/savorboard/p/cap-castle.html) 來描述如何在 CAP 5.0 版本中使用 Castle 來對訂閱方法進行攔截，但了這種方式存在一些缺點，例如無法方便的在代理類中進行構造函數注入以及方法需要設定為 virtual 另外還有攔截器生命周期控制等問題。

所以我們引入了對訂閱者過濾器的支持，以使在某些場景（如事務處理，日志記錄等）中變得容易。

更多關於 CAP 過濾器的信息，請[閱讀文檔](https://cap.dotnetcore.xyz/user-guide/zh/cap/filter/)。