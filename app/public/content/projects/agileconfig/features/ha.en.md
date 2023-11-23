| Problem | Impact | Description |
| ------------ | -------------------------- | ------------------------------------------------------------ |
| Console offline | Unable to maintain configuration, no impact on clients | Because the console and the node coexist, the offline of a console generally means the offline of a node |
| A node goes offline | Clients reconnect to other nodes | No impact |
| All nodes go offline | Clients read configuration from memory | Started clients will read configuration from memory, and unstarted clients will try to connect to the node multiple times after failing, and try to read configuration from the local file cache to ensure that the application can start |

Some people think that your design is not useful, as the database is still a single point. Once the database crashes, it's still over.

However, the database has its own high-availability technologies, such as MySQL's binlog, etc. Therefore, the high availability of the database should be handled by the database itself.

From an architectural point of view, Ctrip's Apollo database is also a single point.
