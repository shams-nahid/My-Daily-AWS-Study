### DynamoDB Performance

---

- Caching using DAX
- Avoid `SCAN` and try to use `query` instead
- Reduce the page size in both cases `SCAN` and `query`
- Supports `BatchGetItem` and `BatchWriteItem` to make use of bulk read and write operations
- `Atomic counter`
  - Update a numeric attribute with `UpdateItem` operation.
  - No matter what `UpdateItem` operation does, like update any properties, the `atomic counter` update the value
  - If `UpdateItem` operation fails and try again, the atomic counter increase twice
- DB Locking

  - `Optimistic Locking`: Before update/delete, make sure the item is same as the client
    **Example**:
    Let's say, someone is updating the price of a product. First get the product `{ id: 1, price: 10 }`. Now the updated price should be `15`. While do the update, the dynamoDB client find out, in the db, the price is already updated `20` by someone. In this case the price will not be updated. This is optimistic locking.
  - `Pessimistic Locking`: `Pessimistic Locking` lock the document in the DB so no one can modify while it's being operated by an user. Useful for prevent overwriting but interrupt the other users operations.
  - `Overly Optimistic Locking`: Used in a system where there i only one user/one operation at a time.

- `Conditional Writing`: DynamoDB allows conditional writing, where write operation is being happened if certain defined condition matched.
- Rate limit parallel scan can reduce the cost

### Getting Write Consumed Capacity

---

When there is an operation of `Put`, `Update`, `Delete` in the DynamoDB, it consumes some of the write capacity. We can get these consumed capacity as the response of the operation.

To get the consumed write capacity, after an operation is being completed, we can make use of the following properties,

- `TOTAL`: Returns total number of consumed capacity used by the operation
- `INDEXES`: Returns total consumed capacity along with the sub total of affected secondary indexes.
- `NONE`: This is the default behavior and no consumed write capacity is returns

### Avoid Hot Partitioning

---

A hot partition occurs when an individual partition is being accessed more frequently from application downstream. To reduce the hot partitioning, we can,

- `Increase Read and Write Capacity of Table`
- `Implement Error Retries and Exponential Back-off`: SDK already has this feature installed
- `Distribute Read And Write Operations Evenly Across the Table`
- `Implement Caching by DAX`

`Caching with DAX` is expensive and `Distribute Read And Write Operations Evenly Across the Table` needs to refactor the whole application.

In this case, the easiest and quickest solution is `Increase Read and Write Capacity of Table` and `Implement Error Retries and Exponential Back-off`.

### Transactions

DynamoDB provide all-or-nothing types operation with `TransactWriteItems` and `TransactGetItems`. The consumstion of read and write operation is 2x RCU and 2x WCU. This is because, the transactional operation requires prepare and commit.

**Read Mode (TransactGetItems)**

- Eventual consistency
- Strong consistency
- Transactional

**Write Mode (TransactWriteItems)**

- Standard writing
- Transactional writing

With `TransactWriteItems`, we can do a batch of 25 items within same account, region and multiple tables. We can perform the followings,

1. `Put`
2. `Update`
3. `Delete`
4. `ConditionCheck`

### Sharding

- Use distributed partition key
- If partition key is not enough, use composite key by including a sort key
- If composite key is not enough for potential hot partitioning, add random prefix or suffix with the partition key

### Best Practices

- Keep number of indexes minimum
- Avoid indexing for heavy write activity
