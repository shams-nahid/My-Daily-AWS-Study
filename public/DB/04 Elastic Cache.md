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

In most cases, it's better to use Redis. But should choice `Memcached` when,

- Required the simplest model possible
- Multithread or multi core supports

> Redis is not primarily designed for using the multi-cpu.
