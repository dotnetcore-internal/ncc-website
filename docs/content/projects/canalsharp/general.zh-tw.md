在數據庫中，更改數據捕獲（CDC）是一組軟件設計模式，用於確定和跟蹤已更改的數據，以便可以使用已更改的數據來采取措施。CanalSharp 是阿裏巴巴開源項目 mysql 數據庫 binlog 的增量訂閱&消費組件 Canal 的 .NET 客戶端，Canal 是 mysql 數據庫的一種 cdc 組件。

## 什麼是 Canal

![Canal](/content/projects/canalsharp/assets/canal.png)

早期阿裏巴巴因為杭州和美國雙機房部署，存在跨機房同步的業務需求，實現方式主要是基於業務 trigger 獲取增量變更。從 2010 年開始，業務逐步嘗試數據庫日志解析獲取增量變更進行同步，由此衍生出了大量的數據庫增量訂閱和消費業務。

基於日志增量訂閱和消費的業務包括

- 數據庫鏡像
- 數據庫實時備份
- 索引構建和實時維護(拆分異構索引、倒排索引等)
- 業務 cache 刷新
- 帶業務邏輯的增量數據處理

當前的 canal 支持源端 MySQL 版本包括 5.1.x , 5.5.x , 5.6.x , 5.7.x , 8.0.x

### Canal 工作原理

- canal 模擬 MySQL slave 的交互協議，偽裝自己為 MySQL slave ，向 MySQL master 發送dump 協議
- MySQL master 收到 dump 請求，開始推送 binary log 給 slave (即 canal )
- canal 解析 binary log 對象(原始為 byte 流)

更詳細介紹請查閱 Canal 官方文檔：https://github.com/alibaba/canal

## CanalSharp 工作機制

canal 設計了 client-server 模式，交互協議使用 protobuf 3.0 , client 端可采用不同語言實現不同的消費邏輯。而 CanalSharp 正是 .NET/C# Client 實現，可以采用 C# 編寫業務代碼來消費 MySql binlog 數據。

![CanalSharp](/content/projects/canalsharp/assets/canalsharp.png)

## 問題反饋

請通過 [Issue](https://github.com/dotnetcore/CanalSharp/issues/new) 向我們提交問題反饋，在提交時盡可能提供詳細的信息，以便我們進行排查和解決。

## 貢獻代碼

如果你有一些好的想法，歡迎您提交 [Pull Request](https://github.com/dotnetcore/canalsharp/pulls) 或者 [Issue](https://github.com/dotnetcore/CanalSharp/issues/new)

## 重構進度

目前重構的版本已經完全覆蓋舊版本，且性能更高，代碼更優美，實現了舊版本未實現的部分功能，支持最新的 Canal。

| Task                                 | Status              |
| ------------------------------------ | ------------------- |
| protobuf 3 協議生成                  | 已完成              |
| 對接 Canal                           | 已完成              |
| 數據訂閱封裝                         | TODO                |
| 集群支持(Service 集群和 Client 集群) | 已完成              |
| 數據發送到Kafka                      | 直接通過 Canal 發送 |
| 數據發送到Redis                      | 直接通過 Canal 發送 |

