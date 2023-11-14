CAP provides a Dashboard for viewing messages, and features provided by Dashboard make it easy to view and manage messages.



### Enable Dashboard

By default, Dashboard middleware will not be launched. To enable Dashboard functionality you need to add the following code to your configuration:

```csharp
services.AddCap(x =>
{
    //...

    // Register Dashboard
    x.UseDashboard();
});
```

By default, you can open the Dashboard by visiting the url `http://localhost:xxx/cap`.



For more detail,  please view [documentation](https://cap.dotnetcore.xyz/user-guide/en/monitoring/dashboard/)