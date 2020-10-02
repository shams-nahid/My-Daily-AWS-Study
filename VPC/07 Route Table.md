## Route Table

- By default there is a `Main Route Table` when `VPC` is created
- Every subnet is associated to the `Main Route Table` if it is not explicitly set up.
- By default all the `VPC CIDR` is routed to the `local` network
- The `Public Subnet` needs to add a route to the `IG`, if it is not communicating with `VPC CIDR`
