```shell
sudo docker run \
--name agile_config \
-e adminConsole=true \
-e db:provider=sqlite \
-e db:conn="Data Source=agile_config.db" \
-p 5000:5000 \
-v /etc/localtime:/etc/localtime \
#-v /your_host_dir:/app/db \
-d kklldog/agile_config:latest
```

通过 Docker 建立一个 `agile_config` 实例，其中有 3 个环境变量需要配置:

1. `adminConsole` 配置程序是否为管理控制台。如果为 `true` 则启用控制台功能，访问该实例会出现管理界面。
2. `db:provider` 配置程序的数据库类型。目前支持 MSSQL、MySQL、Sqlite、PostgreSQL 和 Oracle 五种数据库。
3. `db:conn` 配置数据库连接串

> 注意：如果通过 IIS 部署，请自行下载 `publish` 分支源码进行编译。请先编译 `react-ui-antd` 项目把 `dist` 内的产物复制到 `apisite` 项目的 `wwwroot/ui` 目录下。
