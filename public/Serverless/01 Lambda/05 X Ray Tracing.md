### X Ray Tracing

---

To implement the X-ray tracing, we need to implement the followings,

- Enable ACtive Tracing from the lambda function configuration. This will run the x-ray daemon for the function
- The attached policy should have write access to the x-ray daemon
- Fowllowing environment policies will require to communicate with x-ray
  - `_X_AMZN_TRACE_ID`: tracing header
  - `AWS_XRAY_CONTEXT_MISSING`: default: LOG_ERROR
  - `AWS_XRAY_DAEMON_ADDRESS`: IP_ADDRESS:PORT
