### Response Code

---

For `4xx`, client errors

- `400` Bad Request
- `403` Access Denied and WAF filtered
- `429` Quota Exceeded, throttle

For `5xx`, server errors

- `502`
  - Gateway exception
  - Heavy load
  - Out of order invocations
  - Incompatible output from the lambda
- `503`
  - Service unavailable
- `504`
  - Integration Failure
  - Integration Timeout (Request time after 29 seconds)
