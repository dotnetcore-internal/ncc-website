Each spider instance will start a proxy backend service, which regularly obtains new proxies from the registered IProxySupplier, and each new proxy needs to pass the test before it can be added to the proxy pool. The test address can be configured in the configuration file or when creating the Builder: ProxyTestUri.

