## Route 53 Private Zone

- Make sure following 2 `VPC DNS Resolution` is `enabled`
  - `enableDnsHostname` is `true`
  - `enableDnsSupport` is `true`
- Since it is `Private Zone` and accessible from `VPC`. we can create records that is not owned
