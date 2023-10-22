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
- Verify `IAM Policy` by
  - `dry-run` policy can be used to verify if there is available permission
  - `IAM Policy Simulator`

> Permission specified in cli with access key and secret overrides the IAM role permissions

> For any unauthorized encrypt message of the unauthorized access, can be decrypt by `decode-authorization-message` of STS API

### Account Alias

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

### PassRole

- With `passRole` we can ensure, user does not have more permission than it required
- In `passRole` of a EC2 instance, if there is a definition of `S3 Read access`, we can not allow the EC2 any roles, other than the `S3 Read Access`

This way, we do not need to store any credentials in the ec2 service

### Policy Evaluation

- Any explicit deny => ends up deny
- Any explicit allow => ends up allow
- Unless there is any allow => ends up deny

**Combination of IAM and Bucket Policy**

- From security standpoint, the final policy is the union of both IAM and Bucket policy
- Example 1: EC2 instance IAM role allows reading a bucket and the bucket's buckets policy is empty => EC2 instance can read from the bucket
- Example 2: EC2 instance IAM role is empty and the bucket's buckets policy is allows reading from the EC2 instance => EC2 instance can read from the bucket
- Example 3: EC2 instance IAM role allows reading a bucket and the bucket's buckets policy is deny to read it from EC2 => EC2 instance can not read from the bucket
- Example 4: EC2 instance IAM role denys reading a bucket and the bucket's buckets policy allows to read it from EC2 => EC2 instance can not read from the bucket

### Dynamic Policy

In policy, variables can be used to make one policy for different user. For example, if we have different folder for each user in S3 and we want to allow user access to only their named folder, in this case, instead of creating policy for each of the user, we can use it like `${aws:username}` and attach it to all the users.

### Types of Policy

- AWS Managed Policy
  - Managed by AWS
  - Good for users and administrators
  - AWS update for new API or services
- Customer Managed Policy
  - Best practice, re-usable, allows rollback
  - Central management
- Inline Policy
  - Attached to the user or resource

### Best Practices

---

- Delete the root user access keys
- Create roles and IAM policies with least permissions
- Use groups for users and assign roles
- If the new policy does not work, we can revert back to the old policy by selecting the previous version
