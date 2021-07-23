### CodeCommit

---

AWS service similar to github.

Permissions of codecommit,

- `codecommit:*`: Allow all the actions
- `codecommit:CreateBranch`: Allow to create branches
- `codecommit:DeleteBranch`: Allow to delete branches
- `codecommit:CreateRepository`: Allow to create repository
- `codecommit:DeleteRepository`: Allow to delete repository

To give access of codecommit to other developers, we should

- Create git credentials
- Generate a new SSH keys
- Associate SSH kys to the IAM user
