## EC2 Fundamentals

- While restart an `EC2` instance
  - Public IP changes
  - Both `IP6` and private IP does not change
  - It is possible to change the underlying hardware
- Pre warm for minimum launching time
  - Launch `EC2 Instance` with `EBS Volume`
  - Enable Hibernate
- To save cost
  - Use reserved instance (Save up to 54%)
  - Use `EC2 Instance Saving Plan` (For same instance family, save up to 72%)
- Nitro based instance
  - Regular instance can handle only 32000 IO/ps
  - Nitro based instance can handle more
- SSH protocol use TCP connection with PORT 22
- EC2 instance billing
  - When in `running` state
  - When preparing to `hibernate` from the `stopping` state
  - When `reserved` instance is in `terminate` state
- For `High Performance EC2 Instance`
  - Use `EFA`
  - Use `Dedicated Instance`
- When a reserved instance is no longer required
  - Stop the instance, so it wont billed after expiration
  - Sell the instance to the `Reserved Instance Marketplace`
- `EC2 Classic` instance can be launched outside of the `VPC`
- `EC2 Enhanced Networking` allows
  - Higher Packet Per Second (PPS)
  - Consistently lower inter instance latencies
- If `Cluster Placement Group` through `insufficient Capacity Error`, restart the instance, there's no such capacity limitation
- `Warm Attach` means attaching an `ENI` when it is `Stopped`
- Placement Group
  - Cluster
    - Tightly coupled
    - used for `HPC` (`High Performance Computing`)
    - Low latency network performance
  - Partition
    - Logical partition group
    - Does not share underlying hardware
    - Used for distributed and replicated workloads
      - Hadoop
      - Cassandra
      - kafka
  - Spread
    - Distinct underlying hardware
- Logging
  - `aws ec3 describe-instances` for get logs including the recently terminated instance
- Limitation
  - There are limitation for launching vCPU in each region
  - Default is 20
  - Submitting a request to increase the limit can work
- There is no cost for `EIP`, if there is only one `EIP` and it is associated with running `EC2`