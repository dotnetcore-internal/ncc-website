[TOC]

AspectCore 是一个基于面向方面编程的跨平台框架，适用于 .NET Core 和 .NET Framework。

它提供了方面拦截器、依赖注入集成、Web 应用程序、数据验证等方面的核心支持。

## Nuget Packages

### Core library

| Package Name                     | NuGet                                                        | MyGet                                                        | Downloads                                                    |
| -------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| AspectCore.Abstractions          | [![nuget](https://camo.githubusercontent.com/2b1a295e6225308fc8b5002da736b1788b8a2c20eb738631167b884560da301f/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f762f417370656374436f72652e4162737472616374696f6e732e7376673f7374796c653d666c61742d737175617265)](https://www.nuget.org/packages/AspectCore.Abstractions) | [![myget](https://camo.githubusercontent.com/26dc4bfd426e3dbcb6a3a2085913ef8f340b903c8d109440922ac982f694c38c/68747470733a2f2f696d672e736869656c64732e696f2f6d796765742f617370656374636f72652f767072652f417370656374436f72652e4162737472616374696f6e732e7376673f7374796c653d666c61742d737175617265)](https://www.myget.org/feed/aspectcore/package/nuget/AspectCore.Abstractions) | [![stats](https://camo.githubusercontent.com/a5add0188fe7847c567d5f09b4004fa9cae4cf37a14bb28134a88dd24adab4cc/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f64742f417370656374436f72652e4162737472616374696f6e732e7376673f7374796c653d666c61742d737175617265)](https://www.nuget.org/stats/packages/AspectCore.Abstractions?groupby=Version) |
| AspectCore.Core                  | [![nuget](https://camo.githubusercontent.com/b4c2dd6f842cbf74a9110b64ed800939c13edd83a63e47279f57dd9c93e0ac07/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f762f417370656374436f72652e436f72652e7376673f7374796c653d666c61742d737175617265)](https://www.nuget.org/packages/AspectCore.Core) | [![myget](https://camo.githubusercontent.com/3ed796601c6d0ac0bad7a4727d50e20e2039a3b40aff77afcfc9fa9c8d227575/68747470733a2f2f696d672e736869656c64732e696f2f6d796765742f617370656374636f72652f767072652f417370656374436f72652e436f72652e7376673f7374796c653d666c61742d737175617265)](https://www.myget.org/feed/aspectcore/package/nuget/AspectCore.Core) | [![stats](https://camo.githubusercontent.com/02b9e733eeb5a01b017dbed19e0727bb6f98863055e5fa9ec2a2478bfa7b642f/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f64742f417370656374436f72652e436f72652e7376673f7374796c653d666c61742d737175617265)](https://www.nuget.org/stats/packages/AspectCore.Core?groupby=Version) |
| AspectCore.Extensions.Reflection | [![nuget](https://camo.githubusercontent.com/2c87c8f231653af71e8153e77a5708aac64f52e8d437e47bdba15198ca460262/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f762f417370656374436f72652e457874656e73696f6e732e5265666c656374696f6e2e7376673f7374796c653d666c61742d737175617265)](https://www.nuget.org/packages/AspectCore.Extensions.Reflection) | [![myget](https://camo.githubusercontent.com/010d20b890cd3fc4ad26529d9c96ace79495ca4aa31e7b47b37f68d2c3ab70d3/68747470733a2f2f696d672e736869656c64732e696f2f6d796765742f617370656374636f72652f767072652f417370656374436f72652e457874656e73696f6e732e5265666c656374696f6e2e7376673f7374796c653d666c61742d737175617265)](https://www.myget.org/feed/aspectcore/package/nuget/AspectCore.Extensions.Reflection) | [![stats](https://camo.githubusercontent.com/39065977efef1be07418339f0bcdaef5702f8da1ca912a0dda247a0ebb34d451/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f64742f417370656374436f72652e457874656e73696f6e732e5265666c656374696f6e2e7376673f7374796c653d666c61742d737175617265)](https://www.nuget.org/stats/packages/AspectCore.Extensions.Reflection?groupby=Version) |

### Integration library

| Package Name                              | NuGet                                                        | MyGet                                                        | Downloads                                                    |
| ----------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| AspectCore.Extensions.DependencyInjection | [![nuget](https://camo.githubusercontent.com/b198267b3dc906235f5e4052b219ba6fb7b8148abae58b60bfae245164baf46b/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f762f417370656374436f72652e457874656e73696f6e732e446570656e64656e6379496e6a656374696f6e2e7376673f7374796c653d666c61742d737175617265)](https://www.nuget.org/packages/AspectCore.Extensions.DependencyInjection) | [![myget](https://camo.githubusercontent.com/b4c6a1bce915e25b831db67169f8cb0522eff15af99748a619886a9a76a600f6/68747470733a2f2f696d672e736869656c64732e696f2f6d796765742f617370656374636f72652f767072652f417370656374436f72652e457874656e73696f6e732e446570656e64656e6379496e6a656374696f6e2e7376673f7374796c653d666c61742d737175617265)](https://www.myget.org/feed/aspectcore/package/nuget/AspectCore.Extensions.DependencyInjection) | [![stats](https://camo.githubusercontent.com/2bcefc2ee84f9b4a8c9f7bdfa4ca2455d9bcf2182ec5f6881721a8f38c941374/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f64742f417370656374436f72652e457874656e73696f6e732e446570656e64656e6379496e6a656374696f6e2e7376673f7374796c653d666c61742d737175617265)](https://www.nuget.org/stats/packages/AspectCore.Extensions.DependencyInjection?groupby=Version) |
| AspectCore.Extensions.Autofac             | [![nuget](https://camo.githubusercontent.com/0aa51f690b7427a1ed044b67a82baaa6bcf6bd9bc13856a05e8852c7cb816164/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f762f417370656374436f72652e457874656e73696f6e732e4175746f6661632e7376673f7374796c653d666c61742d737175617265)](https://www.nuget.org/packages/AspectCore.Extensions.Autofac) | [![myget](https://camo.githubusercontent.com/81666d7d2c521186a248a66c6e4f18aa270246b511e48bed94e576f03166e2b3/68747470733a2f2f696d672e736869656c64732e696f2f6d796765742f617370656374636f72652f767072652f417370656374436f72652e457874656e73696f6e732e4175746f6661632e7376673f7374796c653d666c61742d737175617265)](https://www.myget.org/feed/aspectcore/package/nuget/AspectCore.Extensions.Autofac) | [![stats](https://camo.githubusercontent.com/36de1c2deba2f9e6bc2d2a60106757a51b8421ff0a6a396bfa78228b0e985e77/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f64742f417370656374436f72652e457874656e73696f6e732e4175746f6661632e7376673f7374796c653d666c61742d737175617265)](https://www.nuget.org/stats/packages/AspectCore.Extensions.Autofac?groupby=Version) |
| AspectCore.Extensions.Windsor             | [![nuget](https://camo.githubusercontent.com/2038cfdbb2390b2ead1216a986a54ff848f46b5a1515903d9c4b556597a91c5d/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f762f417370656374436f72652e457874656e73696f6e732e57696e64736f722e7376673f7374796c653d666c61742d737175617265)](https://www.nuget.org/packages/AspectCore.Extensions.Windsor) | [![myget](https://camo.githubusercontent.com/a1b5d128704ef63ab2c8375072b240631dd658cabf02b51edb0f3e06207914bf/68747470733a2f2f696d672e736869656c64732e696f2f6d796765742f617370656374636f72652f767072652f417370656374436f72652e457874656e73696f6e732e57696e64736f722e7376673f7374796c653d666c61742d737175617265)](https://www.myget.org/feed/aspectcore/package/nuget/AspectCore.Extensions.Windsor) | [![stats](https://camo.githubusercontent.com/5956129dc59ab3968d004c13f2c4239408de8b830e3fa852a955d3975ea9c599/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f64742f417370656374436f72652e457874656e73696f6e732e57696e64736f722e7376673f7374796c653d666c61742d737175617265)](https://www.nuget.org/stats/packages/AspectCore.Extensions.Windsor?groupby=Version) |
| AspectCore.Extensions.LightInject         | [![nuget](https://camo.githubusercontent.com/668b1fc986f1ec93e9c1b9bcee1a72c04df1c0cd1f14562a6059ac513a9b5149/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f762f417370656374436f72652e457874656e73696f6e732e4c69676874496e6a6563742e7376673f7374796c653d666c61742d737175617265)](https://www.nuget.org/packages/AspectCore.Extensions.LightInject) | [![myget](https://camo.githubusercontent.com/1a96e5dfb9c60021b4603f08cdc953e3604fdf39605c07a0903adad3b5205360/68747470733a2f2f696d672e736869656c64732e696f2f6d796765742f617370656374636f72652f767072652f417370656374436f72652e457874656e73696f6e732e4c69676874496e6a6563742e7376673f7374796c653d666c61742d737175617265)](https://www.myget.org/feed/aspectcore/package/nuget/AspectCore.Extensions.LightInject) | [![stats](https://camo.githubusercontent.com/612bd9a05c069d187c438c99360cbb0622a1dfac5f32cd3053de5f91cfbab2e0/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f64742f417370656374436f72652e457874656e73696f6e732e4c69676874496e6a6563742e7376673f7374796c653d666c61742d737175617265)](https://www.nuget.org/stats/packages/AspectCore.Extensions.LightInject?groupby=Version) |
| AspectCore.Extensions.Hosting             | [![nuget](https://camo.githubusercontent.com/6d3628d7766cb18d6a0a043e7c2ccc8d13e0a7628ebb2af1fd198797d4d05a0d/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f762f417370656374436f72652e457874656e73696f6e732e486f7374696e672e7376673f7374796c653d666c61742d737175617265)](https://www.nuget.org/packages/AspectCore.Extensions.Hosting) | [![myget](https://camo.githubusercontent.com/a0413f745d2fa91b8005f03358c08f0bf21e9ba8645c63b122695853d888cc8a/68747470733a2f2f696d672e736869656c64732e696f2f6d796765742f617370656374636f72652f767072652f417370656374436f72652e457874656e73696f6e732e486f7374696e672e7376673f7374796c653d666c61742d737175617265)](https://www.myget.org/feed/aspectcore/package/nuget/AspectCore.Extensions.Hosting) | [![stats](https://camo.githubusercontent.com/aad1694652ab591505e1e2a7a8b2a926131298e57518737a461e65c7fc8f8d05/68747470733a2f2f696d672e736869656c64732e696f2f6e756765742f64742f417370656374436f72652e457874656e73696f6e732e486f7374696e672e7376673f7374796c653d666c61742d737175617265)](https://www.nuget.org/stats/packages/AspectCore.Extensions.Hosting?groupby=Version) |

## AspectCore 采用的动态编织简述

简单来说 动态编织 就是在运行时创建一些我们真实业务实现类的`代理类`

通过`代理类`在运行时调用一些对于业务逻辑代码不可见的拦截器类

借用 Castle DynamicProxy 的例子说明：

```csharp
public class Interceptor : IInterceptor
{
    public void Intercept(IInvocation invocation)
    {
        Console.WriteLine("Before target call");
        try
        {
           invocation.Proceed();
        }
        catch(Exception)
        {
           Console.WriteLine("Target threw an exception!");
           throw;
        }
        finally
        {
           Console.WriteLine("After target call");
        }
    }
}
```



这是个拦截器类， 动态编织的目的就是在 `IInvocation` 不知道这个拦截器类的情况下通过`代理类`调用`Interceptor`“拦截” `IInvocation`。

下图就是调用的例子：

![Example](/content/projects/aspectcore/assets/proxy-pipeline.png)

- 蓝色区域就是代理类的区域， 对于外界来说，它就像 proxied object 一样
- 但是实际在调用时就像 黄色箭头一样， 会通过一层又一层拦截器类，最终才调用proxied object
- 返回也像 绿色箭头一样， 会通过一层又一层拦截器类
- 最终达到动态代理的目的

目前 AspectCore 使用了动态代理作为 AOP 的实现，而不使用理论上性能更优的静态织入实现。是由于个人觉得动态代理方式可以做到更好的 IoC 进行集成并且能够在切面中获取更多的运行时元数据信息，并且在经过不断优化后，AspectCore 动态代理的性能已经不落后静态织入的实现方式。

## 如何贡献

贡献的最简单方法之一是参与讨论和讨论问题。您还可以通过提交包含代码更改的拉取请求来做出贡献。

