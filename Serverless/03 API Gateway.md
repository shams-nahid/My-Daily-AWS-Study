## API Gateway

- Support `web-socket` protocol
- Handle
  - `API` versioning
  - Multiple Environment
  - Security (Authentication, Authorization)
- Using `API` keys, handle request throattling
- `Swagger`/`Open API` to import `Definition`
- Transform and validate the `Request` and `Response`
- Generate `SDK` and `API Specification`
- Cache `API` response

### Integration

- Lambda
  - Invoke `Lambda` function
  - Expose `REST API` backed by `Lambda`
- HTTP Endpoint
- AWS Service
  - Expose any `AWS Service` as `API Gateway`

### Endpoint Types

- 3 types of `API Gateway Endpoints`
  - Edge Optimized
    - This is `default` behaviour
    - `API` is only one region
    - But to improve latency, request is routed through `Cloudfront Edge Locations`
  - Regional
    - `API` is in the one region
    - With combination of `Cloudfront`
      - We can get `Edge Optimized` behaviour
      - In this case, we have more control over
        - Caching
        - Strategies
        - Distribution
  - Private
    - Use inside the `VPC` as `VPC Endpoint`
    - Resource policy is used to define access

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
