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
