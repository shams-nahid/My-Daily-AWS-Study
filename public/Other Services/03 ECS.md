## ECS

- `Elastic Container Service`
- Run docker containers in `EC2` machines
- Components
  - `ECS Core` provision `EC2` instance to run `docker` container
  - `Fargate` run `ECS` task to `AWS Provide Compute`, more serverless than `ECS Core`
  - `EKS` is `Elastic Kubernetes Service` by `AWS`
  - `ECR` is `Elastic Container Registry` by `AWS`
- **`IAM Security` and `Roles` are in `ECS Task` level**
- `ECS` and `ALB`
  - Enable dynamic port mapping
- `ECS` setup
  - For regular `EC2 Instance` install the `ECS Agent` and edit `config` file
  - For `ECS ready Linux AMI`, no need to install `ECS Agent`, only edit the `config` file
  - Editing the `config` file
    - Location `/etc/ecs/ecs.config`
    - There are `35 Configuration` to edit
      - `ECS CLUSTER`
      - `ECS_ENGINE_AUTH_DATA`
      - `ECS_AVAILABLE_LOGGING_DRIVER`
      - `ECS_ENABLE_TASK_IAM_ROLE`

### ECS Components

- `Task Definition`: Allow port mapping. `Port Mapping` allows the container to send and receive traffic through the hsot machine
- `Service Schedular`: Allow to run tasks manually
- `Container Instance`: On which the container runs on, typically the `ec2 instance` or `ecs ready ec2 instance`
- `Container Agent`: Allows the containers to connect with the cluster

### Task Placement Strategy

Determine how the tasks will be placed between instances. ECS supports 3 types of `Task Placement Strategies`

1. `binpack`: Placed task by using least amount of CPU or memory. This minimize the number of instances are being used
2. `random`: Place tasks randomly
3. `spread`: Placed tasks based on specified value like instance id, host, az etc. For example, if the field is `instanceId` the task will be distributed evenly in different instances. Another example, if the `field` is `az`, the tasks will be evenly distributed among availability zones.
