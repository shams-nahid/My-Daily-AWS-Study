### Lambda Integrations

---

Lambda support 3 types invocation:

1. `RequestResponse (Default Type)`: Invoke the function synchronously. Keeps the connection open until the function return response or times out. The API response contains response, data and status
2. `Event`: Invoke the function synchronously. Returns a response code not the response data.
3. `DryRun`: Validate parameter and verify roles and permissions

We can integrate lambda with API gateway by proxy and non-proxy,

**Proxy**: Redirect all the params, payloads, headers etc directly to the Lambda from api gateway.

**non-proxy**: We need to map all the params, payloads etc.

