## Cloudfront Overview

- `CDN` (Content Delivery Network)
- Content is cached in the `Edge Location`
- There are more than 200 `Edge Location` all over the world
- This is a global service
- Only support web distribution
- Improve `Read Performance`
- Can expose any
  - Internal HTTP endpoints
  - External HTTP endpoints (Even on-premise server)
- Security
  - DDoS Protection (WAF)
  - AWS Firewall
  - Shield Integration
- If the `Cache Control` header has `max-age` is `0`, all the request will go to the `Origin`
- With `cloudfront-viewer-country`, we can determine, from which country the request is being made and redirect the traffic to specific url. To do so, have to make sure, `viewer-request-events` trigger the function
- Only root users can create cloudfront key-pairs

### Cloudfront Origin

- As `S3 Bucket` origin
  - Use as `Ingress` i.e. upload file
  - Distribute files
  - Caching files at the `Edge` location
  - `OAI`
    - Origin Access Identity
    - `S3` Bucket only be accessed through `Cloudfront`
- As `Custom Origin` HTTP
  - Application Load Balancer
    - `EC2` instance can be private
    - `SG` of `ALB` must allow the `Cloudfront Public IP`
  - `EC2 Instance`
    - `EC2 Instance` must be public
    - `SG` of the `EC2 Instance` must allow the `Cloudfront Public IP`
  - S3 Static Website
  - Any HTTP Backend (AWS Internal / on-premise)
- `On Premise` server can be used as a origin of `Cloudfront`

### Cloudfront Geo Restriction

- Two types of filtering
  - Whitelist
    - `IP` from Certain countries can access the content
  - Blacklist
    - `IP` from Certain countries can not access the content
- Determining the `IP` origin country is determined by using a 3rd party database

### `Cloudfront` vs `S3 Cross Replication`

**Cloudfront**

- Use for static content
- When content must be available on almost all region
- Caching is for certain times (TTL)
- Use for both
  - READ (Caching)
  - WRITE (ingress)

**S3 Cross Replication**

- Use for dynamic content
- When content must be available in certain region in very low latency
- Content is always available
- Use for `READ Only`

### Cloudfront Query String

- The delimiter character should be `$`
- Parameter's name and values are case sensitive

## Cloudfront Origin Group

- Origin failover can be handled with using two origin
- Has two origin
  - One is primary origin
  - Other can be treated as secondary origin
- Cloudfront switch to secondary origin from primary origin if
  - Primary origin fails
  - Primary origin sends `HTTP Fail Status Code`

### Policies

Cloudfront can ensure,

- From client object and request will be encrypted and use https
- When it comes to send response, if the object is not available in cache, cloudfront will fetch it from origin also in https format
- To enable both client -> cloudfront -> origin in https, we will need
  - Viewer Protocol Policy (When HTTPS, there is ssl certificate installed in cloudfront)
  - Origin Protocol Policy

### Cache Invalidation

---

- When new object is uploaded, to invalidate previous cache
  - We can invalidate instantly
  - We can wait for the existing cache to be invalidated
  - Use versioned name

### TTL

---

To make a object for a certain time,

- Configure origin to add a `Cache-Control` or `Expires-Header`
- Specify minimum TTL to the `Cloudfront Cache Behevior`
- Default value of TTL is 24 hours

### Cloudfront Function

- Cloudfront functions can be used
  - Cache key normalization
  - Header manipulation
  - Status code modification and body generation
  - Request Authorization

### Cloudfront Signed URL / Cookies

- Only root user can create key-pairs
- A root user can make max 2 key pairs
- After creating the signed url/cookies, public keys stored in cloudfront and privte keys goes to signer.
- Since, for this account, a root account is required, best practice is to avoid the operation
