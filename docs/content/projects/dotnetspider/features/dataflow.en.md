There are two types of data flows: parsers and memories. In the most extreme case, you may not want to make it so complicated and implement both parsing and storage in a single DataFlow. A spider can have multiple DataFlows, and their execution order is in the order of addition. Throwing an exception in any DataFlow will interrupt the entire processing flow.

