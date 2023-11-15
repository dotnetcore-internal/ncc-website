> To run Canal, you need to install the Java 8 environment.

To download Canal, visit the [release page](https://github.com/alibaba/canal/releases), select the package you need to download, for example, version 1.0.17.

```shell
wget https://github.com/alibaba/canal/releases/download/canal-1.0.17/canal.deployer-1.0.17.tar.gz
```

### Extract the package

```shell
mkdir /tmp/canal
tar zxvf canal.deployer-$version.tar.gz  -C /tmp/canal
```

### Modify the configuration file

```shell
vi conf/example/instance.properties
```

```text
## MySQL serverId
canal.instance.mysql.slaveId = 1234
# Position info, needs to be changed to your own database information
canal.instance.master.address = 127.0.0.1:3306
canal.instance.master.journal.name =
canal.instance.master.position =
canal.instance.master.timestamp =
# canal.instance.standby.address =
# canal.instance.standby.journal.name =
# canal.instance.standby.position =
# canal.instance.standby.timestamp =
# Username/password, needs to be changed to your own database information
canal.instance.dbUsername = canal
canal.instance.dbPassword = canal
canal.instance.defaultDatabaseName =
canal.instance.connectionCharset = UTF-8
# Table regex
canal.instance.filter.regex = .\*\\\\..\*
```

> `canal.instance.connectionCharset` represents the encoding of the database corresponding to the encoding type in Java, such as UTF-8, GBK, ISO-8859-1. If the system has 1 CPU, you need to set canal.instance.parser.parallel to false.


### Startup

```shell
sh bin/startup.sh
```



> Windows uses the startup.bat file to start.

## View Instance's logs

```shell
vi logs/example/example.log
```



## Stop

```shell
sh bin/stop.sh
```


- Canal Official Documentation: https://github.com/alibaba/canal/wiki/QuickStart
- Canal Docker Startup: https://github.com/alibaba/canal/wiki/Docker-QuickStart