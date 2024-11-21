### Route 53 Fundamentals

- Managed DNS
- Also work as a Domain Registerer
- Records

  - `A` hostname to IPv4
  - `AAAA` hostname to IPv6
  - `CNAME` hostname to hostname
  - `Alias` hostname to AWS resource

- Health Check
  - `Active-Active` Failover
    - All resources should be available all the time
    - All records should be
      - Same name
      - Same Records
      - Same Routing Policy
  - `Active-Passive` Failover
    - `Primary Resource` available all the time
    - In case of `Failover`, `Secondary Resource` always in standby
- Support
  - A (Address Record)
  - AAAA (IP V6 address record)
  - CNAME (Canonical name record)
  - CAA (Certification Authority Authorization)
  - MX (Mail Exchange Record)
  - NAPTR (name Authority Pointer Record)
  - NS (Name Server record)
  - SoA (Start of authority record)
  - SPF (Sender Policy Framework)
  - SRV (Service locator)
  - TXT (Text Record)
- Not Supported

  - DNSSEC

  ### TTL

  - Stands for Time To Live
  - Default value is 300 sec
  - During this time the browser does not make the request to DNS server for IP
  - When TTL is High
    - The server make less query to the DNS server
    - DNS server has low traffic
    - To change IP, need to wait long time
  - When TTL is low
    - DNS server make DNS query more frequently
    - Easy to change the IP

### CNAME vs Alias

- CNAME
  - Points hostname to hostname
  - Only works for non-root domain
- Alias
  - Points to AWS Resource
  - Works for both root and non-root domain
  - Alias records is a AWS feature for its resources

### Routing Policy

- Simple Routing Policy
  - Send traffic randomly to the resources
- Weighted Routing Policy
  - Send traffic multiple resource with specified percentage
- Latency Based Routing Policy
  - Send traffic to the resource that has lowest latency
- Failover Routing Policy
  - Active passive failover (Check the upper section)
- Geo location Routing Policy
  - Send traffic based on users location
- Geo Proximity Routing Policy
  - Send traffic based on resource location
- Multi-value Routing Policy
  - Simple routing policy with health check

### 3rd Party Domains

- To import 3rd party domain to Route 53
  - Create a hosted zone in Route53
  - Update NS record on 3rd party website to use Route53

### With ALB
- Enable `Evaluate Target Health` to evaluate the instance health check behid `ALB`
- To check health of instances from `Route 53` enabling `Health check on ELB` in `ALB` is not enough