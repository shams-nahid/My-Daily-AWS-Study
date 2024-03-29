### Codedeploy

CodeDeploy can be used to deploy code to EC2 instance/on-premise server/AWS Lambda.

### Supports

- In Place
  - EC2 Instance
  - On Premise Servers
- Blue/Green
  - Lambda
  - ECS
- Rolling Deployments
  - 

### Usage

- EC2 Instances
- On premise servers
- Serverless Lambda functions
- ECS Services

### Code Origins

- S3 Buckets
- Github Repositories
- Bitbucket Repositories
- CodeCommit

**Setup**

- Need the code-deploy agent in the server
- A config file must be included in the root of the source code, like `appspec.yml`

**Process**

- On commit, codeDeploy will pull the code
- Deploy according to the config files
- CodeDeploy agent will report the success/failure

> CodeDeploy only do the deployment, do not provision resource

> Blue/green deployments are only available for the EC2 Instances not the on-premise servers

> When need to deploy in multiple environments, need to create multiple codeDeploy group

**AppSpec**

With `appspec.yml`, we define how we get the codebase and deploy it.

In the `File Section` we define the source like S3 or github.

Then, have a sequence of following hooks and we can define our actions in these hook,

1. `Application Stop`: Stopping the existing version of app
2. `DownloadBundle`: Get/download the new codebase
3. `BeforeInstall`: Task to do before installing the new app
4. `AfterInstall`: Task to do after installing the app
5. `ApplicationStart`: Task to start the new app
6. `ValidateService`: A health check to determine if the app is running properly

All hooks are,

`ApplicationStop -> DownloadBundle -> BeforeInstall -> Install -> AfterInstall -> ApplicationStart -> ValidateService -> BeforeAllowTraffic -> AllowTraffic -> AfterAllowTraffic`

Mandatory properties for the `AppSpec.yml` file are,

- Task Definition
- Container Name
- Container Port

**Types Of Deployment**

- `In Place Deployment`: Also known as `Half at a time`. First half of the instance get deployed and then the other half of the application deployed.
- `One At a Time`: Slowest but lowest availability impact.
- `Blue Green Deployment`: Initially it keeps the previous instances and application. A new set of instance will be created and load balancer send traffic on both of these. If everything goes fine, all the traffic will go to the new instances.
  - There must be a `ELB` and `ASG`
  - CodeDeploy create a new ASG
  - When new ASG is healthy and serving without error, the old ASG is deleted and trafics go to the new ASG

> Blue green deployment is not supported by on premise servers

**Get Secure Parameters In CodeDeploy from Parameter Store**

- Create IAM role to access the Parameter Store
- Use `ssm get-parameters` option

**Rollback**

- When rollback happen, it does not go back to the previous version, instead redeploy the last successfully delployed version
- Missing Files: During rollback, if the existing files are removed or no permissions,
  - Put these files in the instances
  - Create a new application instance

**Troubleshooting**

- `InvalidSignatureException` when the time of AWS and the time of the EC2 instance is not synced
- For deployment issues, logs are available in the server of path `/opt/codedeploy-agent`
