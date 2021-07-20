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

### Elastic Beanstalk Integration

---

X-Ray is already installed in the elastic beanstalk. To enable the x-ray, update/create a config under the beanstalk extentions, `.ebextentions/x-ray-daemon.config`. This can also be done using by management console.

To get trace data, code must instrumented withe x-ray sdk

### ECS Integration

---

ECS can integrate x-ray by `x-ray daemon` and `side-car` patthern

1. **As Daemon Pattern**: To use x-ray in ecs, we need to use the x-ray daemon container for each of the ecs instances. In this case, the x-ray daemon acts as the x-ray agents.
2. **As Side Car Pattern**: In this case, each of the container in the ecs will have x-ray daemon inside it.

When we need to use x-ray in the fargate, we have to use the `side-car` pattern. Because, we do not have control over the ec2 instances in fargate.
