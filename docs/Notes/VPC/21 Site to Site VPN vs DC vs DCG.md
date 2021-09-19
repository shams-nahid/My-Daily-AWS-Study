## Site To Site VPN vs DC vs DC Gateway

- `Site To Site VPN`
  - `Corporate Data Center` to `AWS Cloud`
  - Use `Public Internet`
  - In `VPC` use `VPG`
  - In `Customer Data Center` use `Customer Gateway`
- `DC`
  - `Corporate Data Center` to `AWS Direct Connect Partner` to `AWS Cloud`
  - Use `Physical Connection` from `Corporate Data Center` to `AWS Direct Connect Partner`
  - Use `Private Internet` from `AWS Direct Connect Partner` to `AWS Cloud`
  - In `VPC` use `VPG`
- `DC Gateway`
  - If `Direct Connect` is required with multiple `VPC`, use `DC Gateway`
