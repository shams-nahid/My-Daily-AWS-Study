### DynamoDB

- Managed database, replicated across 3 AZ
- NoSQL database
- Enable event driven programming using `DynamoDB Streams`
- In `DynamoDB` database is already created, only needs to create `Table`
- Each `Table` should have a primary key (Must be decided while creating the table)
- Can have infinite number of rows
- Max size of item can be `400KB`
- Data types
  - Scalar
    - String
    - Number
    - Binary
    - Boolean
    - Null
  - Document
    - List
    - Map
  - Set
    - String Set
    - Number Set
    - Binary Set
- To improve performance we can use
  - `DAX` (milliseconds to micro seconds)
  - Use partition keys of high cardinality, so large number of distinct values for each item
- `DAX`
  - Stands for `DynamoDB Accelerator`
  - Caching mechanism for `DynamoDB`
- `DynamoDB Stream`
  - Raise event on `Create`, `Update`, `Delete`
  - Can be used to trigger events on `DB Changes`
- `Transaction`
  - All or nothing of operations
- `Global Table`
  - Replicated in multiple region
  - Needs to enable `DynamoDB Stream`
  - `Active Active Replication`
    - Changes in any region, impact all other regions
- `Security`
  - Available in `VPC Endpoints`
  - Fully controlled by `IAM`
  - `Encryption`
    - At rest by `KMS`
    - In flight by `SSL`/`TLS`

### Provisioned Throughput

- 2 types of `Provision Throughput`
  - RCU
    - Read Capacity Unit
    - Each `RCU` can handle one of the followings
      - 1 Strongly Consistent read 4KB/s
      - 2 Eventually Consistent read 4KB/s
  - WCU
    - Write Capacity Unit
    - 1 write 1KB/s
- Can be used `on-demand throughput` (price is 2.5X more)
- `Throughput` can be exceeded using `Burst Credit`
- If `Burst Credit` is empty, it throws `ProvisionThroughputException`
  - In case of `ProvisionThroughputException`, it is recommended to retry
- Can be used `DynamoDB Auto Scaling`
  - No need to provision throughput
  - Comparatively expensive

### Authorizer

---

Lambda support two types of authorizer

1. `Token Based`: A bearer token is passed as the caller identity
2. `Request Parameter Based`: Caller identity is passed to context as combinations of headers, query string parameters etc
