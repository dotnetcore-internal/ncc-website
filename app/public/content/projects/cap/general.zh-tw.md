[TOC]

CAP 是一個基於 .NET Standard 的 C# 庫，它是一種處理分布式事務的解決方案，同樣具有 EventBus 的功能，它具有輕量級、易使用、高性能等特點。

## 簡介

在我們構建 SOA 或者 微服務系統的過程中，我們通常需要使用事件來對各個服務進行集成，在這過程中簡單的使用消息隊列並不能保證數據的最終一致性， CAP 采用的是和當前數據庫集成的本地消息表的方案來解決在分布式系統互相調用的各個環節可能出現的異常，它能夠保證任何情況下事件消息都是不會丟失的。

你同樣可以把 CAP 當做 EventBus 來使用，CAP提供了一種更加簡單的方式來實現事件消息的發布和訂閱，在訂閱以及發布的過程中，你不需要繼承或實現任何接口。

## 架構概述

![CAP](/content/projects/cap/assets/architecture-new.png)

> CAP 實現了 [eShop 電子書](https://docs.microsoft.com/en-us/dotnet/standard/microservices-architecture/multi-container-microservice-net-applications/subscribe-events#designing-atomicity-and-resiliency-when-publishing-to-the-event-bus) 中描述的發件箱模式

## 貢獻

最簡單的貢獻方式之一是參與討論和討論問題。您還可以通過提交帶有代碼更改的拉取請求來做出貢獻。