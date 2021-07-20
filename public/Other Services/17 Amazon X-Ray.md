## Amazon X-Ray

- Allow developer debugging the production and distributed application and micro services
- For cost effective performance, the sampling rate should be low, so
  - Get significant number of request statistically
  - Optimum traces

### Properties

---

- `Segment Document`
  - Add custom attributes as `annotation` to use as filter expression
  - Add custom attributes as `metadata` to store custom data during trace
  - Add custom attributes as `segmet field` to use ::::TODO
- `Sampling Rule` to create a representatve sampleing of tracing
