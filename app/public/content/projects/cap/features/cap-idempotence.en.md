Imdempotence (which you may read a formal definition of on [Wikipedia](https://en.wikipedia.org/wiki/Idempotence), when we are talking about messaging, is when a message redelivery can be handled without ending up in an unintended state.



Since CAP doesn't uses MS DTC or other type of 2PC distributed transaction mechanism, there is a problem that the message is strictly delivered at least once. Specifically, in a message-based system, there are three possibilities:

- Exactly Once(*)
- At Most Once
- At Least Once

Exactly once has a (*) next to it, because in the general case, it is simply not possible.



In CAP, **At Least Once** delivery guarantee is used.



> This delivery guarantee covers the case when you are guaranteed to receive all messages either once, or maybe more times if something has failed.
>
> It requires a slight change to the order we are executing our steps in, and it requires that the message queue system supports transactions, either in the form of the traditional begin-commit-rollback protocol (MSMQ does this), or in the form of a receive-ack-nack protocol (RabbitMQ, Azure Service Bus, etc. do this).
>
> Check this out – if we do this:
>
> ```
> 1. Grab lease on message in queue
> 2. Start work transaction
> 3. Handle message (your code)
> 4. Success?
>     Yes: 
>         1. Commit work transaction
>         2. Delete message from queue
>     No: 
>         1. Roll back work transaction
>         2. Release lease on message
> ```
>
> and the "lease" we grabbed on the message in step (1) is associated with an appropriate timeout, then we are guaranteed that no matter how wrong things go, we will only actually remove the message from the queue (i.e. execute step (4)/(2)) if we have successfully committed our "work transaction".



Since we have a temporary storage medium (database table), we may be able to do At Most Once, but in order to strictly guarantee that the message will not be lost, we do not provide related functions or configurations.

For more information about CAP Idempotence, please [read the documentation](https://cap.dotnetcore.xyz/user-guide/en/cap/idempotence/).