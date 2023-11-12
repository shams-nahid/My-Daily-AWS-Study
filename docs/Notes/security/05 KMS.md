## KMS

- With customer managed keys (CMK), kms
  - Store the CMK
  - Receives data from clients, encrypt the data and send it back
- When key is managed by in house security team
  - For Encryption
    - Generate data key using Customer managed CMK
    - Encrypt data with data key
    - Delete data key
    - Store encrypted data key and data in S3
  - For decryption
    - Use CMK to decrypt data key
    - Decrypt data using `Decrypted data key`
- `KMS Master Key` is region specific
- KMS keys are region bounded
- By default KMS can encrypt mx 4kb of data. If we need to encrypt more data, we need to make use of `Envelope Encryption`
- With `CloudTrail`, audit can be done to determine, which keys were used to make API call

### Moving KMS encrypted resources between regions

1. Create a snapshot of the resources
2. While move it between region define new region KMS key

### Types of CMK

---

1. `Symmetric (AES-256)`: Use single key for encryption and decryption
2. `Asymmetric (RSA & ECC)`: Use key pairs, public key and private key. Public key for encryption and private key for decryption operation. Encryption is being happened from outside of the AWS.

### Key Policies

1. `Default KMS Key Policy`: Everyone in the account can access the key
2. `Custom KMS Key Policy`: Defined user, roles or cross account can access the key

### Data Key Caching

- Instead of invoking KMS key every time, we can use key caching
- This reduce the number of API calls to KMS
- The drawback is security, using same data key multiple times

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

Use **Generate Data Key** if the encelope encryption should be done right now. For later encryption, use **Generate Data Key Without Plaintext**.

### KMS Limits

- If the request quota is exceeded, the response shows `ThrottlingException`
- Minimize the issue by,
  - Expotential backoff (backoff and retry) can be used to for exceeding the quota
  - Data key caching
  - Increasing the request quota
