## NAT Instance

- `Network Address Translation`
- Allow `Instances` in the `Private Subnet` to access interner
- Must be launched in the `Public Subnet`
- Must be disabled `Source` and `Destination` check
- Need and `Elastic IP (ENI)` attached to the `Nat Instance`
  - From the `Private Route Table` this `IP` be the target
- `NAT Instance` security rules:
  - Allow `HTTP` from `VPC CIDR`
  - Allow `HTTPS` from `VPC CIDR`
  - Allow `All ICMP - IPv4` from `VPC CIDR` for ping
- `Private Route Table` security rules
  - Any connection outgoing to the internet `(0.0.0.0/0)`, be target to `NAT Instance`
- `Cons` of `NAT Instance`
  - Not `HA`
  - Not easy setup
  - `Elastic IP` to make stable route
  - `Internet Traffic` depends on EC2 performance (`Network Throughput`)
