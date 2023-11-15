因為 Canal 是模擬 MySQL slave 的交互協議，偽裝自己為 MySQL slave ，向 MySQL master 發送dump 協議，所以需要 MySql 開啟 binlog

修改 mysql.cnf 中的配置

```text
[mysqld]
log-bin=mysql-bin # 開啟 binlog
binlog-format=ROW # 選擇 ROW 模式
server_id=1 # 配置 MySQL replaction 需要定義，不要和 canal 的 slaveId 重複
```



授權 canal 鏈接 MySQL 賬號具有作為 MySQL slave 的權限, 如果已有賬戶可直接 grant

```sql
CREATE USER canal IDENTIFIED BY 'canal';  
GRANT SELECT, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'canal'@'%';
-- GRANT ALL PRIVILEGES ON *.* TO 'canal'@'%' ;
FLUSH PRIVILEGES;
```



Canal 官方文檔：https://github.com/alibaba/canal/wiki/QuickStart