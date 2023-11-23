Diagnostics 提供一組功能使我們能夠很方便的可以記錄在應用程序運行期間發生的關鍵性操作以及他們的執行時間等，使管理員可以查找特別是生產環境中出現問題所在的根本原因。

## 跟蹤(Tracing)

CAP 對 .NET `DiagnosticSource` 提供了支持，監聽器名稱為 `CapDiagnosticListener`。

你可以在 `DotNetCore.CAP.Diagnostics.CapDiagnosticListenerNames` 類下面找到CAP已經定義的事件名稱。

Diagnostics 提供對外提供的事件信息有：

- 消息持久化之前
- 消息持久化之後
- 消息持久化異常
- 消息向MQ發送之前
- 消息向MQ發送之後
- 消息向MQ發送異常
- 消息從MQ消費保存之前
- 消息從MQ消費保存之後
- 訂閱者方法執行之前
- 訂閱者方法執行之後
- 訂閱者方法執行異常



## 度量(Metrics)

度量是指對於一個物體或是事件的某個性質給予一個數字，使其可以和其他物體或是事件的相同性質比較。度量可以是對一物理量（如長度、尺寸或容量等）的估計或測定，也可以是其他較抽象的特質。

CAP 7.0 對 `EventSource` 提供了支持，計數器名稱為 `DotNetCore.CAP.EventCounter`。

CAP 提供了以下幾個度量指標：

- 每秒發布速度
- 每秒消費速度
- 每秒調用訂閱者速度
- 每秒執行訂閱者平均耗時