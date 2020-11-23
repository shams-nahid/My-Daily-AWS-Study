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
