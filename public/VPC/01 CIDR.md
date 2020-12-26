## CIDR

- `Classless Inter-Domain Routing`
- Used in
  - Security groups
  - AWS networking
- Help define `IP Range`
- Has two components
  - **Base IP** (XX.XX.XX.XX)
    - `IP` that contains in the range
  - **Subnet Mask** (/XX)
    - Determine how many bits can be change in the `IP`

### Subnet Mask

- Calculate `IP Ranges`
  - Formula (2^(32-subnetMaskNumber))
  - Some Examples
    - `/32` allows `1` `IP` = 2^0
    - `/31` allows `2` `IP` = 2^1
    - `/30` allows `4` `IP` = 2^2
    - `/29` allows `8` `IP` = 2^3
    - `/28` allows `16` `IP` = 2^4
    - `/27` allows `32` `IP` = 2^5
    - `/26` allows `64` `IP` = 2^6
    - `/25` allows `128` `IP` = 2^7
    - `/24` allows `256` `IP` = 2^8
    - `/16` allows `65,536` `IP` = 2^16
    - `/0` allows `ALL` `IP` = 2^32
  - Quick Memo
    - `/32` - no IP number can change
    - `/24` - last IP number can change
    - `/16` - last IP two numbers can change
    - `/8` - last IP three numbers can change
    - `/0` - All IP numbers can change
  - Exercise
    - Find range `192.168.0.0/24`
      - Last IP number can change
      - Range be `192.168.0.0` to `192.168.0.255` (`256` IP)
      - Alternate `2^(32-24)` = `256` IP
    - Find range `192.168.0.0/16`
      - Last 2 IP number can change
      - Range be `192.168.0.0` to `192.168.255.255` (`65,536` IP)
      - Alternate `2^(32-16)` = `65,536` IP
    - Find range `134.56.78.123/32`
      - No number can change
      - Range be `134.56.78.123` to `134.56.78.123` (`1` IP)
      - Alternate `2^(32-32)` = `1` IP
    - Find range `0.0.0.0/32`
      - All number can change
      - Range be `0.0.0.0` to `255.255.255.255` (`ALL` IP)
      - Alternate `2^(32-0)` = `2^32` IP = `ALL` IP

### Private IP

- **Big Network** Range `10.0.0.0` - `10.255.255.255` and CIDR (`10.0.0.0/8`)
- **AWS Default** Range `172.16.0.0` - `172.31.255.255` and CIDR (`172.16.0.0/12`)
- **Home Network** Range `192.168.0.0` - `192.168.255.255` and CIDR (`192.168.0.0/16`)

### Public IP

- Any IP but `Private IP`
