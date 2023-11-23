[Kubernetes](https://kubernetes.io/), also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.

## Kubernetes in the Dashboard

Our Dashboard has supported Kubernetes as a service discovery from version 7.2.0 onwards. You can switch to the *Node* page, then select a k8s namespace, and CAP will list all Services under that namespace. After clicking the *Switch* button, the Dashboard will detect whether the CAP service of that node is available. If it is available, it will proxy to the switched node for data viewing.

Here is a configuration example:

```csharp
services.AddCap(x =>
{
    // ...
    x.UseDashboard();
    x.UseK8sDiscovery();
});
```

The component will automatically detect whether it is inside the cluster. If it is inside the cluster, the Pod must be granted Kubernetes Api permissions.

## Using Dashboard Standalone

You can use the Dashboard standalone without configuring CAP, in this case, the Dashboard can be deployed as a separate Pod in the Kubernetes cluster just for data viewing. The service to be viewed no longer needs to configure the `cap.UseK8sDiscovery()` option.

```csharp
services.AddCapDashboardStandalone();
```

Similarly, you need to configure the access for the ServiceAccount for this Pod.