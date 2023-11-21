EasyCaching disassembles the four common operations of CURD into three strategies.

- Able
- Put
- Evict

Among them, **Able**'s behavior is the same as the above example, which is to check and write, which is C and R in CURD.

The **Able** strategy applies to most query operations. Use with high real-time requirements should be used with caution or prohibited!

Let's take a look at the two strategies of **Put** and **Evict**.

The **Put** policy corresponds to the U (update) operation in CURD.

If a data has been modified, it is also necessary to update its corresponding cached data. If it is updated frequently, it is not recommended!

The **Evict** strategy corresponds to the D (delete) operation in CURD.

If a data is deleted, it is also necessary to clean up its corresponding cached data.

This is the meaning and role of the three strategies.