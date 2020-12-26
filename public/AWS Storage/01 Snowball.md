## Snowball

- Moving data from `on-premise` to `S3`
- Features
  - Secure
  - Temper Resistant
  - KMS 256 Encryption
- Charge per data transfer job
- Snowball tracking can be done using `SNS` (Text Message) and `AWS Console`

### Process

- Request a snowball
- Install snowball clients to server
- Connect snowball with server
- Copy files from server to snowball
- Ship back to the device

### Snowball Edge

- `Snowball Edge` has the computational capability
- Two types
  - Storage optimized
  - Compute Optimized (Can be with GPU)
- Supports `EC2 AMI` so it can perform processing on go
- Supports `Lambda Function`
- Use cases
  - Data Migration
  - Image Collection
  - IoT Capture
  - Machine Learning

### Snowmobile

- A truck
- Use to transfer exabytes of data

### Limitation

- Snowball can only transfer data back and forth with `S3`
- To transfer data from/to `Glacier`, first need to use `S3`. Then `Life Cycle Policy` can be used to transfer to/from `Glacier`.
