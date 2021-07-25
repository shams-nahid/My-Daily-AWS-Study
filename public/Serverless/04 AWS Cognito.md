## AWS Cognito

---

- 3 tools to discuss
  - Cognito User Pools
    - Users are stored as username and password in cognito
    - Sign In functionality
    - Integrate with api gateway
  - Cognito Identity Pools
    - Users included 3rd party provides, like SAML, facebook, google, etc
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

---

- Serverless database of users for mobile
- Verification through email/phone/MFA
- Can enable `Federated Identity` (Google, Facebook, SAML) -> Becomes `Identity Pools` from `User Pools`
- Verify user credentials and pass `JWT`
- Can be integrated with `API Gateway` for authentication

### Federated Identity Pools

---

- Provide direct access to `AWS Resource` from client side
- Steps
  - `Identity Provider` generate token for valid user(could be `CUP`)
  - `Federated Identity`
    - Verify the token
    - Using `STS` generate temporary credentials for the `APP`
    - App can use these credentials and access `AWS Resource`

### Developer Authenticated Identities

---

- AWS Cognito provides `Developer Authenticated Identity`
- It works along with 3rd party identity provider like facebook, google etc
- With `Developer Authenticated Identity` AWS can sync the user resource of a particular users resource
- Can be used to sync between end user device and backend

### Steps To Use CUP

---

- Create CUP
- In API Gateway, create authorized for cognito user pool id
- Send token in the header to authorize the request
