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

  - Can take snapshot of the `EBS Volume`
  - Theses snapshot can be made available to other `Regions`
  - Snapshot can be automate by using `DLM` aka `Data Lifecycle Manager`

- `EBS Backup`

  - Using lifecycle policy, can automate the `Snapshot`
  - Using the retention policy, can be delete the old `Snapshot`

- [Reference For EBS Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html)
- When a `EBS` is `encrypted`
  - All data inside the volume is `encrypted`
  - All moving data between `instance` and `volume` is `encrypted`
  - All snapshots created from them is `encrypted`
  - All volumes created from these `snapshots` are `encrypted`
- `EBS` volumes can be used while making a `Snapshots`, no problem.