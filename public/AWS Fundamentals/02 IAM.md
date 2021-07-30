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
- `dry-run` policy can be used to verify if there is available permission

> Permission specified in cli with access key and secret overrides the IAM role permissions

> For any unauthorized encrypt message of the unauthorized access, can be decrypt by `decode-authorization-message`

### Account Alisa

---

By default, sign in url is like, `account-id.signin.aws.amazon.com/console`

By creating the account alias, url become, `account-alias.signin.aws.amazon.com/console`

### IAM Certificate Store

---

Can be used to import 3rd party SSL/TLS certificate.

> Both ACM and IAM Certificate Store can be used to import 3rd party SSL/TLS Certificate.

### Trust Policy

---

- To access a service using cli/api from ec2 instance
  - First need to create policy for the targeted resources
  - Add the ec2 service as the trust policy (So ec2 can use the policy created in the first step)

With `passRole` we can ensure, user does not have more permission than it required.

This way, we do not need to store any credentials in the ec2 service

### Best Practices

---

- Delete the root user access keys
- Create roles and IAM policies with least permissions
- Use groups for users and assign roles
