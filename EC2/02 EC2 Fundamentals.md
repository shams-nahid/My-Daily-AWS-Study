## EC2 Fundamentals

- While restart an `EC2` instance
  - Public IP changes
  - Both `IP6` and private IP does not change
- Pre warm for minimum launching time
  - Launch `EC2 Instance` with `EBS Volume`
  - Enable Hibernate
- To save cost
  - Use reserved instance (Save up to 54%)
  - Use `EC2 Instance Saving Plan` (For same instance family, save up to 72%)
- Nitro based instance
  - Regular instance can handle only 32000 IO/ps
  - Nitro based instance can handle more
- SSH protocol use TCP connection with PORT 22
