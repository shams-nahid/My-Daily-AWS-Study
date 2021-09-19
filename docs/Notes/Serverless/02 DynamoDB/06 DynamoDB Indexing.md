### DynamoDB Indexing

---

A DynamoDB table can have two types of primary key,

1. Simple primary key: Consist of a HASH key or partition key
2. Composite primary key: Consist of two keys, HASH or partition key and RANGE or sort key

Partition keys used to determine, in which partition the item should be placed.

### LSI & GSI

---

DynamoDB requires us to specify the primary key for all operations and hence provide faster performance.

> We can scan on tables without primary key and it is not efficient and should avoid as much as possible.

**LSI**: Stands for local secondary index. We must create the LSI whenever we create table. After a table being created, we can not update the LSI. We can create up to 5 local secondary indexes. LSI supports both the eventual consistency and strongly consistency.

**GSI**: Stands for global secondary index. A global secondary index can be created with entirely new partition key and sort key.

- Global secondary index took a new partition and hence it needs a completely new throughput capacity for the RCU and WCU.
- GSI can be created anytime, not bound to the table creation time like the LSI.
- GSI can only perform eventual consistency

> Sparse index is useful for querying over a small subsection of a table.
