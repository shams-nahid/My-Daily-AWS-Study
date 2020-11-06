## IAM Policy Evaluation

### IAM Permission Boundaries

- Supported for users and roles (not groups)
- Even a user has `Administrator Access`, these access can be restricted using the `IAM Permission Boundaries`
- This can be used as a combination of `Organization SCP`

## Evaluation Logic

- Couple of roles and policies we can define
  - Deny Evaluation
  - Organization SCP
  - Resource Based Policy
  - IAM Permission Boundaries
  - Session Policy
  - Identity Based Policy
- If there is any `Explicit Deny` the other `Allow` will be discarded
