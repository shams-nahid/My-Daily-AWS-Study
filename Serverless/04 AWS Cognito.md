## AWS Cognito

- 3 tools to discuss
  - Cognito User Pools
    - Sign In functionality
    - Integrate with api gateway
  - Cognito Identity Pools
    - Provide `AWS Credentials` to access `AWS Resource` directly
    - Integrate with `CUP` as `Identity Provider`
  - Cognito Sync
    - Sync data to multiple device
    - Deprecated, using `AppSync` instead
- `User pools` are list of user with credentials
- `Identity pools` are users from 3rd party
- `Cognito User Pool` and `Identity Pool` are independent with each other
- Has `Guest User` facility, so users can access limited resource without authentication
- Cognito Supports
  - OIDC (Open ID Connect)
  - SAML based identity providers
  - Social identity providers

### CUP

- Serverless database of users for mobile
- Verification through email/phone/MFA
- Can enable `Federated Identity` (Google, Facebook, SAML)
- Verify user credentials and pass `JWT`
- Can be integrated with `API Gateway` for authentication

### Federated Identity Pools

- Provide direct access to `AWS Resource` from client side
- Steps
  - `Identity Provider` generate token for valid user(could be `CUP`)
  - `Federated Identity`
    - Verify the token
    - Using `STS` generate temporary credentials for the `APP`
    - App can use these credentials and access `AWS Resource`
