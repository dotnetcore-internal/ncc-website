In a database, Change Data Capture (CDC) is a set of software design patterns used to identify and track changed data so that actions can be taken using the changed data. CanalSharp is a .NET client of the Alibaba open source project Canal, which is an incremental subscription & consumption component for MySQL database binlog. Canal is a CDC component for MySQL database.

## What is Canal

![Canal](/articles/projects/canalsharp/assets/canal.png)

In the early days, Alibaba had business requirements for cross-datacenter synchronization due to the deployment of dual datacenters in Hangzhou and the United States. The main implementation method was to obtain incremental changes based on business triggers. Since 2010, the business has gradually attempted to obtain incremental changes by parsing database logs for synchronization, which has given rise to a large number of database incremental subscription and consumption businesses.

Business based on incremental subscription and consumption of logs includes:

- Database mirroring
- Real-time backup of the database
- Index construction and real-time maintenance (split heterogeneous indexes, inverted indexes, etc.)
- Refresh business cache
- Incremental data processing with business logic

The current Canal supports source MySQL versions including 5.1.x, 5.5.x, 5.6.x, 5.7.x, and 8.0.x.

### Working Principle of Canal

- Canal emulates the interaction protocol of MySQL slave, pretending to be a MySQL slave, and sends the dump protocol to the MySQL master.
- When the MySQL master receives the dump request, it starts to push the binary log to the slave (i.e., Canal).
- Canal parses the binary log object (originally a byte stream).

For more detailed information, please refer to the Canal official documentation: https://github.com/alibaba/canal

## CanalSharp working mechanism

Canal is designed in a client-server mode, with the interaction protocol using protobuf 3.0. The client side can implement different consumption logics in different languages. CanalSharp is a .NET/C# Client implementation, which allows you to write business code in C# to consume MySql binlog data.

![CanalSharp](/articles/projects/canalsharp/assets/canalsharp.png)

## Problem Feedback

Please submit problem feedback to us through [Issue](https://github.com/dotnetcore/CanalSharp/issues/new). When submitting, please provide as much detailed information as possible so that we can troubleshoot and solve the problem.

## Contributing Code

If you have any good ideas, you are welcome to submit [Pull Request](https://github.com/dotnetcore/canalsharp/pulls) or [Issue](https://github.com/dotnetcore/CanalSharp/issues/new).

## Refactoring Progress

The current refactored version has completely covered the old version, with higher performance, more elegant code, implemented some functions that were not implemented in the old version, and supports the latest Canal.


| Task | Status |
| ------------------------------------ | ------------------- |
| Generate protobuf 3 protocol | Done |
| Connect to Canal | Done |
| Data subscription encapsulation | TODO |
| Cluster support (Service cluster and Client cluster) | Done |
| Send data to Kafka | Sent directly through Canal |
| Send data to Redis | Sent directly through Canal |