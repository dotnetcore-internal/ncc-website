The response mechanism can guarantee the accuracy of the consumption data. The Canal service will record the progress of Client consumption and requires the client to send an ACK message before the service updates the progress. It is similar to the ACK mechanism in message queues, such as RabbitMQ.

### Automatic response

```csharp
await conn.GetAsync(1024);//Get data and automatically respond
```

`GetAsync()` will automatically send an ACK message to the server after getting the data.

### Manual response

```csharp
var msg = await conn.GetWithoutAckAsync(1024);//Get data
await conn.AckAsync(msg.Id);//Manually respond
await conn.RollbackAsync(msg.Id);//Roll back
```