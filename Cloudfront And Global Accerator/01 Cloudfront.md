## Cloudfront Overview

- `CDN` (Content Delivery Network)
- Content is cached in the `Edge Location`
- There are more than 200 `Edge Location` all over the world
- Improve `Read Performance`
- Can expose any
  - Internal HTTP endpoints
  - External HTTP endpoints (Even on-premise server)
- Security
  - DDoS Protection
  - AWS Firewall
  - Shield Integration

### Cloudfront Origin

- As `S3 Bucket` origin
  - Use as `Ingress` i.e. upload file
  - Distribute files
  - Caching files at the `Edge` location
  - `OAI`
    - Origin Access Identity
    - `S3` Bucket only be accessed through `Cloudfront`
- As `Custom Origin` HTtP
  - Application Load Balancer
    - `EC2` instance cna be private
    - `SG` of `ALB` must allow the `Cloudfront Public IP`
  - `EC2 Instance`
    - `EC2 Instance` must be public
    - `SG` of the `EC2 Instance` must allow the `Cloudfront Public IP`
  - S3 Static Website
  - Any HTTP Backend (AWS Internal / on-premise)

### Cloudfront Geo Restriction

- Two types of filtering
  - Whitelist
    - `IP` from Certain countries can access the content
  - Blacklist
    - `IP` from Certain countries can not access the content
- Determining the `IP` origin country is determined by using a 3rd party database

### `Cloudfront` vs `S3 Cross Replication`

#### Cloudfront

- Use for static content
- When content must be available on almost all region
- Caching is for certain times (TTL)
- Use for both
  - READ (Caching)
  - WRITE (ingress)

#### S3 Cross Replication

- Use for dynamic content
- When content must be available in certain region in very low latency
- Content is always available
- Use for `READ Only`
