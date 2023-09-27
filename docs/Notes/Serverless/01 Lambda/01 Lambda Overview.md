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
  - Memory allocation: 128MB to 10GB (1MB increments)
  - Increasing RAM also increase the CPU and Network
  - Max execution time: 15 minutes (default is 3 seconds)
  - Env variable size: 4 KB
  - Disk Capacity (/tmp): 10GB
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
  - Streams [Kinesis and DynamoDB]
  - Queue [SQS]
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
  - For FIFO queue, the processing will be in-order
  - Occasionally, the event-mapping might recieve same item from queue twice
  - If a batch returned due to error, the messages will return as individual message and also will be proceed in different group
  - Lambda delete the items after being proceed
  - DLQ can be configured if the event is not processed

### Lambda@Edge

- Deployed globally
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

**CloudFront Functions vs Labmda@Edge**

- Provided by CloudFront
- CloudFront Functions are in JS while the Lambda@Edge can be Node.js or Python
- CloudFront only manipulate viewer request and response while the Lambda@Edge can manipulate both viewer and origin request/response
- CloudFront can scale for millions of request while Lambda@Edge scale for thousands of request
- Lambda@Edge has longer execution time than CloudFront function

### Lambda At VPC

- By default Lambda functions are deployed in a AWS owned VPC
- It can access external services but restricted to access the resources inside a VPC created by the user in private subnet
- In order to access the resource in the VPC, Deploy the lambda function in the subnet
  - Define VPC ID, subnet and Security group in the Lambda
  - Lambda will create an ENI
  - Lambda will need `AWSLambdaVPCAccessExecutionRole`
  - In the VPC, the resources (Like RDS, ElasticCache, ELB etc) security group should allow Lambda security group
- By default, the Lambda deployed in a subnet (even though the subnet is public), does not have the internet access
- To manage access the internet from a Lambda, that is deployed in the subnet, need to use the NAT Gateway or NAT Instance (this will talk with the Internet Gatewayh)
- However a Lambda, that is deployed in the subnet, can access other AWS services using the VPC endpoint.
- One exception is CloudWatch logs, that will work without any NAT instace / NAT Gateway / VPC Endpoint.

### Execution Context

- A temporary runtime, can be used to
  - Establish database connection
  - Set up HTTP Clients / SDK clients
- Exist after a function is done execution so can be used by concurrent other lambda function
- The `/tmp` is created to read/write some files temporary
- Code thoese are outside the handler function are available in the execution context

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

### Event vs Context Object

**Event**

- Contains data, will be proceed by the event
- Contains information of the invoking service
- Convert event data to object (for python dict, for JS json)

**Context**

- Properties of the method, like runtimes, memory limit, function name etc
- Passed by lambda during runtime

### Destinations

**Synchronous Invocation**

- Destination is client

**Asynchronous Invocation**

- DLQ for only error or failed processing
- New Destination [Recommanded] for both success or failed processing
  - SQS
  - SNS
  - Lambda
  - EventBridge Bus

**Event Source Mapping**

- DLQ for failed process
- New Destination [Recommanded] for both success or failed processing
  - SQS
  - SNS

### Tracing with X-Ray

- Enabling by "Active Tracing"
- Environment variables
  - `X_AMZN_TRACE_ID` contains tracing header
  - `AWS_XRAY_CONTEXT_MISSING` log error by default (?)
  - `AWS_XRAY_DAEMON_ADDRESS` contains x-ray daemon ip address and port

### Lambda Layers

- A zip archive, contains runtime or library
- Using layer we can define a custom runtime for a programming language that is not available in AWS Lambda by default
- Big dependencies can be placed in the layer, so everytime we chage the function and upload the zip file, we do not have to upload all these dependencies

### Gotcha

**Environment Variables**: Regular application environment variables
**Stage Variables**: Related to API Gateway, can be `dev`, `prod`, `v1`, `v2` etc. Also these stage variables acn be mapped with the alias of lambda function
**Aliases**: Pointer to specific lambda version

**Misc**

- To do encryption in `/tmp` need to use KMS, lambda does not handle by default
