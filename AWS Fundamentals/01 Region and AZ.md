## Region

- Combination of data centers
- Data centers are called `AZ`, i.e. `Availability Zone`

## AZ

- `Availability Zone`
- In region, couple of `AZ` exists
- `AZ` are isolated each other, so `Disaster` in one `AZ` does not impact on other `AZ`

## AZ and Region

- Some service are `AZ` scoped
- Some services are `Global` scope
- `AZ` name can be `us-east-1a`, `us-east-2b`
- `Region` name be `us-east`, `us-west`
- `AZ` names are randomized according to the `Account`
  - `us-east-1a` in one account could be `us-east-1b` to another account
