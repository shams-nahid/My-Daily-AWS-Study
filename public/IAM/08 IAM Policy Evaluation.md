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

### IAM Policy Evaluation Order

1. `Command Line Options`: Override any other config. Used like `--region`, `--output`, `--profile` etc
2. `Environment variable`
3. `CLI Credentials File`: Created by `aws configure` and store in `~/.aws/credentials`
4. `CLI Config File`: TODO: find diff between `CLI Credentials File` and `CLI Config File`
5. `Container Credentials`: Temporary credentials in the ECS Task container
6. `Instance Profile Credentials`: IAM role attached to the instance
