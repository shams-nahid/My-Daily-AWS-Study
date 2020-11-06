## IAM Conditions

- Allow `IP` to `API` call to the `AWS` from `certain IP`
  - Any request to the `AWS` should come from `192.0.2.0/24`
- Allow taking action to certain resources only from certain region, like
  - `EC2 Instance` can be start or stop if the request is from `eu-east-1`
- Restriction can be based on `Tags`, like
  - We can start a instance if the instance has certain tags
  - We can stop a instance if the instance has certain tags
- For certain actions we can force using `MFA`, like
  - Stop `EC2 Instance`
  - Terminate `EC2 Instance`
