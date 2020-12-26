## Global Accelerator

- Discussed in the `VPC` section

### Problem

- When we have an `Application` in another region, we have to reach that application through lots of `ISP Provider`
- When `EC2` has a `Public IP` and some regions having difficulties with this `Public IP` access
  - Since `AWS Accelerator` is using `Any Cast`, this problem can be resolved

### UniCast and Any Cast IP

- `Uni Cast IP` means each server has one IP
- `Any Cast Ip` means
  - Multiple server has same `IP`
  - Traffic routed to nearest server
  - `AWS Global Accelerator` uses the `Any Cast IP` concept

### Overview

- Use 2 `Any Cast IP`
- Leverage `AWS Internal Network`
- `Any Cast IP` send traffic to the nearest `AWS Edge Location`
- From the `Edge Location`, traffic goes to the server using `AWS Internal Network`
- Works with
  - Elastic IP
  - Public/Private EC2 Instance
  - Public/Private ALB
  - Public/Private NLB
- Performance
  - User intelligent routing to ensure lowest latency
  - Use Internal AWS Network
  - Has health check
    - If issue with an application, has `automatic failover` feature
    - So good for disaster recovery
- Security
  - Only 2 IP needs to be white listed
  - DDoS Protection by `AWS Shield`

### Global Accelerator Vs Cloudfront

- Both use `AWS Global Network` i.e. `Edge Locations`
- Both use `Shield` for `DDoS` protection

#### Cloudfront

- Cache Content

#### Global Accelerator

- Improve performance for `TCL` and `UDP`
- Has Failover
