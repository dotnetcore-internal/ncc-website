AgileConfig 支持多节点部署，所有的节点都是平行的。

为了简化部署，AgileConfig 并没有单独的控制台程序，请直接使用任意一个节点作为控制台。当环境变量 `adminConsole=true` 时，该节点同时兼备数据节点跟控制台功能。

为了控制台能够管理节点，所以需要在控制台配置节点的信息。

![Node](/articles/projects/agileconfig/assets/node.png)