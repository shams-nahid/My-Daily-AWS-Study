## Organizations

- Global Service
- Allow to manage multiple `AWS Account`
- `Main Account` is `Master Account`
- `Master Account` can not be changed
- Other account is `Member Account`
- Each member can attach only one `Organization`
- Consolidated Billing
  - For all `Organization Account`
  - Pricing benefits are calculated by `Consolidated Billing`
- `API` is available to automate creating the `AWS Account`

### SCP

- Service Control Policies
- Use for `White List` and `Black List` the `IAM Action`
- Applied to `Organization Unit` or `Account Level`
- Does not apply to `Master Account`
- `SCP`
  - By default deny everything
  - Need explicit allow to for any action
- Effect of `Service Linked Roles`
  - `Service Linked Roles` enable `AWS Service` to `AWS Organization`
  - `SCP` can not affect `Service Linked Roles`

### Transfer An Account Between AWS Organization

- Member Account Transfer
  - Leave the current organization
  - Get invitation from the other organization
  - Accept the invitation
- Master Account Transfer
  - Remove all the member account
  - Delete old organization
