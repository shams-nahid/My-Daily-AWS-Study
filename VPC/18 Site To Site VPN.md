## Site To Site VPN

- Connect `Corporate Data Center` with `AWS Cloud`
- Seems they are both part of same network
- Traffic between `Corporate Data Center` with `AWS Cloud` goes over `Public Internet`
- To set up `Site To Site VPN`
  - Set a `Customer Gateway` in the `Corporate Data Center`
  - Set a `Virtual Private Network Gateway` (i.e. `VPG`, i.e. `VPN Gateway`) in `AWS VPC`
  - In between `Customer Gateway` and `VPN Gateway`, provision a `Site To Site VPN Connection`
- `Customer Gateway`
  - Set in `Corporate DC` (i.e. `Corporate Data Center`)
  - **`IP Address` can be one of followings**
    - Static IP
    - If behind `NAT`, use `NAT` public address
- `Virtual Private Gateway` i.e. `VPN Gateway` / `VPG`
  - `VPN Concentrator` in the `AWS` side of the `VPN Connection`
  - `VGW` is created and attached to `VPC`
  - Possible to customize `Autonomous System Number` i.e. (`ASN`)
