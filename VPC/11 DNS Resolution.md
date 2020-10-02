## DNS Resolution in VPC

- Two settings
- `enableDnsSupport`
  - It is `DNS Resolution Setting`
  - Default is `true`
  - Helps if `DNS Resolution` is supported for `VPC`
  - If `true`, queries the `AWS DNS Server` at `169.254.169.253`
- `enableDnsHostname`
  - It is `DNS Hostname Setting`
  - Default value
    - `false` in `Custom VPC`
    - `true` in `Default VPC`
  - If `true`, a public `hostname` assigned to the `Instance`
  - If `false`, only `IP` assigned to the `Instance`
