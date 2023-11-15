## SmartCode 能幹什麼？

> SmartCode = IDataSource -> IBuildTask -> IOutput => Build Everything

SmartCode的執行流是 數據源->構建任務->輸出，也就是說應用場景非常廣泛。

1. 從DB讀取數據結構，最終生成整個解決方案=代碼生成器（SmartCode.Generator）
2. ETL，其實很顯然SmartCode執行流跟ETL很像，做一些相應的擴展便可支持ETL（SmartCode.ETL）
3. Mode First，從Model類結構解析出數據源，最終生成SQL腳本，執行生成DB結構，並生成整個解決方案
4. 靜態文檔生成器
5. 還有很多等待你去發掘

## SmartCode 擴展性如何

SmartCode 插件機制擁有非常靈活的擴展能力，SmartCode 中一切都是插件。只要繼承IPlugin接口即可，然後配置到appsettings.json，然後通過IPluginManager獲取插件實例。

```
{
  "Logging": {
    "IncludeScopes": false,
    "Console": {
      "LogLevel": {
        "Default": "Debug"
      }
    }
  },
  "SmartCode": {
    "Version": "v1.16.0",
    "Plugins": [
      {
        "Type": "SmartCode.IDataSource,SmartCode",
        "ImplType": "SmartCode.NoneDataSource,SmartCode"
      },
      {
        "Type": "SmartCode.IBuildTask,SmartCode",
        "ImplType": "SmartCode.App.BuildTasks.ClearBuildTask,SmartCode.App"
      },
      {
        "Type": "SmartCode.IBuildTask,SmartCode",
        "ImplType": "SmartCode.App.BuildTasks.ProjectBuildTask,SmartCode.App"
      },
      {
        "Type": "SmartCode.IBuildTask,SmartCode",
        "ImplType": "SmartCode.App.BuildTasks.MultiTemplateBuildTask,SmartCode.App"
      },
      {
        "Type": "SmartCode.IBuildTask,SmartCode",
        "ImplType": "SmartCode.App.BuildTasks.ProcessBuildTask,SmartCode.App"
      },
      {
        "Type": "SmartCode.IOutput,SmartCode",
        "ImplType": "SmartCode.App.Outputs.FileOutput,SmartCode.App"
      },
      {
        "Type": "SmartCode.IDataSource,SmartCode",
        "ImplType": "SmartCode.Generator.DbTableSource,SmartCode.Generator"
      },
      {
        "Type": "SmartCode.IBuildTask,SmartCode",
        "ImplType": "SmartCode.Generator.BuildTasks.TableBuildTask,SmartCode.Generator"
      },
      {
        "Type": "SmartCode.INamingConverter,SmartCode",
        "ImplType": "SmartCode.Generator.TableNamingConverter,SmartCode.Generator"
      },
      {
        "Type": "SmartCode.TemplateEngine.ITemplateEngine,SmartCode.TemplateEngine",
        "ImplType": "SmartCode.TemplateEngine.Impl.HandlebarsTemplateEngine,SmartCode.TemplateEngine"
      },
      {
        "Type": "SmartCode.TemplateEngine.ITemplateEngine,SmartCode.TemplateEngine",
        "ImplType": "SmartCode.TemplateEngine.Impl.OfficialRazorTemplateEngine,SmartCode.TemplateEngine"
      },
      {
        "Type": "SmartCode.Generator.IDbTypeConverter,SmartCode.Generator",
        "ImplType": "SmartCode.Generator.DbTypeConverter.DefaultDbTypeConverter,SmartCode.Generator"
      },
      {
        "Type": "SmartCode.IDataSource,SmartCode",
        "ImplType": "SmartCode.ETL.ExtractDataSource,SmartCode.ETL"
      },
      {
        "Type": "SmartCode.IBuildTask,SmartCode",
        "ImplType": "SmartCode.ETL.BuildTasks.TransformBuildTask,SmartCode.ETL"
      },
      {
        "Type": "SmartCode.ETL.ITransformEngine,SmartCode.ETL",
        "ImplType": "SmartCode.ETL.TransformEngine.RazorTransformEngine,SmartCode.ETL"
      },
      {
        "Type": "SmartCode.IBuildTask,SmartCode",
        "ImplType": "SmartCode.ETL.BuildTasks.LoadBuildTask,SmartCode.ETL"
      },
      {
        "Type": "SmartCode.ETL.IETLRepository,SmartCode.ETL",
        "ImplType": "SmartCode.ETL.NoneETLRepository,SmartCode.ETL"
      },
      {
        "Type": "SmartCode.ETL.IETLRepository,SmartCode.ETL",
        "ImplType": "SmartCode.ETL.PostgreSql.PGETLRepository,SmartCode.ETL.PostgreSql",
        "Paramters": {
          "ConnectionString": "Server=localhost;Port=5432;User Id=postgres;Password=SmartSql; Database=smartcode_etl;"
        }
      }
    ]
  }
}
```



## 如何自定義模板

目前SmartCode支持倆種模板引擎 **Razor** & **Handlebars** 。 Razor 模板引擎使用的是官方版本，這一點上.NETer同學可以很輕松的自定義SmartCode模板，需要注意的是Razor模板的Model為BuildContext,具體方法可以參考源代碼中的模板。編寫完成之後放到RazorTemplates，構建時指定好即可。

## 代碼生成器支持多少種數據庫

SmartCode獲取數據源結構使用的是[SmartSql](https://ncc.work/projects/smartsql)，所以SmartCode支持所有ADO.NET驅動相關的數據庫：MySql/PostgreSql/SqlServer/Oracle/SQLite 等