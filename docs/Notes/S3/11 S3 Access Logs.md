## Access Logs

- Also known as `Server Access Logs`
- Logs may be required for audit purposes
- `Access Logs` log any authorized/deny request
- Logs can be analyzed using `Athena`
- Do not store logs in the same bucket (Think::: It will make the bucket grow exponentially)
- Includes
  - Requester 
  - Bucket name
  - Request time
  - Request action
  - Referrer
  - Turnaround time
  - Error code information
- Only the owner can have the object level access logs
