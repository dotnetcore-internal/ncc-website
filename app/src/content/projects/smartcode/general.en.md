> SmartCode = IDataSource -> IBuildTask -> IOutput => Build Everything

## NuGet Packages

| Package                                                      | NuGet Stable                                                 | Downloads                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [SmartCode.CLI](https://www.nuget.org/packages/SmartCode.CLI/) | [![SmartCode.CLI](https://camo.githubusercontent.com/4690d08079645eebc381ed753155f46876295f95f29b9339ea38275faf303192/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f762f536d617274436f64652e434c492e737667)](https://www.nuget.org/packages/SmartCode.CLI/) | [![SmartCode.CLI](https://camo.githubusercontent.com/3994d6c1b0d813a797ee50ff1be2c83727ec281dae0a493911c125d65d9951f1/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f64742f536d617274436f64652e434c492e737667)](https://www.nuget.org/packages/SmartCode.CLI/) |



![SmartCode](/articles/projects/smartcode/assets/SmartCode-EN.png)

### SmartCode.ETL

Many students who have implemented the microservice architecture solution will encounter the same problems:

1. The query requirements of the business side seem to always span microservice DBs.
2. The report data that the leadership needs to view is always global (requiring aggregation across microservice DBs).

Therefore, SmartCode introduces ETL:

1. Synchronize business aggregated query data from multiple microservice DBs to the all_biz DB (to solve the problem that in the microservice architecture, the business side inevitably needs to query across microservice DBs).
2. Sync aggregated analysis data from the all_biz DB to the report DB (to solve the problem of aggregating report data that the leadership needs to view).

[ETL Docs](https://github.com/dotnetcore/SmartCode/blob/master/doc/SmartCode.ETL-EN.md)

### How to contribute a template

> In order to allow more people to participate in the construction of SmartCode templates, there are the following template specifications:

1. The template author creates a new directory in src/SmartCode.Generator/RazorTemplates and names it in the author's English name.
2. Place the template in the author directory
3. The README.md file must be included in the author directory to illustrate the purpose of the template and how it is used.
4. Submit PR

