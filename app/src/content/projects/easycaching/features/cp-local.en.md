There are three options for local caching:

- SQLite (EasyCaching.SQLite, based on **EasyCaching.Core** and **Microsoft.Data.SQLite**)
- LiteDB (EasyCaching.LiteDB, based on **EasyCaching.Core** and **LiteDB**)
- Disk (EasyCaching.Disk, based on **EasyCaching.Core**)

They all contain most of caching operations that we can use easily.

There are two scenarios where SQLite is recommended to use as our local caching!

1. Persisted caching item. 
2. Rebuild caching item. 
