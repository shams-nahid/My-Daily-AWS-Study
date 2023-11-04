### Overview

- Support `web-socket` protocol
- Handle
  - `API` versioning
  - Multiple Environment
  - Security (Authentication, Authorization)
- Using `API` keys, handle request throttling
- `Swagger`/`Open API` to import `Definition`
- Transform and validate the `Request` and `Response`
- Generate `SDK` and `API Specification`
- Cache `API` response
- Can be orchestrate multiple web app and micro services
- Can set different usage plan for different users for different level of access
- Can set different quota and throttling to different level of access
- To pass a stage variable, use `$stagevariables.<variableName>` concept

### Integration

- Lambda
  - Invoke `Lambda` function
  - Expose `REST API` backed by `Lambda`
- HTTP Endpoint
- AWS Service
  - Expose any `AWS Service` as `API Gateway`

### Endpoint Types

- 3 types of `API Gateway Endpoints`
  - Edge Optimized (By default use global network using cloudfront)
    - This is `default` behavior
    - `API` is only one region
    - But to improve latency, request is routed through `Cloudfront Edge Locations`
  - Regional
    - `API` is in the one region
  - Private
    - Use inside the `VPC` as `VPC Endpoint`
    - Resource policy is used to define access

**Advantage of Edge Optimized is**
- We can get `Edge Optimized` behavior
- In this case, we have more control over
  - Caching
  - Strategies
  - Distribution

### Premium Users

- Api keys can be used to allow special previllages to the resources using API keys
- In this case, the API keys should be associated with the usage plan by invoking `CreateUsagePlan`

### Security

- `IAM`
  - When users/roles is within `AWS Account`
  - Handle `Authentication` and `Authorization`
  - Leverage Sig v4
    - It's the `IAM` credentials in the `HTTP Header`
- `Custom Authorizer` or `Lambda Authorizer`
  - When users are from 3rd party
  - `Lambda Authorized` can be cached
- `CUP` or `Cognito User Pool`
  - When user pools are manages by Facebook, Google login
  - No need to write custom code
  - Only provide `Authentication`
  - `Authorization` must be provided from the backend code
- Access of developer and users can be separated using `IAM Permission`
  - Developer can manage and deploy API
  - User can call API
- SSL/TLS though `AWS Certificate Manager` is free for `API Gateway`

> `Invoke_Async` is deprecated invocation type. Only the `invoke` is being used.
