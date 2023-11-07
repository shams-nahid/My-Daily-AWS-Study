## AWS Cognito

---

- 3 tools to discuss
  - Cognito User Pools
    - Users are stored as username and password in cognito
    - Sign In functionality
    - Integrate with api gateway
    - Allow tracking user device, ip, locations etc.
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
  - SAML based identity providers (SAML, LDAP, Microsoft AD)
  - Social identity providers
- To get data insight of the cognito, used the `Cognito Streams`
  - To put data in redshift, we can make use of both the `new kinesis stream` or the `cognito stream`

### CUP

---

- Serverless database of users for mobile
- Verification through email/phone/MFA
- Can enable `Federated Identity` (Google, Facebook, SAML) -> Becomes `Identity Pools` from `User Pools`
- Verify user credentials and pass `JWT`
- Can be integrated with `API Gateway` or `Application Load Balancer` for authentication natively
- Can trigger lambda function in different life cycle

### Federated Identity Pools (aka Cognito Identity Pools)

---

- Supports
  - Pulic providers
  - CUP
  - Open ID or SAML compatible providers
  - Developer Authenticated Identities (Custom Login Server)
- Provide direct access to `AWS Resource` from client side
- Steps
  - `Identity Provider` generate token for valid user(could be `CUP`)
  - `Federated Identity`
    - Verify the token
    - Using `STS` generate temporary credentials for the `APP`
    - App can use these credentials and access `AWS Resource`
- To allow access of not authenticated user, allows, guest access

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

### UI

---

- Cognito provide a built in login and sign up page for both CUP and Identity pool
- We can customize the built in pages
- We can change the logo by going through the cognito app settings
- For using custom domain
  - Should be https connection
  - Need ACM certificates from us-east-1 [No other options]
  - Custom domain should be included in the app-integration section

### Compromised Credentials

---

- Amazon Cognito can determine whether the password has been compromised.
- We can set the settings `block use` from the advanced section. Also, we can determine the actions like `sign in`, `sign up` and `password change`.
- Using risk factor, low, high or medium, it can invoke using the MFA for the user
- To enforce additional security **only for the suspicious authentication**, can be used `Adaptive Authentication`

### ALB Integration

- Listener should be HTTPs
- For not authenticated users,
  - Move to authenticate route (Default Behavior)
  - Deny
  - Allow
- For OIDC, the verification process is different [TODO: 410]
  - ALB redirect user to `authentication endpoint`, it provides grant code
  - Then `token endpoint` provides id token and access token using grant code
  - Later,`user info endpoint` gives user claims using the access token
  - Overall flow,
    - Authentication Endpoint: Generate grant code
    - Token Endpoint: Generate id + access toke
    - User Info Endpoint: Generate user claims

### User Pools vs Identity Pools [TODO: 413]
