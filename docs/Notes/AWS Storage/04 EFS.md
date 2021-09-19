## EFS

- Known as `Elastic File System`
- `POSIX-compliant` file system
- Network file system
- Only compatible with `linux`
- `EFS Mount Helper` can be used to encrypt data in transit
- KMS can be use to encrypt EFS
- Pay as go
- Increase as we use
- Can be used with only one `VPC`
- Used when
  - Multiple linux server need to connect to storage simultaneously
  - Linux server can be from multi-az
- Two types of performance mode
  - General purpose
  - Max I/O
    - Cons are higher latency
    - Can be used with higher level of throughput
    - Can connect thousands of instances

### Storage Tier

- Two types of EFS
  - Standard
  - Infrequent Access
- Lifecycle policy
  - Can be used to move files to different tier after N days
