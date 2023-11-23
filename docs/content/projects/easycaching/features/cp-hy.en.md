HybridCachingProvider will combine local caching and distributed caching together.

The most important problem that this caching provider solves is that it keeps the newest local cached value.

When we modify a cached value, the provider will send a message to `EasyCaching Bus` so that it can notify other Apps to remove the old value.

The following image shows how it runs.

![Hybrid Details](/content/projects/easycaching/assets/hybrid_details.png)

