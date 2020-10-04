## DMS

- `DMS` stands for `Database Migration Service`
- Use to migrate database from `on-premise` to `RDS`
- Supports
  - Homogeneous Migration
    - Source and destination DB has same data base engine
  - Heterogeneous Migration
    - Source and destination DB has different engine
    - Require `SCT` i.e. `Schema Conversion Tool`
- It is `CDC` i.e. `Continuous Data Migration`
  - If there is a change in source database, it is replicated to the destination database as well
- `DMS` needs to run in `EC2` instance
