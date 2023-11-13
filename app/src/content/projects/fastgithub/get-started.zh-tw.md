## windows-x64 桌面部署

雙擊運行 `FastGithub.UI.exe`

## windows-x64 服務部署

```shell
fastgithub.exe start // 以windows服務安裝並啟動
fastgithub.exe stop // 以windows服務卸載並刪除
```

## linux-x64 終端部署

```shell
sudo ./fastgithub
```
設置系統自動代理為 `http://127.0.0.1:38457`，或手動代理 `http/https為127.0.0.1:38457`

## linux-x6 4服務部署

```shell
sudo ./fastgithub start // 以systemd服務安裝並啟動
sudo ./fastgithub stop // 以systemd服務卸載並刪除
```

設置系統自動代理為 `http://127.0.0.1:38457`，或手動代理 HTTP / HTTPS 為 `127.0.0.1:38457`

## macOS-x64部署

雙擊運行 `fastgithub`

安裝 `cacert/fastgithub.cer` 並設置信任

設置系統自動代理為 `http://127.0.0.1:38457`，或手動代理 `http/https為127.0.0.1:38457`

具體配置詳情

## docker-compose 一鍵部署

准備好 Docker 18.09, docker-compose.

在源碼目錄下，有一個 `docker-compose.yaml` 文件，專用於在實際項目中，臨時使用 `github.com` 源碼，而做的 demo 配置。

根據自己的需要更新 `docker-compose.yaml` 中的 `sample` 和 `build` 鏡像即可完成拉 `github.com` 源碼加速，並基於源碼做後續的操作。

![FastGithub](/articles/projects/fastgithub/assets/ui.png)