## Egress Only Internet Gateway

- `Egress` means outgoing
- `Egress Only Internet Gateway`
  - Allow traffic to go outside
  - Deny any traffic coming inside
  - Very much like `NAT Instance` / `NAT Gateway`
  - But only works for `IPv6`
- Uses
  - `IPv6` does not have `Private Address`
  - When we provision `EC2 Instance` with `IPv6 Address` in `Private Subnet`
    - Since `IPv6` does not have `Private Address`, it will get a `IPv6 Public Address`
    - To restrict coming internet from outside use `Egress Only Internet Gateway`
