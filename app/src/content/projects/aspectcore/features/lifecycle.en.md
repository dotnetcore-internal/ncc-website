AspectCore.DependencyInjection provides the following lifetimes:

- Transient Lifetime services are created every time they are requested. This lifetime is suitable for lightweight, stateless services.
- Scoped Lifetime services are created once per scope.
- Singleton Lifetime services are created when they are first resolved and every subsequent resolution will use the same instance. If your application requires singleton behavior, it is recommended to let the service container manage the service lifetime instead of implementing the singleton pattern and managing the object lifetime in your own class.