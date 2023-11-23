Diagnostics 提供一组功能使我们能够很方便的可以记录在应用程序运行期间发生的关键性操作以及他们的执行时间等，使管理员可以查找特别是生产环境中出现问题所在的根本原因。

## 跟踪(Tracing)

CAP 对 .NET `DiagnosticSource` 提供了支持，监听器名称为 `CapDiagnosticListener`。

你可以在 `DotNetCore.CAP.Diagnostics.CapDiagnosticListenerNames` 类下面找到CAP已经定义的事件名称。

Diagnostics 提供对外提供的事件信息有：

- 消息持久化之前
- 消息持久化之后
- 消息持久化异常
- 消息向MQ发送之前
- 消息向MQ发送之后
- 消息向MQ发送异常
- 消息从MQ消费保存之前
- 消息从MQ消费保存之后
- 订阅者方法执行之前
- 订阅者方法执行之后
- 订阅者方法执行异常



## 度量(Metrics)

度量是指对于一个物体或是事件的某个性质给予一个数字，使其可以和其他物体或是事件的相同性质比较。度量可以是对一物理量（如长度、尺寸或容量等）的估计或测定，也可以是其他较抽象的特质。

CAP 7.0 对 `EventSource` 提供了支持，计数器名称为 `DotNetCore.CAP.EventCounter`。

CAP 提供了以下几个度量指标：

- 每秒发布速度
- 每秒消费速度
- 每秒调用订阅者速度
- 每秒执行订阅者平均耗时