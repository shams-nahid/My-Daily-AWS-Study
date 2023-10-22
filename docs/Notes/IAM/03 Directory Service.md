## Directory Service

- 3 types of Directory service
  - AWS Managed Microsoft AD
    - Hybrid solution
    - Users can be from `AWS Directory` and `On premise Directory`
    - Both `AWS Directory` and `On premise Directory` are connected through a `TRUST` connection
    - This `TRUST` connection can be set up using `VPN` or `Direct Connect`
  - AD Connector
    - Directory Gateway (Proxy)
    - Users managed by only `On premise AD`
    - Redirect to the `On premise AD`
    - Allows MFA
  - Simple AD
    - `AD` compatible service by AWS
    - Can not join with `On premise AD`

### Microsoft Active Directory

- Available in any windows server with `AD Domain Service`
- Combination of Objects, like
  - User Accounts
  - Computers
  - Printers
  - File Shares
  - Security Groups
- Objects are organized in `Trees`
- A group of `Trees` are `Forest`
- `AD` has feature
  - Centralized Security Management
  - Create Account
  - Assigning Permission
