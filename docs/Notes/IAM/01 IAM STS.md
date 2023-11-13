## STS

- Security Token Service
- Limited validity time (15 mins to 1 hour)
- `AssumeRole`
  - Use to create temporary role within the account and share resource
  - 4 types of `AssumeRole`
    - Plain `AssumeRole`
    - `AssumeRoleWithSAMl`, this return the credentials to the users who is logged in with `SAML Federation`
    - `AssumeRoleWithWebIdentity`, this return the credentials to the users who is logged in with `LDB`, like google, facebook etc. Recommended to use `Cognito` instead
    - `GetSessionToken`, for `MFA`. This returns
      - `AccessKeyId`: used for programmatic access
      - `SecretAccessKey`: used for programmatic access
      - SessionToken
      - Expiration
    - `GetCallerIdentity`, for get details of `IAM` user or role used in API call
    - `DecodeAuthorizationMessage`, decode error message when AWS API is denied

### Using AssumeRole

- Define `IAM` role within your account or cross-account
- Define principal to access resource in the `IAM Role`
- Use `STS` to retrieve credentials and impersonate the `IAM` role using `AssumeRole API`
- This credentials valid 15 mins to 1 hour

### Sharing Resource

To share a resource of account A to account B

- Account A creates an IAM role and attach it with a permission policy
- Account A attaches a trust policy that identifies account B as principle who can assume role
- Account B create a permission to assume the role of account B
