## Windows-x64 Desktop Deployment

Double-click to run `FastGithub.UI.exe`

## Windows-x64 Service Deployment

```shell
fastgithub.exe start // Install and start as a Windows service
fastgithub.exe stop // Uninstall and delete as a Windows service
```

## Linux-x64 Terminal Deployment

```shell
sudo ./fastgithub
```
Set the system automatic proxy to `http://127.0.0.1:38457`, or manually proxy `http/https to 127.0.0.1:38457`

## Linux-x64 Service Deployment

```shell
sudo ./fastgithub start // Install and start as a systemd service
sudo ./fastgithub stop // Uninstall and delete as a systemd service
```

Set the system automatic proxy to `http://127.0.0.1:38457`, or manually proxy HTTP / HTTPS to `127.0.0.1:38457`

## macOS-x64 Deployment

Double-click to run `fastgithub`

Install `cacert/fastgithub.cer` and set trust

Set the system automatic proxy to `http://127.0.0.1:38457`, or manually proxy `http/https to 127.0.0.1:38457`

Detailed configuration information

## Docker-compose One-click Deployment

Prepare Docker 18.09, docker-compose.

There is a `docker-compose.yaml` file in the source code directory, which is specially used for temporarily using the `github.com` source code in actual projects as a demo configuration.

Update the `sample` and `build` images in `docker-compose.yaml` according to your needs to complete the pull of the `github.com` source code acceleration and subsequent operations based on the source code.

![FastGithub](/articles/projects/fastgithub/assets/ui.png)