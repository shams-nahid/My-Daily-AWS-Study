## Internet Gateway (IG)

- Use to provide `Internet Connection` to the `VPC`
- It is scalable, highly available and redundant
- **One `VPC` can have one `IG`**
- **One `IG` can have one `VPC`**
- `IG` work like `NAT` for instance, that has public IP
- `Default VPC` have an attached `IG`
- For `Custom VPC` need to create an `IG` and attach to the `VPC`
- To ensure the EC2 instance have internet connection over IG
  - The route table should have a definition of route for IG
  - The ACL should have inbound and outbound traffic allowence
