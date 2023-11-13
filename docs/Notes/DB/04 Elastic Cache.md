## Elastic Cache

- Key-value store
- In memory database
- Sub millisecond performance
- 2 types
  - Memcached
  - Redis
- Support
  - Clustering (Redis)
  - Multi AZ
  - Read Replicas (sharding)
- Have
  - Backup
  - Snapshot
  - Point in time recovery
  - Scheduled Maintenance
- Monitoring through `Cloudwatch`
- `Redis` has authentication feature `Redis Auth`
- To secure the redis cluster access
  - Use redis auth in transit encryption, enabled for clusters
- When `Cluster Mode` is enabled
  - All nodes should reside in the same region
  - Can not promote any more read replica

In most cases, it's better to use Redis. But should choice `Memcached` when,

- Required the simplest model possible
- Multi-thread or multi core supports

> Redis is not primarily designed for using the multi-cpu.

### Caching Strategies

---

- `Lazy Loading`: Loads data only when it is required
- `Russian doll`: Have nested records. Top level keys are the cahce keys for child resources.
- `Write Througth`: Adds item to cache when a item is added or updated. may cause cachec churn ie. lots of cache is not being used or read.
