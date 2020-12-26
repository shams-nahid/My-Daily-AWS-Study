## Aurora

- Proprietary database by `AWS`
- Data is replicated to `6 Replicas` in `3 AZ`
- Auto healing capability
- Multi AZ
- Auto scaling read-replica
- Storage from `10GB` to `64TB`
- `Aurora Global` database for `DR` and `Latency Uses`
- Need to provision `EC2 Instance` and `EBS Volume`
- Using `Aurora Serverless` does not require `instance` and `volume`
- `5x` faster than regular `RDMS`
- Support `MAX 15 Read Replicas`
- We can create custom endpoint for
  - Production Database
  - Reporting queries
- Built in `reader-endpoint` can be used for distribute the traffic between read-replicas
- If `DB Primary Instance` fails, it create a new `DB Instance` in the same AZ as the `Original Instance` and done by `Best Effort basis`
- `Read Replicas` can be used to avoid un necessary downtime
