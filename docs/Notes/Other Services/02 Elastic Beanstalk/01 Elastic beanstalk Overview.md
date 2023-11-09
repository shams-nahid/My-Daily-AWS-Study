## Elastic beanstalk

- Allow deploy app from docker container
- Handles
  - Deployment
  - Capacity provisioning
  - Load balancing
  - Auto scaling
  - Health monitoring
- We can take full control of the underlying resources
- An automation example with `Beanstalk`
  - Create `LAMP` stack
  - Download latest PHP from `S3`
  - Set up `ELB`
- Store the `Application Files` to `S3`
- Store the `Server Logs Files` to `S3` or `Cloudwatch`, optionally
- Can use the worker process environment for the long running tasks and also fo decoupling the application
- Environment files
  - `Dockerrun.aws.json` used to to configure multi-container docker environments
  - `env.yaml` used to configure environment name, solution stack and environment links
  - `cron.yaml` used to define scheduled worker tasks
  - `Instance Profile` Used to ensure the interaction with other aws services
  - `Environment Manifest` Used to define environment, stack name, point to launch config etc.
- If beanstalk does not support the environment by default, can be make use of custom environment named packer
- For dockerized app, beanstalk has more preferences over ecs when there are requirements of managing
  - 

**Platform Update**

Elastic beanstalk regularly update their platform time to time with new versions. Once our application is running in a legacy version and want to update the underlying version, there are two methods,

1. `Update Environments Platform Versions`: Recommended approach to go to latest version.
2. `Perform a Blue/Green Deployment`: Recommended approach to go to a specific version.

**Best Practices**

- To preserve database on environment deletion
  - In production, create database separately
  - In dev/test, use database retention as `Create Snapshot`
