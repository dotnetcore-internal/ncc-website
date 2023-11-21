## 概述

WebApiClient 有兩個版本

- `WebApiclientCore` 基於`.NET Standard2.1`重新設計的新版本，與全新的`依賴注入`、`配置`、`選項`、`日志`等重新設計過的.NET 抽象 Api 完美契合
- `WebApiClient.JIT`、`WebApiClient.AOT` 基於`.NET Standard2.0`的舊版本(額外支持`.NET Framework 4.5+`)，支持`.NET Core 2.0+`,在老版本的.NET 上亦能獨當一面
- [QQ 群 825135345在新窗口打開](https://shang.qq.com/wpa/qunwpa?idkey=c6df21787c9a774ca7504a954402c9f62b6595d1e63120eabebd6b2b93007410)進群時請注明**WebApiClient**，在咨詢問題之前，請先認真閱讀以下剩餘的文檔，避免消耗作者不必要的重複解答時間。
- 反饋問題請前往 [https://github.com/dotnetcore/WebApiClient/issues在新窗口打開](https://github.com/dotnetcore/WebApiClient/issues)

## 特性

- 支持編譯時代理類生成包，提高運行時性能和兼容性
- 支持 OAuth2 與 token 管理擴展包，方便實現身份認證和授權
- 支持 Json.Net 擴展包，提供靈活的 Json 序列化和反序列化
- 支持 JsonRpc 調用擴展包，支持使用 JsonRpc 協議進行遠程過程調用
- 支持將本地或遠程 OpenApi 文檔解析生成 WebApiClientCore 接口代碼的 dotnet tool，簡化接口聲明的工作量
- 提供接口聲明的語法分析與提示，幫助開發者避免使用不當的語法