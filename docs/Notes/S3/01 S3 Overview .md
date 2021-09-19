## S3

- `S3` is `Evenly Consistent`
- `S3 AlowMethod` has 5 methods support
  - `GET`
  - `PUT`
  - `POST`
  - `DELETE`
  - `HEAD`
- To prevent accidental delete
  - Enable `MFA Delete`
  - Enable `Versioning`
  - Put appropriate `IAM Role`
- In a bucket, various objects can have various storage class
- To ensure the data is successfully inserted in the `S3`, use
  - `HTTP 200` status
  - `MD5 Checksum`
