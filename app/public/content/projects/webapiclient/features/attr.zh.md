内置特性指框架内提供的一些特性，拿来即用就能满足一般情况下的各种应用。当然，开发者也可以在实际应用中，编写满足特定场景需求的特性，然后将自定义特性修饰到接口、方法或参数即可。

## 执行前顺序

参数值验证 -> IApiActionAttribute -> IApiParameterAttribute -> IApiReturnAttribute -> IApiFilterAttribute

## 执行后顺序

IApiReturnAttribute -> 返回值验证 -> IApiFilterAttribute