## Cloudwatch

### Cloudwatch Metrics

- `Cloudwatch` provide metrics for every `AWS Service`
- `Metrics` is a variable to monitor, such as
  - CPU Utilization
  - Networking data
- `Metric` belong to `Namespace`
  - `Namespace` are similar to `Group`
- `Metric` dimensions are `Attribute`, like
  - Instance ID
  - Environment Name
- Each `Metric` can have up to `10 Dimensions`
- `Metrics` have `Timestamps`
- Using `metric`, the `Cloudwatch Dashboard` is generated

### Cloudwatch Detailed Monitoring

- By default, `EC2` have metrics each `5 minutes`
- With `Detailed Monitoring`
  - Metric generate every `1 Minute`
  - Good for `ASG`
- Free Tier allows `10 Detail Monitoring`
- For `EC2 Memory Usage`, there is no default metric. Need to use `Custom Metric`

### Cloudwatch Custom Metric

- Can send custom metrics to `Cloudwatch`
- Ability to send Dimension
  - instance.id
  - environment.name
- Metric Resolution
  - Standard `1 Minute`
  - High Resolution, up to `1 Sec`
- To send custom metric use `PutMetricData`

### Cloudwatch Dashboard

- Dashboard are `Global`
- `Dashboard Graph` includes different `Region`
- Can setup `Auto Refresh`
- Pricing
  - 3 Dashboard (Up to 50 Metrics) free
  - After free tier, `3 dollar/dashboard/per month`

### Cloudwatch Logs

- Logs can be send to `Cloudwatch` through `SDK`
- `Cloudwatch` collect log from
  - Elastic Beanstalk
  - ECS
  - AWS Lambda
  - VPC Flow Logs
  - API Gateway
  - Cloudtrail
  - Cloudwatch Log Agent (From `EC2 Instance`)
  - Route 53 (DNS Query)
- Logs go to
  - `S3` to store or archive
  - Stream to `Elastic Search` for analytics
- Log Storage Architecture
  - Groups: Log is grouped under name
  - Each group has streams of logs
- Can define expiration period (After the expiration period, the logs will be deleted)
- Encryption
  - `KMS` can be used to encrypt the logs
  - Encryption is done in log group level
  - Using encryption key, both new (create-log-group) and existing (associate) log group can be encrypted
  - Encryption operation can be done only by CLI or SDK
- To send logs, make sure the `Permission to write logs are set`
- To follow/tail logs, we can use `AWS CLI`
- Possible to filter by expression
  - Helpful to find logs or specific IP
  - Can use to trigger alarm
- `Cloudwatch Logs Insights`
  - Can be used to query logs
  - To use, need to install the `Unified Cloudwatch Logs Event`

### Cloudwatch Logs Agent Vs Unified Agent

`Logs Agent`

- Old Version

`Unified Agent`

- Newer version
- Get Additional system level metrics
- Can use `SSM Parameter Store` to centralized configuration

### Cloudwatch Alarms

- Alarms are used to trigger notification for any metric
- Alarms can go to
  - ASG
  - EC2 Actions
  - SNS Notifications
- Alarm can raise
  - Sampling value
  - Percentage value
  - Max or Min value
- Alarm States
  - `OK` (When everything is alright)
  - `INSUFFICIENT_DATA` (When not enough data to measure it its `OK` or `ALARM` state)
  - `ALARM` (When metrics reached the `Threshold`)
- Period
  - Time length to evaluate the metric
  - In case of `High Resolution Metric`, period can be `10 sec`

### Creating Cloudwatch Event

While creating a cloudwatch event, we can set

1. `Period`: Define evaluation time in seconds.
2. `Evaluation Period`: Known as `Data Point`. Number of recent `Period` to consider to generate a alarm state
3. `DataPoints To Alarm`: Determine to go to `ALARM` state. We can define how many period can be reached within a evaluation period to go to `ALARM`

### Cloudwatch Event

- Can schedule `CRON Jobs`
- `Event Pattern`
  - Rules on react a service doing something
  - Example: `Code Pipeline` state change
- Can trigger
  - Lambda Function
  - SQS
  - SNS
  - Kinesis
- `Cloudwatch Event` create a sample document to give information about the change
- Use case in `S3` and `Code Pipeline`
  - `Code` can be uploaded to `S3`
  - `Cloudwatch Event` trigger the `Code Pipeline`
  - `Code` will be deployed to the `Elastic Beanstalk`
- Can be used to change the number of `Fargate Cluster` should run according to the events
- Allow monitor jobs in the batch jobs

### Cloudwatch Agent

---

- Collect system info and log files
- Can track memory, swap and disk space
