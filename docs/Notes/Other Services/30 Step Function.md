### Step Function

---

- `JSON state machine`
- Orchestrate virtual workflow by `lambda functions`
- Can resolve the timeout issue of the long running `lambda function`
- Also work with
  - `ECS`
  - `EC2`
  - `API Gateway`
  - `On Premise Server`
- Has feature to implement `Human Approval Feature`, but not native
- Use to automate the recurring task

**States**

- `Task State`: Used to do work, task or run processes
- `Choice State`: Make choices between branches of execution
- `Failed or Succeed State`: Stop the execution with fail or success state
- `Pass State`: Do not run any process, simply take input and pass it to output. If needs any fix, do the fixing and send to the output
- `Wait State`: Make a delay before next time. The delayed time can be specified
- `Parallel State`: Start parallel branch execution
- `Map State`: Iterate the states. `ItemPath` used here

> To run process, `Task State` or `Parallel State` can be used.

**Handle Error**

Both the `Task State` and `Parallel` state has `Catch` and `Retry` field. To handle error and do a retry we can make use of these state machine features.

### Handle Error

---

**Capture Error By Types**

- States.ALL: Matches any error
- States.Timeout: Task running longer or no heartbeat received
- States.TaskFailed: Execution failure
- States.Permissions: No previllage to execute code

**Retrier**

For retry, we can define different policy for the error. With different error, we can go through different error policy.

- `ErrorEquals`: Array of error names. When error occur, it goes to the corresponding retry policy.
- `IntervalSeconds`: Interval time before retry. Default is 1 second.
- `MaxAttempts`: Maximum number of retry, default is 3.
- `BackoffRate`: Additional delay with each new retry, default is 2 seconds

**Catcher**

- `ErrorEquals`: Array of error names. When error occurs, it goes to the exactly same named retry policy.
- `Next`: Next state machine name
- `ResultPath`: Determine next state machine input path and in case of error, pass it to the next step

**Wait for task token**

- When a step function is relied on the services that might take time, so the function needs to hold on, then use the `wait for task token` service
- Appennd `.waitForTaskToken` in the end of resource ARN
- In the message body add the `TaskToken`` as key so the reciving application knows how to callback the step function 
- After the task is completed, the `SendTaskApi` will be called with the `taskToken`

**Best Practices**

- Specify the timeout for the state machine
- For larger payload between functions, use `S3`
- Let the error be handled by the step functions, not in the task methods
