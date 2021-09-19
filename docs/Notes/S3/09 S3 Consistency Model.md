## Consistency Model

- `S3` is `Eventual Consistency Model`
- No way to get `Strong Consistency Model` in `S3`
- We can read a object after write and after the success response
- If we read a object after write but before success response, we might not get the object for `Eventual Consistency`
- `Eventual Consistency` also applicable for `DELETE` and `PUT` object
