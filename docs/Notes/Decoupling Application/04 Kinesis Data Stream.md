## Kinesis Data Stream

---

- Managed `Apache Kafka`
- Used for `Real Time Big Data`
- Cover streaming processing framework like
  - Spark
  - NiFi
- Data is replication across 3 AZ
- 3 tools included
  - Kinesis Stream (Low latency streaming at scale)
  - Kinesis Analytics (Real time analytics using SQL)
  - Kinesis Firehose (Load data to `S3`, `RedShift`, `Elastic Search`)
- Using a `Kinesis Data Stream Consumer` ensure a dedicated connection for each shard. Helps to reduce the latency.

### Security

---

- Control Access by `IAM Policy`
- Encryption
  - In flight by `HTTPS`
    - Install SSL certificate kinesis
    - Send data through SSL
  - At rest by `KMS`
    - Encryption is enabled at rest
    - Ensure streams are transferring data from producers
  - Client side encryption
- `VPC Endpoints` are available to access `Kinesis` through `AWS Private Network`

### Stream Shards

---

- One stream is combination of multiple shard
- Each shard throughput
  - Read 2MB/s
  - Write 1MB/s or 1000 message/s
- Batching is available to reduce the cost and increase throughput
- Number of shards can be merged or re-shards over time
- Records are ordered per shard
- Multiple shard can not ensure the ordering
- Merging shards to process less data
- Splitting shards to process more data

### Kinesis API (Put Records)

---

- Same key always go to same partition
- Partition keys should be highly distributed, otherwise it cause `Hot Partition Problem`
  - If partition key is userID, it is highly distributed
  - If partition key is country code and 90% users are from the same country then 90% data will go to the same shard
- `ProvisionThroughputExceed` happens
  - when we go over limit
  - `Hot Sharding` Happen
- Solution of `ProvisionThroughputExceed` be
  - Retry
  - Increase shard
  - Ensure partition key is a good one
- As consumer we can use
  - CLI
  - SDK
  - `Kinesis Client Library` i.e. `KCL` available for almost all major languages

### 01 Kinesis Stream

---

- Streams are divided into shards
- Data retention period
  - Default `1 Day`
  - Max `7 Days`
- Data can be proceed multiple time (In `SQS` we can process message only one time)
- Multiple consumer can consume the data
- Once data is inserted in the shards it can not be deleted

### 02 Kinesis Firehose

---

- Managed Service
- No Administration
- Auto Scaling
- Serverless
- **Load data to**
  - S3
  - Elastic Search
  - Redshift
  - Splunk
- Near real time
  - `60 Sec`
  - Or `Minimum 32Mb`
- Can get data from
  - Kinesis Stream
  - KCL (Kinesis Client Library)

### 03 Kinesis Data Analytics

---

- Perform real time analytics using `SQL`
- Features
  - Auto Scaling
  - Managed
  - Real time

### Firehose Vs Streams

---

Streams

- Custom code for producer and consumer
- Real time
- Must manage scaling (Re shards and merging)
- Data store for 1-7 days
  - Multi consumers
  - Replay capability

Firehose

- Fully managed, serverless
- Near real time
- Automated scaling
- No data storage

### Re-Sharding

---

Enables increase or decrease of the number of shards in the stream.

We can increase instance size and shards number to handle more data.

### Kinesis Client Library (KCL)

---

In instances, used to process data from data stream. There should be same number of kcl as well as the ec2 instances as the number of open shards.

To process data, if we make use of the lambda functions, to get optimal performance, need to have same number of concurrent lambda function same as the shard number.

### Enhanced Fan Out

Enabled shards get data 2MB/s per shard with 70s propagation delay to all consumers.
