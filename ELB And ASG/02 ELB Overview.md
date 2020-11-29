## ELB Overview

- `ALB` access logs can provide details of `API Calls`
- `ELB` does the health check by
  - HTTP
  - HTTPS
- A security feature is `Perfect forward secrecy`
  - offer SSl/TLS to `Cloudfront` and `ELB`
- In ALB
  - using path condition we can forward request to different `Target Groups` based on api path, like
    - abc.com/a
    - abc.com/b
  - using host condition we can forward request to different `Target Groups` based on host name in the header, like
    - abc.site.com
    - def.site.com
- `Classic Load Balance` has a feature `Cross Zone Load Balancing`
  - Allow distribute traffic to multiple AZ
- `ALB` supports `TCP` connection, along with web sockets
- `NLB` supports `UDP` and `TCP` connection
