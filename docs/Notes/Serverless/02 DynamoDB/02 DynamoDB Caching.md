### Caching

---

- Caching can be used in the dynamodb by `DAX`
- In memory caching
- Resolves the hot key issue (where one item is fetching over and over)
- Default TTL for DAX is 5 minutes
- It is recomanded to deploy DAX at least 3 AZ
- Can be integrated with IAM, KMS, VPC, CloudTrail etc

When dax are used with strongly consistent query, result is not cached.

DAX Caching

- `Write Through`: While write data to dynamoDB, data will be persisted in DAX
- `Write Around`: While write data to dynamoDB, data will not be persisted in DAX

**DAX vs ElasticCache**

- DAX has more pricing compare to the elastic cache
- For plain query/scan use DAX to cache the object
- On the other hand, when a lot of filtering, sum, aggregation needs to be cached, use ElasticCache
