## STS

- Security Token Service
- Limited validity time (15 mins to 1 hour)
- `AssumeRole`
  - Use to create temporary role within the account and share resource
  - 4 types of `AssumeRole`
    - Plain `AssumeRole`
    - `AssumeRoleWithSAMl`, this return the credentials to the users who is logged in with `SAML Federation`
    - `AssumeRoleWithWebIdentity`, this return the credentials to the users who is logged in with `LDB`, like google, facebook etc. Recommended to use `Cognito` instead
    - `GetSessionToken`, for `MFA

### Using AssumeRole

- Define `IAM` role within your account or cross-account
- Define principal to access resource in the `IAM Role`
- Use `STS` to retrieve credentials and impersonate the `IAM` role using `AssumeRole API`
- This credentials valid 15 mins to 1 hour
