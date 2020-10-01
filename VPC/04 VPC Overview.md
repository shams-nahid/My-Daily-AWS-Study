## VPC

- `Virtual Private Cloud`
- Max 5 `VPC` in per region (Soft Limit)
- Max 5 `CIDR`
- Each `CIDR`
  - Min Size /28 = 16 IP address
  - Maz Size /16 = 65536 IP Address
- `VPC` is `Private`, so `Private IP Ranges` are
  - **Big Network** Range `10.0.0.0` - `10.255.255.255` and CIDR (`10.0.0.0/8`)
  - **AWS Default** Range `172.16.0.0` - `172.31.255.255` and CIDR (`172.16.0.0/12`)
  - **Home Network** Range `192.168.0.0` - `192.168.255.255` and CIDR (`192.168.0.0/16`)
- `CIDR` should not overlap other networks
