[TOC]

## Installation Guide

- Install .net core sdk [Offical website](https://dotnet.microsoft.com/download)
- Install Visual Studio 2022 lastest [Offical website](https://visualstudio.microsoft.com/vs/getting-started/)

## Create a new project from the dotnet new template

1. Install the template

```
dotnet new install Bootstrap.Blazor.Templates::*
```

1. Create the Boilerplate project with the template

```
dotnet new bbapp
```

## Install Bootstrap Blazor Project Template

1. Download Project Template

Microsoft Market [link](https://marketplace.visualstudio.com/items?itemName=Longbow.BootstrapBlazorUITemplate)

1. Double Click **BootstrapBlazor.UITemplate.vsix**

## Import Bootstrap Blazor into an existing project

1. Go to the project folder of the application and install the Nuget package reference

```
dotnet add package BootstrapBlazor
```

1. **Add** the `stylesheet` `javascripts` file to your main index file - `Pages/_Host.cshtml (Server)` or `wwwroot/index.html (WebAssembly)`

**HTML**

```
<!DOCTYPE html>
<html lang="en">
<head>
    . . .
    <link rel="stylesheet" href="_content/BootstrapBlazor/css/bootstrap.blazor.bundle.min.css">
</head>
<body>
    . . .
    <script src="_framework/blazor.server.js"></script>
    <script src="_content/BootstrapBlazor/js/bootstrap.blazor.bundle.min.js"></script>
</body>
</html>
```



1. Open the `~/Startup.cs` file in the and register the `Bootstrap Blazor` service:

**C#**

```
namespace BootstrapBlazorAppName
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            //more code may be present here
            services.AddBootstrapBlazor();
        }

        //more code may be present here
    }
}
```



## Visual Studio Integration

To create a new `Bootstrap Blazor` UI for Blazor application, use the Create New Project Wizard. The wizard detects all installed versions of `Bootstrap Blazor` for Blazor and lists them in the Version combobox—this enables you to start your project with the desired version. You can also get the latest version to make sure you are up to date.

1. Get the Wizard

To use the Create New Project Wizard, install the `Bootstrap Blazor` UI for Blazor Visual Studio Extensions. You can get it from the:

- Visual Studio Marketplace (for Windows)

1. Start the Wizard

To start the wizard, use either of the following approaches

### Using the Project menu:

- Click File > New > Project.
- Find and click the C# Blazor Application option (you can use the search, or filter by Blazor templates).
- Follow the wizard.