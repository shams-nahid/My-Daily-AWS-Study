## AWS Batch

- Use to run thousands of batch computing jobs
- Dynamically provision
  - Quantity
  - Compute Resource (CPU, Memory)
- Multiple job Queue can be created
  - high priority jobs are in on-demand instance
  - Low priority jobs are in spot instance
- `AWS Log Driver` can be used to get logs in the `Cloudwatch` for further investigation
