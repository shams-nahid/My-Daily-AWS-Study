## Event Processing

- `SQS` + `lambda`
  - If `lambda` fail to process, send it to `DLQ`
- `FIFO SQS` + `lambda`
  - If `lambda` fail to process, send it to `DLQ`
- `Fan Out Pattern`
  - `Event` first goes to the `SNS`
  - `SNS` pass the event to multiple `SQS` or `consumer`
  - Let's say, we have 3 `SQS` service, get same message from application
    - If application crashed after send 2 `SQS`, the 3rd `SQS` does not get the message
    - In this case, `Fan Out` came up
      - Here application only send the message to `SNS`
      - `SNS` pass the messages to the respective `SQS`
- `S3` event can be passed to
  - `SQS`
  - `SNS`
  - `lambda`
