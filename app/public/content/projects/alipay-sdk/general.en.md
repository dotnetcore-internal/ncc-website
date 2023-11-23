Alipay Service-side SDK, using .NET Standard 2.0, supports .NET Core >= 2.0, and is fully compatible with the official SDK interface. It can be developed completely in accordance with the official documentation. In addition to supporting payment, all the functions supported by the official SDK are supported, and the usage is almost the same, and the code can refer to the official documentation code.

| Component name | Description | Version number |
| -- | -- | -- |
| `Alipay.AopSdk.Core` | ASP.NET project can install this component independently. The server SDK, which encapsulates all the APIs of Alipay Open Platform, | [![Latest version](https://camo.githubusercontent.com/fd44af5cbdbb782b8a52da37b7faafdf829dbca1ce1ae81fbd21d7f4153bfa40/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f762f416c697061792e416f7053646b2e436f72652e737667)](https://www.nuget.org/packages/Alipay.AopSdk.Core/) |
| `Alipay.AopSdk.AspnetCore` | ASP.NET Core project can install this component independently. The ASP.NET Core component of the server SDK is designed to better cooperate with ASP.NET Core | [![Latest version](https://camo.githubusercontent.com/7bc9b605f57e7c5d4f0fdd7ddc79f1aae1f8ea886f9d9edd31652e7a7cefd39e/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f762f416c697061792e416f7053646b2e4173706e6574436f72652e737667)](https://www.nuget.org/packages/Alipay.AopSdk.AspnetCore/) |



> This project code is based on the official.NET Framework code refactoring and added ASP.NET Core extension support.
---

> Alipay.AopSdk.Core originated in the .NET Core 1.1 era. At that time, the community ecosystem was not perfect, and many components had not been migrated to .NET Core. At that time, I happened to be developing based on Alipay payment, so I transformed it based on the official source code of Alipay, which gave birth to Alipay.AopSdk.Core. With the passage of time, the addition and change of Alipay business, the update speed of Alipay.AopSdk.Core is far behind, and the official has also refactored the .NET SDK, which is very convenient to use with the official documentation and code generator. Therefore, it is time for Alipay.AopSdk.Core to exit the stage.
>
> ::: right
> 2020.9.16
> :::