### Integration Types

---

There are 4 types of integration type, can be used t integrate other services with API Gateway.

1. `HTTP` or `HTTP Custom Integration` A custom http endpoint, need to set up mapping
2. `HTTP_PROXY` Use for http endpoint, no needs for any mapping
3. `AWS` (For Serverless/Lambda)
4. `AWS_PROXY` (For Serverless/Lambda)

> With `proxy` integration, there is no need for any mapping and it is easier, it just redirect all the requests, parameters and payloads to the defined endpoint.
