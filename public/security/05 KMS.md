## KMS

- When key is managed by in house security team'
  - For Encryption
    - Generate data key using Customer managed Cmk
    - Encrypt data with data key
    - Delete data key
    - Store encrypted data key and data in S3
  - For decryption
    - Use CMK to decrypt data key
    - Decrypt data using `Decrypted data key`
- `KMS Master Key` is region specific
- By default KMS can encrypt mx 4kb of data. If we need to encrypt more data, we need to make use of `Envelope Encryption`
- KMS keys are region bounded

### Moving KMS encrypted resources between regions

1. Create a snapshot of the resources
2. While move it between region define new region KMS key

### Types of CMK

---

1. `Symmetric (AES-256)`: Use single key for encryption and decryption
2. `Asymmetric (RSA)`: Use key pairs, public key and private key. Public key for encryption and private key for decryption operation. Encryption is being happened from outside of the AWS.

### Envelope Encryption

- `CMK` is used to `generate`, `encrypt` and `decrypt` the `data keys`
- `Data Keys` are used to `encrypt` and `decrypt` the data, from outside the `AWS`
