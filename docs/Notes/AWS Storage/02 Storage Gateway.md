## Storage Gateway

- Bridge between `AWS S3` and `On-Premise` data center
- 3 types of storage gateway
  - File Gateway
  - Volume Gateway
  - Tape Gateway

### File Gateway

- Use for `File Access`
- Use for `NFS` and `SMB` protocol
- Can be mounted on many servers
- Bucket access is done by `IAM` role in the `File Gateway`
- Most recent data is being cached
- Hardware Appliance
  - File gateway needs virtualization
  - Alternative can be `Hardware Appliance`
  - Use when small data center does not have virtualization capability

### Volume Gateway

- Use for `Volumes` and `Block Storage`
- Use for `iSCSI` protocol
- Cloud-backed `iSCSI` block storage
- Backed by `EBS Snapshot`
- Two types of `Volume Gateway`
  - Cached Volume
    - Low latency for the recent data
  - Stored Volumes
    - All data are in the on-premise
    - Schedule backup from on premise to `S3`

### Tape Gateway

- Backup process use `Physical Tape`
- `Backup with iSCSI Protocol`
- Use `VTL (Virtual Tape Library)`
- Allow archive data to Glacier directly from the on-premise

### Misc Notes

- When we need low latency data access, use `Storage Gateway Stored Volumes`, it keeps all data in on-premise data center and make backup to cloud time basis
- In `Storage Gateway Cached Volumes`, only recent data are cached in the on-premise center
