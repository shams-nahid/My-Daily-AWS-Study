### CodeCommit

---

AWS service similar to github.

Permissions of codecommit,

- `codecommit:*`: Allow all the actions
- `codecommit:CreateBranch`: Allow to create branches
- `codecommit:DeleteBranch`: Allow to delete branches
- `codecommit:CreateRepository`: Allow to create repository
- `codecommit:DeleteRepository`: Allow to delete repository

To give access of codecommit to other developers, we can dod any of the followings

- Create git credentials with the AWS Credential profile (to take the access key credentials)
- Generate a new SSH keys and associate SSH kys to the IAM user
- Generate HTTPS git credentials and specify them in git credential manager
- For developer with another account,
  - Create cross account role
  - Give repository permission to that role
  - Provide the role arn to the developer