## ENA And EFA

- `ENA` stands for `Elastic Network Adapter`
- `EFA` stands for `Elastic Fabric Adapter`
- `EFA` is an improved version of `ENA` and only works with linux
- Used for
  - `Enhanced Networking` i.e. SRIOV
  - Higher Bandwidth
  - Higher PPS (Packet Per Second)
- `EFA` special use case
  - Leverage `MPI`, i.e. `Message Passing Interface`
  - This bypass underlying Linus OS for low latency
