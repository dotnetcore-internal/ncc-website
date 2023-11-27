AspectCore.DependencyInjection 提供以下生命周期：

- 瞬時（Transient） 生命周期服務在它們每次請求時被創建。這一生命周期適合輕量級的，無狀態的服務。
- 作用域（Scoped） 生命周期服務在每個作用域內被創建一次。
- 單例（Singleton） 生命周期服務在它們第一次被解析時創建，並且每個後續解析將使用相同的實例。如果你的應用程序需要單例行為，建議讓服務容器管理服務的生命周期而不是在自己的類中實現單例模式和管理對象的生命周期。