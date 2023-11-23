Since Canal emulates the MySQL slave's interaction protocol and pretends to be a MySQL slave, it sends the DUMP protocol to the MySQL master, so MySQL's binlog needs to be enabled.

Modify the configuration in mysql.cnf:

```text
[mysqld]
log-bin=mysql-bin # Enable binlog
binlog-format=ROW #Choose ROW mode
server_id=1 #Configure MySQL replaction needs to be defined, do not duplicate with canal's slaveId
```

Grant canal the permission to connect to MySQL as a MySQL slave, or grant it directly if an account already exists:

```sql
CREATE USER canal IDENTIFIED BY 'canal';  
GRANT SELECT, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'canal'@'%';
-- GRANT ALL PRIVILEGES ON *.* TO 'canal'@'%' ;
FLUSH PRIVILEGES;
```

Canal official documentation: https://github.com/alibaba/canal/wiki/QuickStart