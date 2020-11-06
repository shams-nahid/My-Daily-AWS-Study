## AWS Config

- Helps record configurations and changes over time
- Can store config data to `S3` for further analysis
- Analysis can be
  - Is there un-restricted `SSH` access in any `SG`
  - Do bucket has public access
  - Is `ALB Config` changes over time
- `Alert` for the config can be received by `SNS`
- `AWS-Config` is per-region service, although can be aggregate across regions and accounts

### Config Rules

- Can use `AWS Managed Rules`
- Can make custom rules using `AWS Lambda`, like
  - If each `EBS` disk is type `GP2`
  - If each `EC2` instance is type t2.micro
- Rules be triggered or evaluated
  - On config change
  - Regular time intervals
  - Using `Cloudwatch Event`
- _AWS Config does not prevent actions from happening, it just check the changes_
- Pricing is `2 Dollar/per active rule/per region / per month`
