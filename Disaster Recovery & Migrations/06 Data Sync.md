## Data Sync

- Use to transfer `Large Data Sets`
- Work with `SMB` and `NFS` protocol
- Data can be transferred from `on-premise` to
  - S3
  - EFS
  - FSx (for windows)
- Data can be transferred from `EFS` to `EFS`
- A `Data Sync Client` need to implement in the client
  - It looks for the changes
  - Transfer data time to time
    - Hourly
    - Daily
    - Weekly
- While transfer data from on-premise to `EFS`, to ensure all data is copied, we can do the following for faster transfer
  - Disable verification during initial file transfer
  - Enable it post last data transfer
