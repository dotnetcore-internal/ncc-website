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

通過 Docker 建立一個 `agile_config` 實例，其中有 3 個環境變量需要配置:

1. `adminConsole` 配置程序是否為管理控制台。如果為 `true` 則啟用控制台功能，訪問該實例會出現管理界面。
2. `db:provider` 配置程序的數據庫類型。目前支持 MSSQL、MySQL、Sqlite、PostgreSQL 和 Oracle 五種數據庫。
3. `db:conn` 配置數據庫連接串

> 注意：如果通過 IIS 部署，請自行下載 `publish` 分支源碼進行編譯。請先編譯 `react-ui-antd` 項目把 `dist` 內的產物複制到 `apisite` 項目的 `wwwroot/ui` 目錄下。
