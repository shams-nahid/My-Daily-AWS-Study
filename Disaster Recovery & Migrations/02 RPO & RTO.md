## RPO & RTO

- `RPO` stands for `Recovery Point Objective`
  - How often backup being taken
  - When disaster happen, time between `RPO` and `Disaster` is a `Data Loss`
  - If we take `backups` more frequently
    - `Data Loss` will be minimized
    - In this case, it become expensive also
- `RTO` stands for `Recovery Time Objective`
  - `RTO` is the time to recover from the `Disaster`
  - When `Disaster` happen, time between `Disaster` and `Time to Make Application Online` is the `Downtime`
- The `Lower Time` the `RPO` and `RTO`, the better the application, also become expensive
