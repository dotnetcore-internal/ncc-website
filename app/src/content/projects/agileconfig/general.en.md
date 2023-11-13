## Overview

This is a lightweight configuration center based on .NET Core. It is easy to deploy, to learn and to use.

> When it comes to a configuration center, it is easy to associate it with microservices. If you choose a microservices architecture, then you almost inevitably need a configuration center.
>
> In fact, I don't mean to ride on the popularity of microservices. There are many distributed programs in the world, but they are not necessarily microservices.
>
> - For example, there are many traditional SOA applications that adopt distributed deployments, but they are not complete microservices architectures - these programs are difficult to change configurations because they are scattered across multiple servers.
> - Or perhaps some programs are not deployed in a distributed manner, but they use containerized deployments, and it is equally difficult for them to modify configurations.

So I developed AgileConfig (of course, not for microservices) - more for those distributed, containerized applications to be able to more simply read and modify configuration.

AgileConfig adheres to the characteristics of lightweight, with simple deployment, configuration, use, and learning. It only extracts some necessary functions and is not as complex and huge as Apollo. However, its functions are already sufficient for you to replace files such as `web.config` and `appsettings.json`.

If you don't want to use the microservices suite, or don't want to read N tutorials and use several servers just to deploy a configuration center, then you can try AgileConfig :).

## Characteristics

- Simple to deploy, requiring only one data node at the minimum, and supporting Docker deployment
- Supports distributed deployment of multiple nodes to ensure high availability
- Configuration supports application isolation, and intra-application configurations support grouped isolation
- Supports multiple environments
- Applications support inheritance, which allows common configurations to be extracted into one application and inherited by other applications
- Uses long-connection technology to push configuration information to the client in real time
- Supports `IConfiguration` and `IOptions` patterns for configuration reading, and the original program can be hardly modified
- Configuration modifications support version recording, and configurations can be rolled back at any time
- If all nodes fail, the client supports reading configurations from local cache
- Supports RESTful API for configuration maintenance

## Client

- https://github.com/kklldog/AgileConfig_Client (.NET Core & .NET 5+)
- https://github.com/kklldog/AgileConfig.Client4FR （.NET Framework)

## Architecture

![AgileConfig Architecture](/articles/projects/agileconfig/assets/architecture.png)

### Client

The client program is a .NET Standard 2.0 class library, which is very convenient to access .NET Core / .NET 5+ applications.

You can install it in NuGet by searching for `agileconfig.client`.

You can configure the addresses of multiple nodes when starting the client:

- The client will randomly select one for connection. After the connection is successful, a WebSocket long connection will be maintained.
- If the node connected fails and the connection is interrupted, the client will continue to randomly select a node for connection until the connection is successful.

### Node and Management Program

Nodes are implemented through ASP.NET Core services. For ease of deployment, the development team combines the management program and node services.

Any node can be configured with environment variables when starting up to enable the management program function.

### Database

The database is used to store data, and currently supports MSSQL, MySQL, Sqlite, PostgreSQL and Oracle.

The latest version of AgileConfig accesses the database through [NCC FreeSql](https://ncc.work/projects/freesql), so it gets the strong support of FreeSql, especially for domestic databases.

Since the development team currently does not have a test environment for domestic databases, AgileConfig does not directly support them. If needed, the development team can implement a separate branch for trial support of relevant databases, but the specific testing work needs to be jointly carried out by users.

> Notice: If you are using versions prior to <= 1.0.4, please do not update, as there may be slight differences in the automatically created databases of EFCore and Freesql. To be safe, do not update.



