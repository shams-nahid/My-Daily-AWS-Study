## NACL & SG

- `NACL` stands for `Network Access Control List`
- `SG` stands for `Security Group`
- `SG` associated with `Instance`
- `NACL` associated with `Subnet`
- `SG` is stateful
  - If `Inbound Rule` allowed `IP` / `IP Ranges`, `Outbound Rule` is automatically allowed
  - If `Outbound Rule` allowed `IP` / `IP Ranges`, `Inbound Rule` is automatically a llowed
- `NACL` stateless i.e. both `Inbound Rule` and `Outbound Rule` is separately evaluated
- `NACL` is evaluated
  - Lowest number has high preference
  - If no rules found, it goes to `*` numbered rule
- `Default NACL` allow every traffic for both `Inbound` and `Outbound`
- `Custom NACL` block every traffic for both `Inbound` and `Outbound`
- Each `Subnet` goes under `Default NACL` if not explicitly associated
- `Ephemeral PORT` should be open for highly restricted `NACL`
- To block an `IP Address` use `NACL`
