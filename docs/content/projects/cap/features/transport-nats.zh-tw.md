[NATS](https://nats.io/)是一個簡單、安全、高性能的數字系統、服務和設備通信系統。NATS 是 CNCF 的一部分。



> CAP 5.2.0 以下的版本基於 Request/Response 實現, 現在我們已經基於 JetStream 實現。 查看 https://github.com/dotnetcore/CAP/issues/983 了解更多。

CAP 直接提供的關於 NATS 的配置參數：

| NAME               | DESCRIPTION      | TYPE    | DEFAULT           |
| ------------------ | ---------------- | :------ | ----------------- |
| Options            | NATS 客戶端配置  | Options | Options           |
| Servers            | 服務器Urls地址   | string  | NULL              |
| ConnectionPoolSize | 連接池數量       | uint    | 10                |
| DeliverPolicy      | 消費消息的策略點 | enum    | DeliverPolicy.New |

如果你需要 **更多** 原生相關的配置項，可以通過 `Options` 配置項進行設定：

```
services.AddCap(capOptions => 
{
    capOptions.UseNATS(natsOptions=>
    {
        // NATS options.
        natsOptions.Options.Url="";
    });
});
```

`Options` 是 NATS.Client 客戶端提供的配置， 你可以在這個[鏈接](http://nats-io.github.io/nats.net/class_n_a_t_s_1_1_client_1_1_options.html)找到更多詳細信息。