Diagnostics provides a set of features that make it easy for us to document critical operations that occurs during the application's operation, their execution time, etc., allowing administrators to find the root cause of problems, especially in production environments.

## Tracing

The CAP provides support for `DiagnosticSource` with a listener name of `CapDiagnosticListener`.

Diagnostics provides tracing event information as follows:

- Before the message is persisted
- After the message is persisted
- Message persistence exception
- Before the message is sent to MQ
- After the message is sent to MQ
- The message sends an exception to MQ.
- Messages saved from MQ consumption before saving
- After the message is saved from MQ consumption
- Before the subscriber method is executed
- After the subscriber method is executed
- Subscriber method execution exception

Related objects, you can find at the `DotNetCore.CAP.Diagnostics` namespace.



## Metrics

Metrics are numerical measurements reported over time, most often used to monitor the health of an application and generate alerts. For example, a web service might track how many requests it receives each second, how many milliseconds it took to respond, and how many of the responses sent an error back to the user.

CAP 7.0 is support for `EventSource`, and the counters name is `DotNetCore.CAP.EventCounter`.

CAP provides the following metrics:

- Publish rate pre seconds
- Consume rate pre seconds
- Invoke Subscriber rate pre seconds
- Subscriber elpased time mean pre seconds