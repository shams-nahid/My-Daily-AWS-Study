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
  - `Optimistic Locking`:
  - `Pessimistic Locking`:
  - `Overly Optimistic Locking`:
