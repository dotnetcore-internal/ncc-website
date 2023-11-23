[TOC]

CAP is a library based on .Net standard, which is a solution to deal with distributed transactions, has the function of EventBus, it is lightweight, easy to use, and efficient.

## Introduce

In the process of building an SOA or MicroService system, we usually need to use the event to integrate each service. In the process, simple use of message queue does not guarantee reliability. CAP adopts local message table program integrated with the current database to solve exceptions that may occur in the process of the distributed system calling each other. It can ensure that the event messages are not lost in any case.

You can also use CAP as an EventBus. CAP provides a simpler way to implement event publishing and subscriptions. You do not need to inherit or implement any interface during subscription and sending process.

## Architecture overview

![CAP](/content/projects/cap/assets/architecture-new.png)

> CAP implements the Outbox Pattern described in the [eShop ebook](https://docs.microsoft.com/en-us/dotnet/standard/microservices-architecture/multi-container-microservice-net-applications/subscribe-events#designing-atomicity-and-resiliency-when-publishing-to-the-event-bus).

## Contributing

One of the easiest ways to contribute is to participate in discussions and discuss issues. You can also contribute by submitting pull requests with code changes.

