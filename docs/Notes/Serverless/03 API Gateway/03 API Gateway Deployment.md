### Deployment

---

To make differenent types of deployment for the API gateway, we can make use of stage variable.

For example we need dev, prod, rc, releases. We first define the stage variables and attach them to fthe HTTP endpoints.

To make the API's live, we have to deploy them. Deployment is going under stages. we can put name and configurations on these stages. After each deployments, the previous deployment history is being persisted and we can role back if something goes wrong with latest deployment.

We can define the stages by stage varibales. Stage variables can be used for different types of configuations like, lambda alias, http endpoints, parameter mapping templates etc.

> In lambda variable, we can access the stage variables using the context parameters.

### Integration Between Stage Variables and Lambda Alias

---

In api gateway we can create stage variable with the same name of the lambda alias, we can map them.

### Staging

---

For each stage, we can define separate settings for caching, logging, x-ray-tracing etc.

### Canary Deployment

---

This is a blue/green deployment of `API Gateway + Lambda`. With canary deployment, initially we send small amount of traffic to the new function and do separate monitoring and logging for that function. If everything goes fine, we then fully move to the new function,
