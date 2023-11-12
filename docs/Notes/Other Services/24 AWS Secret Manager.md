## AWS Secret Manager

- Manage secrets for applications
- Can encrypt the keys and credentials
- Can be enabled auto rotation
- Has strong integration with cloudformation and RDS
- Used for
  - Database credentials
  - API keys
  - Other app secrets

### Parameter Store vs Secret Manager

- Parameter store has TTL, secret manager has auto rotation
- Parameter store can store config and secrets where the secret manager only store secrets
- Secret manager has tight integration with RDS
