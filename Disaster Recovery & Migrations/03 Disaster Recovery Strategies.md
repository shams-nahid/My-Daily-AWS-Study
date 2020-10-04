## Disaster Recovery Strategies

- 4 types of `Disaster Recovery Strategies`
  1. Backup and Restore
  2. Pilot Light
  3. Warm Standby
  4. Hot Site / Multi Site Approach

### Backup And Restore

- Data and applications backup is taken time to time
- When `Disaster` happen, restore these data and spin the application
- Has very high `RPO` and `RTO` and comparatively cheaper

### Pilot Light

- Application most critical part is always standby in other places
- In case of `Disaster`, add the non-critical part
- **Not whole system is standby, only critical part is standby**

### Warm Standby

- **Minimum version of the whole system is standby**

### Hot Site / Multi Site Approach

- **Whole system is standby in another az or region or from op-premise to aws-cloud**
- Most expensive one
