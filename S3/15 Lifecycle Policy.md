## Lifecycle Policy

- We can change object storage class using the `Lifecycle Policy`
- Can not change storage class from `Glacier` or `Glacier Archive`
- To abort/delete in-complete multipart files after certain time period, lifecycle policy can be used

### Actions

- Transition Action
  - Change the storage class after certain times
  - Example
    - Move object to `Standard IA` after 30 days of creation
    - Archive object after 6 months
- Expiration Action
  - Delete object after certain times
  - Example
    - Remove access logs after 365 days
    - Removing in-completed multipart files

### Rules

- Rules can be applied to object prefix name
- Rules can be applied to object tags
