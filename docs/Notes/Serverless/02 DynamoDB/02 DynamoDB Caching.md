### Caching

---

Caching can be used in the dynamodb by `DAX`

When dax are used with strongly consistent query, result is not cached.

DAX Caching

- `Write Through`: While write data to dynamoDB, data will be persisted in DAX
- `Write Around`: While write data to dynamoDB, data will not be persisted in DAX
