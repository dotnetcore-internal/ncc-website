[通過在 FlubuCore 插件中編寫自己的任務來擴展 FlubuCore Fluent Api](https://flubucore.dotnetcore.xyz/write-plugins)。

```
    public class ExampleFlubuPluginTask : TaskBase<int, ExampleFlubuPluginTask>
    {
        protected override int DoExecute(ITaskContextInternal context)
        {
            // Write your task logic here.
            return 0;
        }
    }
```