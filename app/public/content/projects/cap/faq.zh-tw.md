## Q: 學習和討論 CAP 的任何即時通訊群（例如騰訊 QQ 群）？

沒有。我希望開發者能夠更加獨立地思考，並通過參考文檔自己解決問題，甚至在出現錯誤時創建問題或發送電子郵件。

## Q: CAP 是否需要為生產者和消費者使用不同的數據庫？

不需要，建議為每個程序使用專用數據庫。

否則，請參考以下問答。

## Q: 如何為不同的應用程序使用相同的數據庫？

在 `ConfigureServices` 方法中定義表前綴名稱。

代碼示例：

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddCap(x =>
    {
        x.UseKafka("");
        x.UseMySql(opt =>
        {
            opt.ConnectionString = "connection string";
            opt.TableNamePrefix = "appone"; // 在此處設置不同的表名前綴
        });
    });
}
```

## Q: CAP 能否不使用數據庫作為事件存儲？我只想發送消息

目前還不能。

CAP 的目的是在微服務或 SOA 架構中確保一致性原則。該解決方案基於數據庫的 ACID 特性，沒有數據庫的單個客戶端包裝器消息隊列沒有意義。

## Q: 如果消費者異常，是否可以回滾生產者已經執行的數據庫操作？

不能回滾，CAP 是最終一致性解決方案。

可以將您的場景想象為調用第三方支付。如果您在成功調用支付寶接口後，自己的代碼出現錯誤，支付寶會回滾嗎？如果不回滾，您應該怎麼做？這裏也是同理。