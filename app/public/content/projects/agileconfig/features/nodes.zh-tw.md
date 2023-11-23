AgileConfig 支持多節點部署，所有的節點都是平行的。

為了簡化部署，AgileConfig 並沒有單獨的控制台程序，請直接使用任意一個節點作為控制台。當環境變量 `adminConsole=true` 時，該節點同時兼備數據節點跟控制台功能。

為了控制台能夠管理節點，所以需要在控制台配置節點的信息。

![Node](/content/projects/agileconfig/assets/node.png)