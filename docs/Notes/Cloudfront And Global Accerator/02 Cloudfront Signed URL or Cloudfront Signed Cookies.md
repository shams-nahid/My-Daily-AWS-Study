## Cloudfront Signed URL or Cloudfront Signed Cookies

### Signed URL

- To distribute premium contents
- Should have a policy
  - With URL expiration
  - Define `IP Ranges` that can access the content
  - Trusted Signers (Who can create signed URLS)

### Signed URL vs Signed Cookies

- Signed URL for single content
- Signed Cookies for multiple content

### Cloudfront Signed URL vs S3-presigned URL

#### Cloudfront Signed URL

- Allow a path, no matter the origin
- Account wide Key-pair, only root can manage it
- Filter by
  - IP
  - Date
  - Expiration
- Leverage caching features

#### S3 Pre-Signed URL

- Only allow `S3` as origin
- Use the IAM key of the signer, (Pre-sign URL has the same principle as the signer)
- Filter by
  - Expiration
- No caching available
