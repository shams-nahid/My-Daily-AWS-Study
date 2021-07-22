## Lambda

- Virtual functions
- No needs to manage servers
- Run on-demand
- Automatic scaling
- Ram uses can be up to 3GB
- Increasing ram, improves the performance of `CPU` and `Network`
- Almost all programming language are supported by lambda
- Using `Custom Runtime API` it can support other languages
- _Docker is not supported_. Docker can run in the followings
  - ECS
  - Fargate
- `Cloudwatch Event EventBridge` can be used to run `CRON job` function that is in the `Lambda`
- `Cloudwatch` can be used to debug the code

### Lambda Limits

- Execution
  - Memory allocation: 128MB to 3008MB (64MB increments)
  - Max execution time: 15 minutes
  - Env variable size: 4 KB
  - Disk Capacity (/temp): 512MB
  - Concurrent execution: 1000 (can be increased)
- Deployment
  - Compressed deployment size: 50MB
  - Uncompressed deployment size: 250MB

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
  - Bot Mitigation at `EDGE`
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
**Layers**: A zip archive, contains runtime or libray.
**Aliases**: Pointer to specific lambda version