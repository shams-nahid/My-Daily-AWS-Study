## OVERVIEW

- Serverless Application Model
- Framework for developing and deploying serverless applications
- All config is in the `YAML` format
  - Lambda function
  - DynamoDB table
  - API Gateway
  - Cognito User Pool
- `SAM` help to run followings locally
  - API Gateway
  - DynamoDB Table
- `SAM` help to integrate `Code Deploy`, so `Lambda Functions` can deploy easily
- Allow test the `Lambda function` locally
  - Can invoke `function` and `events` locally
- `SAM Templates` can be used to test the app through before deploy
- Using `SAM Built In Code Deploy`, application can be deployed to the cloud
- SAM can run locally using SAM CLI + AWS ToolKit for local testing and debugging
- `SAM Policy Templates`: To access resource, we need to add IAM roles to the Lambda, `SAM Policy Templates` can be used instead

### SAM & CodeDeploy

- CodeDeploy is integrated closely with the SAM
- Anytime we update a Lambda function, the CodeDeploy play the role of deployment
- Properties
  - `AutoPublishAlias`: Detect when new code is being updated
  - `DeploymentPreference`: Determine how the code deployment will work
    - Linear
    - Canary
    - All At Once
- Alarms: To trigger rollback
- Hooks: Can run before and after traffic shifting in the new Lambda function

### SAM Local Capabilities

- We can start and invoke Lambda function
  - `sam local start-lambda` for starting a local endpoint
  - `sam local invoke` to invoke a lambda with payload
- `invoke` is for run once and then quit while `start-lambda` keeps the endpoint open for function invocation
- `sam local start-api` for run local HTTP server for the `API Gateway`
- `sam local generate-event` for generate sample event sources from services like S3, SNS, SQS etc

### SAR

- Serverless application repository
- Used to store SAM app in the repository, so we can use
  - Publicly
  - Defined Account
- Use for reduce code duplication using
  - Environment variables
  - Directly mention
