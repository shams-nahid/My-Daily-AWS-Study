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
  - Data persisted in the stream of `24 hours`
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
    - Server side encryption is enabled by default in all DynamoDB table
    - At rest by `KMS`
      - AWS Managed Key for DynamoDB
      - Customer Managed Key
    - In flight by `SSL`/`TLS`

### Read Write Capacity

- RCU and WCU are evenly distributed over all the partitions   

We can controll the capacity of the table with two of the following ways,

- Provisioned Mode
- On Demand Mode

__To switch between provisioned and on-demand mode, requires 24 hours__

**Provisioned Mode**

- The read-write capacity has to be determine beforehand
- Only have to pay for the defined provisioned capacity

**On Demand Mode**

- Read-write capacity will be automatically scaled up/down according to the workloads
- No capacity planning is required beforehand
- Payment will be according to the usage but this is expensive compare to the provisioned mode



### Provisioned Throughput

- 2 types of `Provision Throughput`
  - RCU
    - Read Capacity Unit
    - Each `RCU` can handle one of the followings
      - 1 Strongly Consistent read 4KB/s [Enabled by adding parameter `ConsistentRead` as `true`]
      - 2 Eventually Consistent read 4KB/s
  - WCU
    - Write Capacity Unit
    - 1 write 1KB/s
- Can be used `on-demand throughput` (price is 2.5X more)
- `Throughput` can be exceeded using `Burst Credit`
- If `Burst Credit` is empty, it throws `ProvisionThroughputException`
  - In case of `ProvisionThroughputException`, it is recommended to retry with expotential backoff
- Can be used `DynamoDB Auto Scaling`
  - No need to provision throughput
  - Comparatively expensive

**Calculate WCU**

- __WCU__ stands for write capacity unit 
- Item size should be rounded to upper KB
- Formula __(number_of_items / time_in_seconds) * (size_of_item_in_KB / 1KB)__
- Examples
  - Write 10 items per second with item size of 2 KB: (10 items / 1 sec) * (2 KB / 1 KB) = 20 WCUs
  - Write 6 items per socond with item size of 4.5 KB: (6 items * 1 sec) * (5 KB / 1 KB) = 30 WCUs
  - Write 120 items per minute with item size 2 KB: (120 items / 60 secs) * (2 KB / 1 KB) = 4 WCUs

**Calculate RCU**

- __RCU__ stands for read capacity unit
- Fromula 
   - For strongly consistent: __number of read per second * (size_of_item_in_KB / 4KB)__
   - For eventual consistent: __(number of read per second / 2) * (size_of_item_in_KB / 4KB)__
- Examples
  - 10 strongly consistent read per second with size 4 KB: 10 * (4KB / 4KB) = 10 RCUs
  - 16 eventualy consistent read per second with size 12 KB: (16 / 2) * (12 KB / 4 KB) = 24 RCUs
  - 10 strongly consistent read per second with size 6 KB: 10 * (8 KB / 4 KB) = 20 RCUs

### Throttling

- When RCU or WCU is exceeded, throw "ProvisionedThroughputExceedException"
- Reasons
  - One partition key is read too many times
  - Hot partition (One partition is getting all the read/write request)
  - Very large item
- Solution
  - Expotential backoff (Included in SDK)
  - Distribute partition keys
  - For RCU, utilize DAX

### Authorizer

---

Lambda support two types of authorizer

1. `Token Based`: A bearer token is passed as the caller identity
2. `Request Parameter Based`: Caller identity is passed to context as combinations of headers, query string parameters etc

### Access

---
