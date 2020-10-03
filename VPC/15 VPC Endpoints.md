## VPC Endpoints

- Allow using `AWS Service` using `Private Network` from `VPC`
- No need of `IG` and `NAT Gateway`
- Two types of `VPC Endpoints`
  - Gateway
    - `S3` and `DynamoDB` uses `Gateway`
    - Provision `ENI` (i.e. `Private IP Address`) as entry point
    - Need `SG`
  - Interface
    - Provision `Target` and use `Route Table`
    - Service, other than `S3` and `DynamoDB`, uses `Gateway`
- To establish a `VPC Endpoint`
  - Check `DNS Resolution`
  - Check `Route Table`
-
