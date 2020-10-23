## S3 Object Lock

- `WORM` i.e. `Write Once Read Many` model
- Block a object version, no one can delete or modify

## Glacier Vault Lock

- `WORM` i.e. `Write Once Read Many` model
- Block a object, so no one can delete or modify

### Common Theory

- `Lock` can be applied on both
  - Bucket Level
  - Object Level
- `Lock` has two modes
  - Governance Mode
    - Users with special permission can override the rules and retention period
  - Compliance Mode
    - No one, even the root user can not override the rules and retention period.
