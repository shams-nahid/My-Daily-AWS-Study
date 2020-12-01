### Route 53 Fundamentals

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