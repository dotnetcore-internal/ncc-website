[TOC]

## Introduce

DotnetSpider, a .NET Standard web crawling library. It is a lightweight, efficient, and fast high-level web crawling & scraping framework.

![Design](/articles/projects/dotnetspider/assets/ds-design.png)

As shown in the design diagram above, the entire spider design is purely asynchronous, using message queues to decouple various components. If only a single-machine spider is required, no additional configuration is required, and a memory-based message queue is used by default. If you want to implement a purely distributed spider, you only need to introduce a message queue, and we will introduce in detail how to implement a distributed spider later.

##  Disclaimer

This framework is designed to help developers simplify the development process and improve development efficiency. Please do not use this framework to do anything that violates national laws. The author of this framework is not responsible for anything done by the user.


