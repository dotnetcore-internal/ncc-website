> SmartCode = IDataSource -> IBuildTask -> IOutput => Build Everything

## NuGet Packages

| Package                                                      | NuGet Stable                                                 | Downloads                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [SmartCode.CLI](https://www.nuget.org/packages/SmartCode.CLI/) | [![SmartCode.CLI](https://camo.githubusercontent.com/4690d08079645eebc381ed753155f46876295f95f29b9339ea38275faf303192/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f762f536d617274436f64652e434c492e737667)](https://www.nuget.org/packages/SmartCode.CLI/) | [![SmartCode.CLI](https://camo.githubusercontent.com/3994d6c1b0d813a797ee50ff1be2c83727ec281dae0a493911c125d65d9951f1/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f64742f536d617274436f64652e434c492e737667)](https://www.nuget.org/packages/SmartCode.CLI/) |


![SmartCode](/articles/projects/smartcode/assets/SmartCode.png)

### SmartCode.ETL

相信不少已經落地微服務架構方案的同學都會遇到同樣的問題：

1. 業務方的查詢需求似乎總是跨微服務DB的
2. 領導層需要查看的報表數據總是全局的（需要聚合跨微服務DB的）

因此 SmartCode 引入了 ETL：

1. 從多個微服務DB 同步業務聚合查詢數據到 all_biz DB （解決：微服務架構一定會遇到的業務方需要跨微服務DB查詢的問題）
2. 從 all_biz DB 同步聚合分析數據到 report DB (解決：領導層查看的報表數據聚合問題)

[ETL 文檔](https://github.com/dotnetcore/SmartCode/blob/master/doc/SmartCode.ETL.md)

### 如何貢獻模板

> 為了讓更多人參與到SmartCode模板建設中來，故有以下模板規範：

1. 模板作者在 src/SmartCode.Generator/RazorTemplates/Contributions 中新建目錄，並以作者英文名為目錄名稱
2. 把模板放置到作者目錄
3. 作者目錄下必須包括 README.md 文件，以說明模板的用途場景以及使用方式
4. 提交PR