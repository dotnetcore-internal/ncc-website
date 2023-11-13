[TOC]

## windows-x64 桌面部署

双击运行 `FastGithub.UI.exe`

## windows-x64 服务部署

```shell
fastgithub.exe start // 以windows服务安装并启动
fastgithub.exe stop // 以windows服务卸载并删除
```

## linux-x64 终端部署

```shell
sudo ./fastgithub
```

设置系统自动代理为 `http://127.0.0.1:38457`，或手动代理 `http/https为127.0.0.1:38457`

## linux-x6 4服务部署

```shell
sudo ./fastgithub start // 以systemd服务安装并启动
sudo ./fastgithub stop // 以systemd服务卸载并删除
```

设置系统自动代理为 `http://127.0.0.1:38457`，或手动代理 HTTP / HTTPS 为 `127.0.0.1:38457`

## macOS-x64部署

双击运行 `fastgithub`

安装 `cacert/fastgithub.cer` 并设置信任

设置系统自动代理为 `http://127.0.0.1:38457`，或手动代理 `http/https为127.0.0.1:38457`

具体配置详情

## docker-compose 一键部署

准备好 Docker 18.09, docker-compose.

在源码目录下，有一个 `docker-compose.yaml` 文件，专用于在实际项目中，临时使用 `github.com` 源码，而做的 demo 配置。

根据自己的需要更新 `docker-compose.yaml` 中的 `sample` 和 `build` 镜像即可完成拉 `github.com` 源码加速，并基于源码做后续的操作。

![FastGithub](/articles/projects/fastgithub/assets/ui.png)