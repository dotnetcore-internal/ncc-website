支付寶（Alipay）服務端 SDK，采用 .NET Standard 2.0，支持 .NET Core >= 2.0，與官方 SDK 接口完全相同。完全可以按照官方文檔進行開發。除了支持支付以外，官方SDK支持的功能本 SDK 全部支持，且用法幾乎一樣，代碼都可參考官方文檔代碼。。

> 由於精力有限，所以只做了幾個 Demo，但是其他功能可以參照官方的 Demo 來使用。可以使用官方文檔中的示例代碼。

| 組件名                     | 說明                                                         | 版本號                                                       |
| -------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `Alipay.AopSdk.Core`       | ASP.NET 項目可以單獨安裝此組件。服務端SDK，封裝了支付寶開放平台的所有API | [![Latest version](https://camo.githubusercontent.com/fd44af5cbdbb782b8a52da37b7faafdf829dbca1ce1ae81fbd21d7f4153bfa40/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f762f416c697061792e416f7053646b2e436f72652e737667)](https://www.nuget.org/packages/Alipay.AopSdk.Core/) |
| `Alipay.AopSdk.AspnetCore` | ASP.NET Core 項目可以單獨安裝此組件。服務端SDK的ASP.NET Core組件，為了能更好配合ASP.NET Core 使用 | [![Latest version](https://camo.githubusercontent.com/7bc9b605f57e7c5d4f0fdd7ddc79f1aae1f8ea886f9d9edd31652e7a7cefd39e/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f762f416c697061792e416f7053646b2e4173706e6574436f72652e737667)](https://www.nuget.org/packages/Alipay.AopSdk.AspnetCore/) |



> 本項目代碼基於官方 .NET Framework 代碼重構而來以及加入了 ASP.NET Core 的擴展支持。

---

> Alipay.AopSdk.Core 源起於 .NET Core 1.1 時期，當時的社區生態還不完善，很多組件都還沒有遷移到 .NET Core，當時有整好碰巧對接支付寶支付，所以基於支付寶官方的 Framework 源碼進行改造，進而誕生了 Alipay.AopSdk.Core。隨著時間的推移，支付寶業務的新增和變更，Alipay.AopSdk.Core 的更新速度遠遠比不上，而且官方也重構了 .NET SDK ，且配合官方文檔以及代碼生成器，現在使用十分方便，Alipay.AopSdk.Core 是時候退出舞台了。
>
> ::: right
> 2020.9.16
> :::