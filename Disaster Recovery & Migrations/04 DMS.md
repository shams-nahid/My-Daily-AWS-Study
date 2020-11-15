## DMS

- `DMS` stands for `Database Migration Service`
- Use to migrate database from `on-premise` to `RDS`
- Supports
  - Homogeneous Migration
    - Source and destination DB has same data base engine
  - Heterogeneous Migration
    - Source and destination DB has different engine
    - Require `SCT` i.e. `Schema Conversion Tool`
      - While use `SCT`, first put the converted data to `S3`
      - Then put all the data to the `Database`
- It is `CDC` i.e. `Continuous Data Migration`
  - If there is a change in source database, it is replicated to the destination database as well
- `DMS` needs to run in `EC2` instance
- In order to allow `DMS`, the instance should have suitable `AWS Identity and IAM Policy` (_important_)
- This enable migrating production database without any interruption
