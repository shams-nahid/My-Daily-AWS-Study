## NAT Gateway

- Managed By AWS
- Pricing is based on hour and bandwidth
- Can not used by thee instance of same `Subnet` (Only from other `Subnets`)
- Require `IG`
- Things are **`Private Subnet ->` `NAT Gateway` -> `IG`**
- Scale from `5Gbps` to `45Gbps`
- No `Security Group` is required
- `NAT Gateway` is resilient withing a `Single AZ`. For `fault-tolerance`, require multiple `NAT Instance` in `Multiple AZ`
- `Private Route Table` security rules
  - Any connection outgoing to the internet `(0.0.0.0/0)`, be target to `NAT Gateway`
