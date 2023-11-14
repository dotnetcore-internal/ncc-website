[Extending FlubuCore fluent interface by writing your own tasks within FlubuCore plugins.](https://flubucore.dotnetcore.xyz/write-plugins)

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