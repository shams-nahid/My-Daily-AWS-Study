## SQS

### Overview

- Fully manage message broker system
- Unlimited throughput
- Unlimited number of messages
- Retention period
  - Default `4 days`
  - Max `14 days`
- Max message size `256 KB`
- Can have duplicate message
  - At least once delivery
  - Can have out of order
    - Use best effort ordering
    - Applicable for `SQS Standard`
    - `FIFO SQS` maintain order but limited throughput
- Message can be produced by the `SQS SDK`
- Message can be consumed by `AWS Lambda`, `EC2 Instance`
- Consumer can pull max `10 messages` at a time
- After process the message, the consumer has to delete the message, otherwise the message will be appeared in the queue again
- Can be use to handle extended number of db write operations
- After a queue is being created, we can not change the type (FIFO vs regular), instead we need to recreate it
- Properties
  - `DeleteQueue`: Use to delete the queue along with all messages
  - `PurgeQueue`: Use to delete the messages of the queue

> We can ignore default message size from `256 KB` to up to `2GB` by making use of `S3` and `SQS Extended library for Java`

### Security

- `IAM Policies` can be used to regulate the `SQS API`
- `SQS Access Policy`
  - Use for `Cross Account Access`
  - Allowing other service like `S3`, `SNS`
- Encryption
  - In flight encryption using the `HTTPS`
  - At rest encryption using `KMS`, can be enabled without changing the code
  - Client side encryption
    - Encryption be done by `Message Producers`
    - Decryption can be by the `Message Consumers`

### Message Visibility Timeout

- After message is polled by a consumer, the message become invisible for other consumer
- Default visibility timeout is `30 Seconds`
- Is message is not proceed by the consumer within the visibility timeout, it will appear again in the queue and might possibility to proceed again by another consumer
- If message require more time than `Visibility Timeout`, the consumer can call the api `ChangeMessageVisibility` to increase `Message Visibility Timeout`
- Best practices
  - If the `Message Visibility Time` too high and consumer crashes, it took long time to re appear the message and proceed
  - If `Message Visibility Time` is too low, it is possible to duplicate processing
  - Better to set minimum `Message Visibility Time` and increase by calling `ChangeMessageVisibility` api if necessary

### Dead Letter Queue

- If consumer fails to process a message couple of times it can be passed to the `DLQ`
- We can set the threshold, how many fails attempts to allow
- Best practice to set retention period of `14 days` for `dead letter queue`
- While creating a `Dead Letter Queue`,
  - For standard queue create `Standard Dead Letter Queue` in the same AWS account
  - For fifo queue create `Fifo Dead Letter Queue` in the same AWS account
- To define the `Dead Letter Queue` in the lambda
  - use `Amazon Resource Name` in the `DeadLetterConfig` parameter
  - There should be defined failed attempts for processing the message
  - The lambda function invocation should be asynchronus

### Delay Queue

- Using delay queue the message will be appeared in the queue after certain times
- Time
  - Default is `0 Sec`
  - Could be max `15 Min`

### FIFO Queue

- Maintain Orders (First In First Out)
- Limited throughput
  - 300 msg/s without batching
  - 3000 msg/s with batching
- De duplication ensure multiple message with same ID does not appear
  - When message has identical bodies, use unique de duplication id
  - When message has unique message bodies, use content-based de duplication ID
  - Only FIFO queue has this feature
- Message group Id ensure the order of message is being proceed

> De duplication id prevent duplication, group id ensure message is being ordered

> A regular queue can not be converted to a FIFO queue. I should be created from scratch

### SQS With ASG

- `ASG` can be implemented to scale the `Consumers`
- Using `Cloudwatch ApproximateNumberOfMessages` can be determined number of messages in the queue
- Using `Cloudwatch ApproximateNumberOfMessages` can be scaled up/down the `EC2 Instances`
- Need two alarm to scale up/down the instance
- `Step Scaling` is being used here

### Migration, Queue to Fifo Queue

- Need
  - Message de-duplication Id (As token while sending the message, ensure no message duplication happen)
  - Message group ID (As tag, to make message group, ensure order of message been proceed)

### Performance

- Use long poling
  - Increase the time by `ReceiveMessageWaitTimeSeconds`
- Use batch processing
- With AWS Lambda
  - For standard queue use the long poling
  - For FIFO queue use the group id and en-sure, all the message of the group is being proceed
