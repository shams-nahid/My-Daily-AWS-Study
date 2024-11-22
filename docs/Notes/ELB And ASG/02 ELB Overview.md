## ELB Overview

- Use to forward traffic to multiple servers
- Expose single point of access `DNS` to the application
- Do regular health checks
- Provide `SSL` for the site
- Can be used stickiness with cookies
  - User with same cookie will go to the same server/instance
- Allow cross zone availability
- 3 types of load balancers
  - Classic Load Balancer
    - Handle `HTTP`, `HTTPS` and `TCP` traffic
  - Application Load Balancer
    - Handle `HTTP`, `HTTPS` and `Websocket`
    - Great fit for micro-services and container based applications
    - Has port mapping feature to redirect a dynamic port in `ECS`
    - The application can get the IP from header `x-forwarded-for`
    - The application can get the protocol from header `x-forwarded-proto`
    - The application can get the port from header `x-forwarded-port`
    - `Dual Stack Settings` when it handles both `IPv4` and `IPv6`
  - Network Load Balancer
    - Handle `TCP`, `TLS` aka `Secure TCP` and `UDP`
    - Supports one EIP for each AZ, that is helpful for whitelisting the IP
    - Use for
      - Extreme performance
      - TCP or UDP protocol
- ALB and CLB expose DNS, on the other hand NLB expose static IP
- Load balancer can be `Public` and `Private`
- For huge scale out, need to use `warm-up`. Need to contact AWS for this purpose
- Troubleshooting
  - 4xx for client induced error
  - 5xx for application induced error
  - 503 for `at capacity` or `no registered target`
- Monitoring
  - `Access Logging` is disabled by default
  - `ALB` access logs can provide details of `API Calls`
  - It logs,
    - Client’s IP address
    - Latencies
    - Request paths
    - Server responses
  - Cloudwatch for aggregate statistics
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
- `ALB` can have 3 types of target,
  - Instances
  - IP
  - Lambda

### Stickiness

- Ensure the user goes to the same instance
- Supported by
  - Application Load Balancer
    - Need to update the target group
  - Classic Load Balancer
- Can set the time of stickiness

### Cross Zone Load Balancing

- Load balancer can distribute traffic evenly among all the AZ
- For `NLB` there is charge for `Inter AZ` load balancing
- In `CLB` and `NLB` this `Cross Zone Load Balancing` is turned of by default

### SSL and TLS Certificate

- SNI stands for server name identification
- SNI can be use for multiple endpoint with multiple certificate

### Connection Draining

- It is the time of `In Flight Request` while the instance is `de registering` or `unhealthy`
- For `CLB` it is called `Connection Draining`
- For `ALB` and `NLB` it is called `De registration Delay`
  - Happen in `Target Group`
- Connection draining time can be set from 0 (disabled) to 3600 sec

### Lambda Function Integration

With ALB and target groups,

- We can send multi value headers
- Enable health check

> multi value query enables us sending query as `name=['foo', 'bar']` instead of `?name='foo'&name='bar'`

