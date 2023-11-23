> SmartCode = IDataSource -> IBuildTask -> IOutput => Build Everything

## NuGet Packages

| Package                                                      | NuGet Stable                                                 | Downloads                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [SmartCode.CLI](https://www.nuget.org/packages/SmartCode.CLI/) | [![SmartCode.CLI](https://camo.githubusercontent.com/4690d08079645eebc381ed753155f46876295f95f29b9339ea38275faf303192/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f762f536d617274436f64652e434c492e737667)](https://www.nuget.org/packages/SmartCode.CLI/) | [![SmartCode.CLI](https://camo.githubusercontent.com/3994d6c1b0d813a797ee50ff1be2c83727ec281dae0a493911c125d65d9951f1/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f64742f536d617274436f64652e434c492e737667)](https://www.nuget.org/packages/SmartCode.CLI/) |



![SmartCode](/content/projects/smartcode/assets/SmartCode.png)

### SmartCode.ETL

相信不少已经落地微服务架构方案的同学都会遇到同样的问题：

1. 业务方的查询需求似乎总是跨微服务DB的
2. 领导层需要查看的报表数据总是全局的（需要聚合跨微服务DB的）

因此 SmartCode 引入了 ETL：

1. 从多个微服务DB 同步业务聚合查询数据到 all_biz DB （解决：微服务架构一定会遇到的业务方需要跨微服务DB查询的问题）
2. 从 all_biz DB 同步聚合分析数据到 report DB (解决：领导层查看的报表数据聚合问题)

[ETL 文档](https://github.com/dotnetcore/SmartCode/blob/master/doc/SmartCode.ETL.md)

### 如何贡献模板

> 为了让更多人参与到SmartCode模板建设中来，故有以下模板规范：

1. 模板作者在 src/SmartCode.Generator/RazorTemplates/Contributions 中新建目录，并以作者英文名为目录名称
2. 把模板放置到作者目录
3. 作者目录下必须包括 README.md 文件，以说明模板的用途场景以及使用方式
4. 提交PR