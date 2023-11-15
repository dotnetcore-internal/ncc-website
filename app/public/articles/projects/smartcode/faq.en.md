## What can SmartCode do?

> SmartCode = IDataSource -> IBuildTask -> IOutput => Build Everything

The execution flow of SmartCode is data source -> build task -> output, which means that the application scenarios are very extensive.

1. Read data structures from the DB and finally generate the entire solution = code generator (SmartCode.Generator)
2. ETL, in fact, it is obvious that the SmartCode execution flow is very similar to ETL. With some corresponding extensions, it can support ETL (SmartCode.ETL)
3. Model First, parse the data source from the Model class structure, finally generate SQL scripts, execute to generate the DB structure, and generate the entire solution
4. Static document generator
5. There are many more waiting for you to discover.

##  How extensible is SmartCode?

The SmartCode plugin mechanism has very flexible extensibility. Everything in SmartCode is a plugin. You only need to inherit the IPlugin interface, then configure it in appsettings.json, and then obtain the plugin instance through IPluginManager.

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


How to customize templates

At present, SmartCode supports two template engines, **Razor** & **Handlebars**. The Razor template engine uses the official version, so .NETer students can easily customize SmartCode templates. It should be noted that the Model of the Razor template is BuildContext. For specific methods, you can refer to the templates in the source code. After writing, put it in RazorTemplates and specify it when building.

How many databases does the code generator support?

SmartCode uses [SmartSql](https://ncc.work/projects/smartsql) to obtain the structure of the data source, so SmartCode supports all ADO.NET driver-related databases: MySql/PostgreSql/SqlServer/Oracle/SQLite, etc.

