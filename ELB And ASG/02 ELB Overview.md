## ELB Overview

- `ALB` access logs can provide details of `API Calls`
- `ELB` does the health check by
  - HTTP
  - HTTPS
- A security feature is `Perfect forward secrecy`
  - offer SSl/TLS to `Cloudfront` and `ELB`
- In ALB
  - using path condition we can forward request to different `Target Groups`
  - using host condition we can forward request to different `Target Groups` based on host name in the header
