## Cloudtrail

- All the `AWS` history and events are stored here, including
  - Console
  - SDK
  - CLI
  - AWS Service
- `Cloudtrail` is enabled by default
- Can put the logs to `CloudWatch Logs`
- Example, if need to trace, who change the resource, need to go to `Cloudtrail`
- The logs are encrypted by default
- By default `Cloudtrail Logs` are encrypted by `S3 Server Side Encryption`
- Also we can use `KMS` for encryption
- Enabling `Cloudtrail Log File Integrity` ensure
  - Non compliance log
  - Generate public and private key of the logs
  - Put the digest in separate folder
- `Cloudtrail Global Event Logs` can only done by `AWS CLI`, not `Console`
