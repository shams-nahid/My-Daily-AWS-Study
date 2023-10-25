## Data Retrieval

AWS allows two types of archive in s3 for long time data persisting.

1. AWS Glacier
1. AWS Glacier Deep Archive

### AWS Glacier

- 4 Types of `Data Retrieval`
  - `Vault Lock`
    - Used for long term record retention
    - `AWS Glacier` allows to lock the storage with various compliance control
  - `Expedited Retrieval`
    - Data can be retrieved withing `1-5 minutes`
    - Comparatively quick retrieval for `urgent need`
  - `Bulk Retrieval`
    - Retrieve data withing `5-12 hours`
    - Lowest cost
    - Used to retrieved large amount of data with `lowest cost`
  - `Standard Retrieval`
    - Data is retrieved within few hours `3-5 hours`
- Minimum storage charge 90 days duration
- To transfer `object` object from `S3 Glacier` to `S3 Regular Class`
  - First need to restore the objects
  - Then copy to the `S3 Regular Class`
  - `S3 Regular Class` means not the `Glacier` / `Deep Archive`
- `Provisioned Capacity` allows to use `Expedited Retrieval` whenever necessary

### AWS Glacier Deep Archive

- Standard - 12 hours
- Bulk - 48 hours
- Minimum storage charge 180 days duration
