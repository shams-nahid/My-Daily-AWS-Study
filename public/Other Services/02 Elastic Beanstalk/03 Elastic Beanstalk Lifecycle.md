### Elastic Beanstalk Lifecycle

---

Each time we deploy new code to elastic beanstalk, a new version is created. There is a default version quota and we can not deploy any more when we reach the limit. To configure, we can make use of the lifecycle policy.

By lifecycle policy,

- Define how many versions will be kept
- Define how many older days, we will kept the versions of the application
- Where do we kept the legacy versions (like s3) after being expired by number of versions or days
