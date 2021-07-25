## IAM

---

- `Identity and Access Management`
- `AWS Security` spans
  - Users (For Physical Person)
  - Groups (Can be admins, dev-ops, developers)
  - Roles (For `AWS Resources`)
- Policy
  - Written in `JSON` format
  - Determine what `Users`, `Groups` and `Role` has access

### Account Alisa

---

By default, sign in url is like, `account-id.signin.aws.amazon.com/console`

By creating the account alias, url become, `account-alias.signin.aws.amazon.com/console`

### IAM Certificate Store

---

Can be used to import 3rd party SSL/TLS certificate.

> Both ACM and IAM Certificate Store can be used to import 3rd party SSL/TLS Certificate.

### Best Practices

---

- Delete the root user access keys
- Create roles and IAM policies with least permissions
- Use groups for users and assign roles
