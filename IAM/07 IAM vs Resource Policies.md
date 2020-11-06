## IAM vs Resource Policies

- Using `AssumeRole`, original permissions have to give up
  - Lets say, I have permission to access DynamoDB`
  - Using `AssumeRole` I got access of `S3`
  - When I am using this `AssumeRole`, I can only access `S3`, but can not access `DynamoDB`
  - But using `Resource Policies` we can use both `S3` and `DynamoDB`
- Resource Based Policies are provided by
  - S3
  - SNS
  - SQS
