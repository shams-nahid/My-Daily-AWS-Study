### DynamoDB Permissions

---

With dynamoDB

- We can grant permission of the table, but only for certain items. These permissioned rows should be included in the generated IAM policy
  - For example, user will only get access of data of that user id
- We can also permissioned for certain rows
  - For example, user will get location information only closer to him

**Implementation**

- Condition must be applied with `condition` in IAM policy
- Track key should be the primary key
- Set the primary key using the `dynamodb:LeadingKeys`
