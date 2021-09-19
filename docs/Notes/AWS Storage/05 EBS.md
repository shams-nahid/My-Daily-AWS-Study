## EBS

- `Elastic Block Store`
- 4 Types

  - `GP2`
    - General Purpose
    - Handle up to 16000 `IO/PS`
    - Used for
      - Recommended for most workloads
      - System Boot
      - Low latency interactive apps
      - **Dev** and **Test** environment
  - `IO1`
    - `IO` optimized
    - Used for
      - When required more than 16000 `IO/PS` is required
      - Large Database
      - Critical business operation, require high sustained `IO/PS`
      - When huge load and performance for the NoSQL database
  - `ST1`
    - `Throughput` optimized
    - Used for
      - Streaming workloads, require consistent and fast throughput at low price
      - Big Data, Data warehouses
      - Apache kafka
  - `SC1`
    - `Infrequently` Used `Throughput` optimized
    - Used for large amount of data which are infrequently used
    - For sequential I/O operations

- `EBS` transfer

  - `EBS` volumes are `AZ Locked`
  - First need to take a `Snapshot`
  - Create the volume from the `Snapshot` to another `AZ`

- `EBS Backup`

  - Backups are incremental, only backup the changed blocks
  - Can take snapshot of the `EBS Volume`
  - Theses snapshot can be made available to other `Regions`
  - Snapshot can be automate by using `DLM` aka `Data Lifecycle Manager`
  - While taking backups
    - There's hamper on heavy traffic
    - Recommended to detach the volume
  - To use snapshot, require pre-warm
  - Snapshots are taking place in `S3`
  - Using lifecycle policy, can automate the `Snapshot`
  - Using the retention policy, can be delete the old `Snapshot`

- [Reference For EBS Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html)

### Encryption

- Encryption is handled by AWS
- Use KMS (AES-256)
- When a `EBS` is `encrypted`
  - All data inside the volume is `encrypted`
  - All moving data between `instance` and `volume` is `encrypted`
  - All snapshots created from them is `encrypted`
  - All volumes created from these `snapshots` are `encrypted`
- `EBS` volumes can be used while making a `Snapshots`, no problem.
- To encrypt an un encrypted EBS
  - Take a snapshot
  - Encrypt the snapshot using copy
  - Create volume from the encrypted volume
  - Delete volume and un encrypted snapshot for security leakage

### EBS vs Instance Store

Instance Store

- Physically attached to the instance
- Good I/O
- When instance is terminated, the instance store along with the data lost
- Although it is block storage, size can not be increased over time

EBS

- Network drive
- Data is persisted even the instance is terminated

### EBS RAID

- Two types of RAID
  - RAID 0
    - Improve performance
    - Example
      - Lets say we have 2 EBS with 10000 IOps
      - We logically merge and use 20000 IOps
  - RAID 1
    - Use for fault tolerance
    - Mirror the EBS volume
    - Example
      - If we have 2 EBS volume
      - We write on each of volume
      - So even if one EBS volume fails, data is still exist in another one

### Attaching a New EBS Volume

When we attach a new EBS to EC2 instance, it is considered as block device. To make it usable, need to

- Format to a file system (AWS does not pre configure any file system to EBS)
- Mount it to the instance

### Detaching Existing EBS Volume

- For root volume
  - Stop the instance
  - Detach the volume
- For non-root volume
  - For running instance, un-mount and detach
  - For stopped instance, detach, no need to un-mount
