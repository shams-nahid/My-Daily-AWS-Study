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
  - `ST1`
    - `Throughput` optimized
    - Used for
      - Streaming workloads, require consistent and fast throughput at low price
      - Big Data, Data warehouses
      - Apache kafka
  - `SC1`
    - `Infrequently` Used `Throughput` optimized
    - Used for large amount of data which are infrequently used

- [Reference For EBS Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html)
