## Cloud HSM

- Stands for `Hardware Security Module`
- **Provide temper resistance environment for managing keys**
- Its a dedicated hardware security module
- Manage your own keys, hence no access to AWS managed services
- Once key is lost, no way to retrieve it
- **CloudHSM is `Level 3` standard (`FIPS 140-2 Level 3`)**
- **KMS is `Level 2` standard**
- AWS managed service
- Runs within VPC
- Single tenant, dedicated hardware, multi AZ cluster
- Use industry standard API
- Required when
  - Strict regulatory compliance is needed
  - Level 3 compliance is needed
  - PKCS#11
  - Java Cryptography Extensions
  - Microsoft CryptoNG
