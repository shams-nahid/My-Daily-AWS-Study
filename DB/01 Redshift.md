## Redshift

- Its an `OLAP` i.e. `Online Analytics Processing` based on `PostgreSQL`
- Columnar Storage
- `MPP` i.e. `Massively Parallel Query`
- Pay as instance provisioned
- Has `SQL` interface to perform query
- `BI` tools are integrated with it
  - AWS Quicksight
  - Tableau
- Data can be loaded from
  - S3
  - DynamoDB
  - DMS
- It can have nodes number from `1` to `128`
- Each node can contain `160GB` data
- Two types of node

  - `Leader Node`, do the planning and results aggregation
  - `Compute Node`, perform queries and send results to the leader

### Snapshot and DR

- Snapshots are
  - Point in time backup of a cluster
  - Snapshots are stored in S3
- Snapshots are incremental, on changes are saved
- Snapshots can be restored to a new cluster
- Snapshots can be copied to another `AWS Region`
- Manual `snapshot` does not delete automatically
- Automatic snapshot has an automatic retention period
- Monitor performance of `Redshift Cluster` by `Cloudwatch` and `AWS Trusted Advisor`

### Redshift Spectrum

- Direct query to `S3` without loading
- Must have a `Cluster` available to start the query
- `Query` is submitted to thousands of `Redshift Spectrum Nodes`
