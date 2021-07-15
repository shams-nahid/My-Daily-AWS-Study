## Lambda

- Virtual functions
- No needs to manage servers
- Run on-demand
- Automatic scaling
- Ram uses can be up to 3MB
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
