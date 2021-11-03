## KMS

- When key is managed by in house security team'
  - For Encryption
    - Generate data key using Customer managed CMK
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
2. `Asymmetric (RSA & ECC)`: Use key pairs, public key and private key. Public key for encryption and private key for decryption operation. Encryption is being happened from outside of the AWS.

### We can use CMK of

- AWS managed Default CMK (free)
- User managed CMK (1$/month)
- User imported CMK (1$/month)

### Cross account snapshot of KMS Keys

- Crate a snapshot with our own key
- Attach a policy so target account can read our key
- Share the encrypted snapshot
- Copy the snapshot

### Envelope Encryption

- `CMK` is used to `generate`, `encrypt` and `decrypt` the `data keys`
- `Data Keys` are used to `encrypt` and `decrypt` the data, from outside the `AWS`

**Envelope Encryption Local Encryption Usage**

In local environment, when a data is encrypted using a key, the data is protected. But we also need to encrypt the `encryption key`. We can encrypt the `encryption key` using another master key, called `Master Key` or `CMK (Customer Master Key)`. This `CMK` is stored in the `KMS` and never leave the KMS. To use this `CMK` we must call the KMS api.

To encrypt the local data,

- First get the `data encryption key` using `GenerateDataKey` api
- This `data encryption key` can be used to encrypt the data
- Delete the `data encryption key`

To decrypt local data

- First decrypt the encrypted data key and get plaintext data key
- Decrypt local data using the plaintext data key
- Delete the plaintext data key

### API for KMS Envelope Encryption

**Encrypt/Decrypt**: Encrypt or decrypt the data up to 4KB. When data is more than 4KB, use `Generate Data Key` and `Generate Data Key without Plaintext`

**Generate Data Key**: Returns DEK (Data Encryption Key) and a copy that is encrypted

**Generate Data Key Without Plaintext**: Purpose is not to use immediately. Returns DEK (Data Encryption Key).
