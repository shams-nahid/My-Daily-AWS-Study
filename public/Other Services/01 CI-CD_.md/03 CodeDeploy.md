### Codedeploy

CodeDeploy can be used to deploy code to EC2 instance of on-premise server.

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

**AppSpec**

With `appspec.yml`, we define how we get the codebase and deploy it.

In the `File Section` we define the source like s3 or github.

Then, have a sequence of following hooks and we can define our actions in these hook,

1. `Application Stop`: Stopping the existing version of app
2. `DownloadBundle`: Get/download the new codebase
3. `BeforeInstall`: Task to do before installing the new app
4. `AfterInstall`: Task to do after installing the app
5. `ApplicationStart`: Task to start the new app
6. `ValidateService`: A health check to determine if the app is running properly

All hooks are,

`ApplicationStop -> DownloadBundle -> BeforeInstall -> Install -> AfterInstall -> ApplicationStart -> ValidateService -> BeforeAllowTraffic -> AllowTraffic -> AfterAllowTraffic`

**Types Of Deployment**

- `In Place Deployment`: Also known as `Half at a time`. First half of the instance get deployed and then the other half of the application deployed.
- `Blue Green Deployment`: Initially it keeps the previous instances and application. A new set of instance will be created and load balancer send traffic on both of these. If everything goes fine, all the traffic will go to the new instances.

> Blue green deployment is not supported by on premise servers
