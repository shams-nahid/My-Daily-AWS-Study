## Public IP

- Any IP other than `Private IP`

## Private IP

- `Private IP` does not change if `EC2 Instance` is restarted (stop and then start)

- **Big Network** Range `10.0.0.0` - `10.255.255.255` and CIDR (`10.0.0.0/8`)
- **AWS Default** Range `172.16.0.0` - `172.31.255.255` and CIDR (`172.16.0.0/12`)
- **Home Network** Range `192.168.0.0` - `192.168.255.255` and CIDR (`192.168.0.0/16`)

## Elastic IP

- Does not change if `EC2 Instance` is restarted (stop and then start) or terminated
- Max 5 `Elastic IP` can be used in one region
- We can bring our own `IP` as `Elastic IP`
- `Elastic IP` is charge, even if it is not being used
