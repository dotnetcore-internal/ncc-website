[TOC]

CAP 是一个基于 .NET Standard 的 C# 库，它是一种处理分布式事务的解决方案，同样具有 EventBus 的功能，它具有轻量级、易使用、高性能等特点。

## 简介

在我们构建 SOA 或者 微服务系统的过程中，我们通常需要使用事件来对各个服务进行集成，在这过程中简单的使用消息队列并不能保证数据的最终一致性， CAP 采用的是和当前数据库集成的本地消息表的方案来解决在分布式系统互相调用的各个环节可能出现的异常，它能够保证任何情况下事件消息都是不会丢失的。

你同样可以把 CAP 当做 EventBus 来使用，CAP提供了一种更加简单的方式来实现事件消息的发布和订阅，在订阅以及发布的过程中，你不需要继承或实现任何接口。

## 架构概述

![CAP](/articles/projects/cap/assets/architecture-new.png)

> CAP 实现了 [eShop 电子书](https://docs.microsoft.com/en-us/dotnet/standard/microservices-architecture/multi-container-microservice-net-applications/subscribe-events#designing-atomicity-and-resiliency-when-publishing-to-the-event-bus) 中描述的发件箱模式

## 贡献

最简单的贡献方式之一是参与讨论和讨论问题。您还可以通过提交带有代码更改的拉取请求来做出贡献。