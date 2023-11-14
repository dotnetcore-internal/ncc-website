CAP does not directly provide out-of-the-box MS DTC or 2PC-based distributed transactions, instead we provide a solution that can be used to solve problems encountered in distributed transactions.

In a distributed environment, using 2PC or DTC-based distributed transactions can be very expensive due to the overhead involved in communication which affects performance. In addition, since distributed transactions based on 2PC or DTC are also subject to the **CAP theorem**, it will have to give up availability (A in CAP) when network partitioning occurs.

> A distributed transaction is a very complex process with a lot of moving parts that can fail. Also, if these parts run on different machines or even in different data centers, the process of committing a transaction could become very long and unreliable.
>
> This could seriously affect the user experience and overall system bandwidth. So **one of the best ways to solve the problem of distributed transactions is to avoid them completely**.[1](https://cap.dotnetcore.xyz/user-guide/en/cap/transactions/#fn:1)

For the processing of distributed transactions, CAP uses the "Eventual Consistency and Compensation" scheme.

For more information about CAP Transactions, please [read the documentation](https://cap.dotnetcore.xyz/user-guide/en/cap/transactions/).