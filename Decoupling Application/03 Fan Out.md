## Fan Out

- `SNS` + `SQS`
- Push event in one `SNS` and received by many `SQS`
- `SQS` access policy should allow `SNS` to publish message
- `FIFO SQS` can not be a subscriber to a `SNS`
- Used when one topic should be published to multiple `SQS`
