內置特性指框架內提供的一些特性，拿來即用就能滿足一般情況下的各種應用。當然，開發者也可以在實際應用中，編寫滿足特定場景需求的特性，然後將自定義特性修飾到接口、方法或參數即可。

## 執行前順序

參數值驗證 -> IApiActionAttribute -> IApiParameterAttribute -> IApiReturnAttribute -> IApiFilterAttribute

## 執行後順序

IApiReturnAttribute -> 返回值驗證 -> IApiFilterAttribute