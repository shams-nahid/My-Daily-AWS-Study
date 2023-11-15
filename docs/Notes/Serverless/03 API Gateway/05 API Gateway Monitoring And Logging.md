### Monitoring

---

We can integrate the cloudwatch logs at the stage levels and ApI basis. With X-Ray, the full picture of the api-gateway and lambda can be displayed

Cloudwatch Metrics:

- `CacheHitCount` the more the better caching mechanism, (Number of request served from the cache)
- `CacheMissCount` the less the better caching mechanism (Number of requests served from the backend)
- `Count` Total number of API request at a certain time frame
- `IntegrationLatency` Time frame of sending request to lambda and getting response from lambda
- `Latency` Time to receive request in API Gateway and sending response from API Gateway

### Logging

---

Two types of logging

- API Logging
  - Typical logs, log streams, log groups
- Access Logging
  - Can monitor lambda authorizer
  - Who accessed
  - How accessed

### Latency

Two types of latency

- Latency: Time between receive a request from client and response back
- Integration Latency: Time between api-gateway to lambda request and response from lambda to api-gateway

