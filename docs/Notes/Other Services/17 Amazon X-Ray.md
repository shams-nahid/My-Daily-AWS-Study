## Amazon X-Ray

- Allow developer debugging the production and distributed application and micro services
- For cost effective performance, the sampling rate should be low, so
  - Get significant number of request statistically
  - Optimum traces

### Properties

---

**Segments**: Used to break down the data in sub segments.

**Sub Segments**: Provides, timings, other aws service/resource calls in downstream forms.

**Inferred Segment**: Allow display timings and calls to all services, even the services who does not support x-ray or tracing

`annotations` and `metadata` do not trace the calls of other aws services and resources. Instead these `annotations` and `metadata` are included in the `segments` and `sub-segments`.

`sub-segments` fields,

- `namespace`: Can be `aws` or `remote`
  - `aws` for AWS SDK calls
  - `remote` for other downstream calls
- `http`: Outgoing HTTP call
- `annotations`: Key-value for index search
- `metadata`: Additional data for debugging

`annotations` can be used to filter the traced data from console. Also can trace by groups.

`metadata` can include some additional key value data, that can be helpful during the debugging and tracing.

- `Segment Document`
  - Add custom attributes as `annotation` to use as filter expression
  - Add custom attributes as `metadata` to store custom data during trace
  - Add custom attributes as `segment field` to use ::::TODO
- `Sampling Rule` to create a representative sampling of tracing
  - Wit default sampling `one request per sec and 5% additional requests per host`

**Segment Properties**

Mandatory:

- Name
- id
- Trace_id
- Start_time
- End_time
- In_progress
  Optional:

- Service
- User
- Origin
- Parent_id
- http
- aws
- error, throttle, cause
- annotations
- metadata
- subsegments

### X Ray Daemon

---

X-Ray sdk does not send data directly to X-Ray. Instead it sends data for multiple request in the daemon and then sends these to the X-Ray service.

X-Ray Daemon listens to traffic to UDP 2000 port,

### Service Map

---

- Create dependency trees between services
- Detect latency between services

### Elastic Beanstalk Integration

---

X-Ray is already installed in the elastic beanstalk. To enable the x-ray, update/create a config under the beanstalk extensions, `.ebextensions/x-ray-daemon.config`. This can also be done using by management console.
max-age
To get trace data, code must instrumented withe x-ray sdk

### ECS Integration

---

ECS can integrate x-ray by `x-ray daemon` and `side-car` pattern

1. **As Daemon Pattern**: To use x-ray in ecs, we need to use the x-ray daemon container for each of the ecs instances. In this case, the x-ray daemon acts as the x-ray agents.
2. **As Side Car Pattern**: In this case, each of the container in the ecs will have x-ray daemon inside it.

When we need to use x-ray in the fargate, we have to use the `side-car` pattern. Because, we do not have control over the ec2 instances in fargate.

To set up

- Run x-ray daemon according to the suited pattern
- Make port mapping to allows UDP 2000 for x-ray daemon

### Lambda Integration

---

To implement the X-ray tracing, we need to implement the followings,

- Enable ACtive Tracing from the lambda function configuration. This will run the x-ray daemon for the function
- The attached policy should have write access to the x-ray daemon
- Following environment policies will require to communicate with x-ray
  - `_X_AMZN_TRACE_ID`: tracing header
  - `AWS_XRAY_DAEMON_ADDRESS`: IP_ADDRESS:PORT
- Others are,
  - `AWS_XRAY_CONTEXT_MISSING`: default: LOG_ERROR
  - `AWS_XRAY_TRACING_NAME`: set service name
  - `AUTO_INSTRUMENT`: applicable for django framework

### EC2 Integration

---

To use x-ray we need the x-ray daemon in the ec2 instance. We can install this manually or update the user script to install the daemon.

Also we have to make sure the sg allow UDP of port 2000 for the x-ray daemon

### API

---

After X-Ray collects the data, it use to combine abd summarize the trace data.

- `GetTraceSummaries`: Can get the trace summaries, ids and annotations. Use traceId or event time to get the summaries
- `BatchGetTraces`: Get the full traces
- `GetGroup`: A group resources
- `GetServiceGraph`: Return info of which service handle the incoming request

To make a custom debug tool,

- First get all trace ids by `GetTraceSummaries`
- From each id, get full traces by `BatchGetTraces`
