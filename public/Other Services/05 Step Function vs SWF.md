## Step Function

- `JSON state machine`
- Orchestrate virtual workflow by `lambda functions`
- Also work with
  - `ECS`
  - `EC2`
  - `API Gateway`
  - `On Premise Server`
- Has feature to implement `Human Approval Feature`, but not native
- Use to automate the recurring task

## SWF

- `Simple Work Flow`
- Run on `EC2`, not `Serverless`
- Concept of
  - `Activity Step`
  - `Decision Step`
- Has built in `Human Intervention Feature`
- Used when
  - External Signal is is required to intervene
  - When child process return value to parent process
- Can be used to de couple an application
- Properties
  - `Tags`: Allow filtering the list of executions
  - `Makers`: Records history of executions
  - `Timers`: Allow notify the decider after a certain amount of defined time
  - `Signals`: Enable to inject information to the execution

## Step Function vs SWF

- `Step Function`
  - Serverless
  - No human intervention
- `SWF`
  - No `Serverless`
  - Build in human intervention
