應答機制可以保證消費數據的准確性，Canal 服務端會記錄 Client 消費的進度，需要客戶端發送 ACK 消息，服務端才會更新進度。類似於在消息隊列中的 ACK 機制，如 RabbitMQ。

### 自動應答

```csharp
await conn.GetAsync(1024);//獲取數據並自動應答
```

`GetAsync()` 會在獲取數據後，自動向 Server 發送 ack 消息。

### 手動應答

```csharp
var msg = await conn.GetWithoutAckAsync(1024);//獲取數據
await conn.AckAsync(msg.Id);//手動應答
await conn.RollbackAsync(msg.Id);//回滾
```