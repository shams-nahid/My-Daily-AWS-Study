## Resource Access Manager

- Known as `RAM`
- Share `AWS Resource` with other `AWS Account`
- Avoid resource duplication
- Example of `RAM` on `VPC Subnet`
  - Allow to have all the resource launched in the same subnets
  - For `VPC Subnet`, other account have to be same `Organization`
  - Can not share `SG` or `Default VPC`
  - Participants can manage there own resource there
  - Participant can not view/modify other participants resource
- Also we can use `RAM` in
  - AWS Transit Gateway
  - Route53 Resolver
  - License Manager Configurations
