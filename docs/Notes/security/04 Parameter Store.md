## System Manager Parameter Store (SSM)

- `Parameter Store` is a component of AWS `System Manager`
- Manage secrets and configurations securely
- `Parameter store` is centralized tool to caching and distributing parameters across AWS services
- Helpful to separate configs and secrets from source control
- It is
  - Serverless
  - Scalable
  - High Performance
- Used to store data and secrets
  - Application configuration
  - DB String
  - Password
  - API key
  - Host Name
  - Access Keys
  - lambda functions env variable (when encrypted variables is shared to multiple lambda function)
- Values can be stored
  - Encrypted by `KMS`
  - Plaintext
- Can store parameters in hierarchies (Max 15 levels), like
  - dev/app1/config
  - prod/app1/config
- Can track version and roll back
- Can use TTL to expire values like passwords
  - Must use `Advanced Tier`
  - Allow events through cloudwatch
    - Expiration (Set specific date)
    - NoChangeNotification
    - ExpirationNotification
- Can use to login to `EC2 Instance` using `Run Command` without using `RDP` or `SSH`

**Patch Manager**: Used to patch the managed instances to overcome security vulnarebilities
