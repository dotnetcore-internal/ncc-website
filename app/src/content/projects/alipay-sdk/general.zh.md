支付宝（Alipay）服务端 SDK，采用 .NET Standard 2.0，支持 .NET Core >= 2.0，与官方 SDK 接口完全相同。完全可以按照官方文档进行开发。除了支持支付以外，官方SDK支持的功能本 SDK 全部支持，且用法几乎一样，代码都可参考官方文档代码。。

> 由于精力有限，所以只做了几个 Demo，但是其他功能可以参照官方的 Demo 来使用。可以使用官方文档中的示例代码。

| 组件名                     | 说明                                                         | 版本号                                                       |
| -------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `Alipay.AopSdk.Core`       | ASP.NET 项目可以单独安装此组件。服务端SDK，封装了支付宝开放平台的所有API | [![Latest version](https://camo.githubusercontent.com/fd44af5cbdbb782b8a52da37b7faafdf829dbca1ce1ae81fbd21d7f4153bfa40/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f762f416c697061792e416f7053646b2e436f72652e737667)](https://www.nuget.org/packages/Alipay.AopSdk.Core/) |
| `Alipay.AopSdk.AspnetCore` | ASP.NET Core 项目可以单独安装此组件。服务端SDK的ASP.NET Core组件，为了能更好配合ASP.NET Core 使用 | [![Latest version](https://camo.githubusercontent.com/7bc9b605f57e7c5d4f0fdd7ddc79f1aae1f8ea886f9d9edd31652e7a7cefd39e/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f762f416c697061792e416f7053646b2e4173706e6574436f72652e737667)](https://www.nuget.org/packages/Alipay.AopSdk.AspnetCore/) |



> 本项目代码基于官方 .NET Framework 代码重构而来以及加入了 ASP.NET Core 的扩展支持。

---

> Alipay.AopSdk.Core 源起于 .NET Core 1.1 时期，当时的社区生态还不完善，很多组件都还没有迁移到 .NET Core，当时有整好碰巧对接支付宝支付，所以基于支付宝官方的 Framework 源码进行改造，进而诞生了 Alipay.AopSdk.Core。随着时间的推移，支付宝业务的新增和变更，Alipay.AopSdk.Core 的更新速度远远比不上，而且官方也重构了 .NET SDK ，且配合官方文档以及代码生成器，现在使用十分方便，Alipay.AopSdk.Core 是时候退出舞台了。
>
> ::: right
> 2020.9.16
> :::