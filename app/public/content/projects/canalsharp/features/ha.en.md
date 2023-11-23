There are two types of high availability here, client clusters and server clusters. Both use a cold standby mode, because parallel processing will cause data ordering issues for binlog data consumption. Of course, you can achieve this through some complex mechanisms, which will not be explained here. Deployment of clusters requires Zookeeper.

