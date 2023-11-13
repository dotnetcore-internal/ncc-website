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

By using Docker, you can create an `agile_config` instance with three environment variables that need to be configured:

1. `adminConsole`: Configure whether the program is an administration console. If it is `true`, the console function will be enabled, and when accessing the instance, the management interface will appear.
2. `db:provider`: Configure the database type of the program. Currently, it supports five types of databases: MSSQL, MySQL, Sqlite, PostgreSQL, and Oracle.
3. `db:conn`: Configure the database connection string.

> Note: If you deploy through IIS, please download the source code of the `publish` branch and compile it yourself. Please first compile the `react-ui-antd` project and copy the products in the `dist` folder to the `wwwroot/ui` directory of the `apisite` project.