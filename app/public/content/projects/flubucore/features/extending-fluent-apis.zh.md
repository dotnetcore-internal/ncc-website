[通过在 FlubuCore 插件中编写自己的任务来扩展 FlubuCore Fluent Api](https://flubucore.dotnetcore.xyz/write-plugins)。

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