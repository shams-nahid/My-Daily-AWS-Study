### Attach Wit VPC

---

By default, the lambda function can not access the VPC resources. It is deployed outside of the VPC. Even we attach it along with the VPC, it will get the access to the VPC resources, but by default can not access the internet.

- Attach ENI with VPC
- Attach NAT with VPC
- Enable all outbound SG

**Access Resources**

To get access to our VPC resources it uses `ENI` and access the VPC resources through it.

- Lambda function should attach to
  - An `ENI` in the VPC subnets, with with our function will be attached
  - An `Create ENI To VPC` execution role
- We will need a
- A role will be

**Access Internet**

When it `EC2 Instance`, we can deploy it in a public subnet and it will get a public IP along with the internet access. But when it comes to Lambda function, even though we connect it with the public subnet ENI, it will not get a public IP and also not get the internet access.

To make sure a lambda function can access internet from the VPC we have to

- Linked it with private/public (private is the best practice) subnet ENI
- Attach `NAT Gateway`, so this will link with `IGW` and ensure the internet connection
- Make sure lambda associated SG allow the internet connection

> After getting public internet access, we can access other AWS resource using public internet or using the AWS Private net (VPC Endpoints)
