## RDS

- `OLTP` i.e. `Online Transaction Processing`
- Relational Database
  -Managed
  - PostgreSQL
  - MySQL
  - Oracle
  - MSSQL
- Must provision
  - `EC2 Instance`
  - `EBS Volume`
- Support
  - `Read Replica` for performance
  - `Multi AZ` for digester recovery and availability
- Have
  - Backup
  - Snapshot
  - Point in time restore
- Managed and scheduled maintenance
- Monitoring through `Cloudwatch`
- `IAM` authentication can be used as a feature in
  - PostgreSQL
  - MySQL
- To increase the number of db connection
  - Create a parameter group
  - Attach parameter group to DB Instance
  - Change the parameter group settings
- When the db instance CPU is 100% and stopped working, we can
  - Use read replica
  - Use elastic cache in the application layer
  - Shard data among multiple RDS DB instance
- For async database copy, use `READ Replica`
- While using `READ Replica`, in these `READ Replica`, there should be some replication lag
- When primary instance failed the `CNAME` of the `DB Instance` switch to `Standby Instance`
- Non supported oracle feature
  - RMAN
  - RAC
- In `multi-AZ` deployment, `Standby Instance` can not be used for `read` and `write` operations

### Automated Backup

- Take snapshot every `24 hours`
- `RDS` take `Snapshot` of the whole database instance
- It captures the transaction logs of every 5 minutes
- A new DB Instance can be created from the from the `DB Snapshot`

### Encryption

- Un-encrypted database can not be encrypted on the fly (This is a limitation)
- Un-encrypted database read replica can not be encrypted
- To encrypted the un-encrypted database
  - Create a DB snapshot
  - Copy the snapshot
  - Encrypt the copied snapshot
  - Restore database from the `Encrypted Snapshot`
- To encrypt data while write and decrypt during read, there is `Transparent Data Encryption` or `TDE`

> `TDE` is for data encryption whereas the regular `RDS Encryption` is for encrypt the ec2 instance and ebs volume
> `TDE` is only applicable for the microsoft sql server

### Security

- IAM DB Authentication can be used for `MySQL` and `PostgreSQL`
- `IAM DB Authentication` has following feature
  - SSL Encryption of Network Traffic
  - Application runs in `EC2 Instance` can connect with database without password
- To enable security between `Web Server` and `DB` server
  - Force ssl by `rds.force_ssl`
  - Download `RDS Root CA Certificate`

### Monitoring

- Default Monitoring
  - CPU Utilization
  - Database Connection
  - Free able Memory
- Enhanced Monitoring
  - RDS Process
  - OS Process
- Get logs of
  - Audit Log
  - Error Log
  - General Log
  - Slow query log
