## Lambda

- Virtual functions
- No needs to manage servers
- Run on-demand
- Automatic scaling
- Ram uses can be up to 10GB
- Increasing ram, improves the performance of `CPU` and `Network`
- Almost all programming language are supported by lambda
- Using `Custom Runtime API` it can support other languages
- _Docker is not supported_. Docker can run in the followings
  - ECS
  - Fargate
- `Cloudwatch Event EventBridge` can be used to run `CRON job` function that is in the `Lambda`
- `Cloudwatch` can be used to debug the code
- Process events using
  - Asynchronus
  - Synchronus
  - Event source mapping (Synchronusly)

### Runtime

---

Lambda has native support of the following runtimes,

- Node.js
- Python
- Ruby
- Java
- Go
- .NET

We can provide our own custom runtime by

- Include runtime in function deployment package named `bootstrap`
- These runtime should be resided in new lambda layer
- For Lambda Container Image, we must include the Lambda Runtime API in the container image
- Unless `Lambda Runtime API` is implemented, the docker container should run in ECS or Fargate

### Lambda Limits

- Execution
  - Memory allocation: 128MB to 10GB (64MB increments)
  - Increasing RAM also increase the CPU and Network
  - Max execution time: 15 minutes
  - Env variable size: 4 KB
  - Disk Capacity (/temp): 512MB
  - Concurrent execution: 1000 (can be increased)
    - When we reserve we have to consider 100 for there functions, so usable is 900
- Deployment
  - Compressed deployment size: 50MB
  - Uncompressed deployment size: 250MB

### Synchronus Invocation

- When the lambda function directly invoked and return the results right away
- These do the synchronus invocation
  - SDK
  - CLI
  - API Gateway
  - ALB
  - S3 Batch (?)
  - Cognito
  - Step Function
- In these cases, if a error is occoured, should be handled in the client side

## ALB to Lambda

- ALB turns the HTTP request to JSON and pass to the lambda and also convert the JSON results of the lambda to HTTP response.
- **Enabling Multi Header Value** will turn multiple query paramers or query string into array
- In this case (Using lambda with ALB), there should be a target group to point the lambda function 
- The ALB security group should have the permission to execute (invoke) the lambda function
- In this case, the ALB act as a trigger of the lambda function

### Asynchronus invocation

- Happnes through event queue [Origin can be S3, SNS, Cloudwatch Event]
- Retry lambda on errors (3 times)
  - 1st time invoked and encounter errors
  - 2nd one just after 1 minute
  - 3rd one after 2 minutes wait
- DLQ (Dead letter queue can be used to put the error events)
- Services uses the asynchronus invocation
  - S3 event notification
  - SNS
  - Cloudwatch events / event brdige
  - CodeCommit/CodePipeline
  - Simple Email Service

### Event Source Mapping

**Important**

- Event source mapping poll data and return results
- As source, it can use
  - Streams
  - Queue
- Streams
  - For low traffic, use batch before processing
  - For high traffic, multiple batches can be processed in parallel
  - If there's an error, entire process will be reprocessed or expired eventually
  - To ensure in-order processing, processing of the affected shard is paused untill the error is resolved
  - Can be configured as,
    - Discard old events
    - Restrict number of retries
    - Split batch on error (Resolve lambda timeout issue)
  - Discarded events can go to destination
- Queue
  - Use long polling
  - Batch size can be specified (1 - 10)
  - Recommandation timeout for the queue is 6x compare to the lambda function timeout
  - DLQ should be set up in the SQS, not in the lambda (DLQ for lambda is only for async invocation and this is a synchronus operation ???)

### Lambda@Edge

- Required when
  - Deployed a `CDN` using `Cloudfront`
  - Want to run `Lambda Function` alongside
- Make 4 types Requests
  - Between `User` and `Cloudfront`
    - Viewer Request
    - Viewer Response
  - Between `Cloudfront` and `Origin`
    - Origin Request
    - Origin Response
- Use-cases
  - Web additional security
  - Dynamic app at the `Edge`
  - `SEO`
  - Intelligent routing across `Origin` and `Data Center`
  - Bot Mitigation at `EDGE` [Detect bot approach]
  - A/B Testing
  - User `Authentication` and `Authorization`
  - User `Prioritization`
  - User tracking and analytics

### Error Types During Deployment

---

- `InvalidParameterValueException`: Invalid request parameters. can be permission error.
- `CodeStorageExceededException`: Exceed the total code size (compressed 50MB, un-compressed 250MB)
- `ResourceConflictException`: Already a function exists
- `ServiceException`: Internal server error

### Limits

---

**Concurrency**:

- Calculated by, concurrency = (`number of invocation per second` \* `number of seconds per invocation took`). BY default lambda has `500` to `3000` concurrency vary from region. With burst capacity, we can exceed it another 500 concurrency. For more concurrency, need to make a request to increase the concurrency to aws.
- Concurrency limit is calculated by whole account. If the account has limit of 1000, aws will reserve 100 and other 900 can be used. We can distribute all these 900

### Gotcha

**Environment Variables**: Regular application environment variables
**Stage Variables**: Related to API Gateway, can be `dev`, `prod`, `v1`, `v2` etc. Also these stage variables acn be mapped with the alias of lambda function
**Layers**: A zip archive, contains runtime or library.
**Aliases**: Pointer to specific lambda version
